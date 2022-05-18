<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Berita_api extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->output->set_header('Access-Control-Allow-Origin: *');
        $this->output->set_header('Access-Control-Allow-Credentials: true');
        $this->output->set_header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
        $this->output->set_header('Access-Control-Max-Age: 604800');
        $this->output->set_header('Access-Control-Request-Headers: x-requested-with');
        $this->output->set_header('Access-Control-Allow-Headers: x-requested-with, x-requested-by');
        $this->load->database();
        $this->load->model('crud_function_model');
    }
    public function index()
    {
        $this->load->view('news/admin/berita');
    }
    public function load()
    {
        if (!isset($_GET['act'])) {
        } else {
            if ($_GET['act'] == 'load') {
                if (!isset($_GET['where_parameter'])) {
                    $whereParam = '';
                } else {
                    $whereParam = array(
                        'uniq_berita' => $_GET["uniq_berita"]
                    );
                }
                $response      = array();
                $queryDataRead = $this->crud_function_model->selectJoinFourTable('a.*, b.`nama_user` AS editor_nm, c.`nama_user` AS kontributor_nm, d.`title` AS title_kategori', 'berita a', 'user b', 'a.`editor` = b.`uniq_user`', '', 'user c', 'a.`kontributor` = c.`uniq_user`','', 'kategori d', 'a.`kategori_id` = d.`uniq_kategori`', '', $whereParam, 'a.`id_berita` DESC');
                foreach ($queryDataRead as $item) {
                    $berita = array(
                        'id_berita' => $item['id_berita'],
                        'uniq_berita' => $item['uniq_berita'],
                        'user_id' => $item['user_id'],
                        'tgl' => $item['tgl'],
                        'title' => $item['title'],
                        'kategori_id' => $item['kategori_id'],
                        'editor' => $item['editor'],
                        'kontributor' => $item['kontributor'],
                        'status_publikasi' => $item['status_publikasi'],
                        'fokus_berita_id' => $item['fokus_berita_id'],
                        'tags_id' => $item['tags_id'],
                        'gambar' => $item['gambar'],
                        'deskripsi' => $item['deskripsi'],
                        'komentar_reaksi' => $item['komentar_reaksi'],
                        'title_kategori' => $item['title_kategori'],
                        'editor_nm' => $item['editor_nm'],
                        'kontributor_nm' => $item['kontributor_nm'],
                        'content' => $item['content']
                    );
                    array_push($response, $berita);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'insert') {
                $response = array();
                $this->form_validation->set_rules('uniq_berita', 'uniq_berita', 'required');
                $this->form_validation->set_rules('title', 'title', 'required');
                $this->form_validation->set_rules('kategori_id', 'Kategori', 'required');
                $this->form_validation->set_rules('editor', 'editor', 'required');
                $this->form_validation->set_rules('kontributor', 'kontributor', 'required');
                $this->form_validation->set_rules('status_publikasi', 'Status', 'required');
                $this->form_validation->set_rules('fokus_berita_id', 'Fokus Berita', 'required');
                $this->form_validation->set_rules('tags_id', 'tags_id', 'required');
                $this->form_validation->set_rules('deskripsi', 'deskripsi', 'required');
                $this->form_validation->set_rules('content', 'content', 'required');
                if ($this->form_validation->run() == true) {
                    $rand          = rand(00000000000000000000, 99999999999999999999);
                    $config_upload = array(
                        'file_name' => 'beritajatim_com' . $rand . '.jpg',
                        'upload_path' => './uploads/',
                        'allowed_types' => 'gif|jpg|png|jpeg|gif'
                    );
                    $this->load->library('upload', $config_upload);
                    if (!$this->upload->do_upload('gambar')) {
                        $message = array(
                            'status' => '2',
                            'message' => $this->upload->display_errors()
                        );
                        array_push($response, $message);
                    } else {
                        $config_risize = array(
                            'image_library' => 'gd2',
                            'source_image' => './uploads/' . $this->upload->data('file_name'),
                            'new_image' => './uploads/up/',
                            'create_thumb' => FALSE,
                            'maintain_ratio' => TRUE,
                            'width' => 500,
                            'height' => 500
                        );
                        $this->load->library('image_lib', $config_risize);
                        $this->image_lib->resize();
                        if (!$this->image_lib->resize()) {
                            $message = array(
                                'status' => '2',
                                'message' => $this->image_lib->display_errors()
                            );
                            array_push($response, $message);
                        } else {
                            unlink('./uploads/' . $this->upload->data('file_name'));
                            $message = array(
                                'status_risize' => '1',
                                'message_risize' => 'risize berhasil'
                            );
                            array_push($response, $message);
                            $config_wm = array(
                                'source_image' => './uploads/up/' . $this->upload->data('file_name'),
                                'wm_text' => 'beritajatim.com',
                                'wm_type' => 'text',
                                'wm_font_path' => './system/fonts/texb.ttf',
                                'wm_font_size' => '11',
                                'wm_opacity' => '0,5',
                                'wm_font_color' => 'ffffff',
                                'wm_vrt_alignment' => 'middle',
                                'wm_hor_alignment' => 'center',
                                'wm_padding' => '20'
                            );
                            $this->image_lib->initialize($config_wm);
                            if (!$this->image_lib->watermark()) {
                                $message = array(
                                    'status_watermark' => '2',
                                    'message2' => $this->image_lib->display_errors()
                                );
                                array_push($response, $message);
                            } else {
                                $param      = array(
                                    'uniq_berita' => $this->input->post('uniq_berita'),
                                    'user_id' => $_SESSION['uniq_user'],
                                    // 'tgl' => $this->input->post('tgl'),
                                    'title' => $this->input->post('title'),
                                    'kategori_id' => $this->input->post('kategori_id'),
                                    'editor' => $this->input->post('editor'),
                                    'kontributor' => $this->input->post('kontributor'),
                                    'status_publikasi' => $this->input->post('status_publikasi'),
                                    'fokus_berita_id' => $this->input->post('fokus_berita_id'),
                                    'tags_id' => $this->input->post('tags_id'),
                                    'gambar' => $this->upload->data('file_name'),
                                    'deskripsi' => $this->input->post('deskripsi'),
                                    'content' => $this->input->post('content')
                                );
                                $queryLogin = $this->crud_function_model->insertData('berita', $param);
                                $message    = array(
                                    'status_watermark' => '1',
                                    'message_watermark' => 'watermark berhasil',
                                    'status' => '1',
                                    'message' => 'input berhasil'
                                );
                                array_push($response, $message);
                            }
                        }
                    }
                } else {
                    $message = array(
                        'status' => '2',
                        'message' => validation_errors()
                    );
                    array_push($response, $message);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'update') {
                $response = array();
                $this->form_validation->set_rules('uniq_berita', 'uniq_berita', 'required');
                $this->form_validation->set_rules('user_id', 'user_id', 'required');
                $this->form_validation->set_rules('title', 'title', 'required');
                $this->form_validation->set_rules('kategori_id', 'kategori_id', 'required');
                $this->form_validation->set_rules('editor', 'editor', 'required');
                $this->form_validation->set_rules('kontributor', 'kontributor', 'required');
                $this->form_validation->set_rules('status_publikasi', 'status_publikasi', 'required');
                $this->form_validation->set_rules('fokus_berita_id', 'fokus_berita_id', 'required');
                $this->form_validation->set_rules('tags_id', 'tags_id', 'required');
                $this->form_validation->set_rules('deskripsi_edit', 'deskripsi', 'required');
                $this->form_validation->set_rules('content', 'content', 'required');
                // $this->form_validation->set_rules('komentar_reaksi', 'komentar_reaksi', 'required');
                $this->form_validation->set_rules('user_id', 'user_id', 'required');
                if ($this->form_validation->run() == true) {
                    if ($_FILES['gambar']['name'] == null || $_FILES['gambar']['name'] == '') {
                        $where22      = array(
                            'uniq_berita' => $this->input->post('uniq_berita')
                        );
                        $set22        = array(
                            'user_id' => $this->input->post('user_id'),
                            'title' => $this->input->post('title'),
                            'kategori_id' => $this->input->post('kategori_id'),
                            'editor' => $this->input->post('editor'),
                            'kontributor' => $this->input->post('kontributor'),
                            'status_publikasi' => $this->input->post('status_publikasi'),
                            'fokus_berita_id' => $this->input->post('fokus_berita_id'),
                            'tags_id' => $this->input->post('tags_id'),
                            'deskripsi' => $this->input->post('deskripsi_edit'),
                            'content' => $this->input->post('content')
                        );
                        $this->crud_function_model->updateData('berita', $set22, $where22);
                        // $message    = array(
                        //     'status' => '1',
                        //     'message' => 'update berhasil'
                        // );
                        // array_push($response, $message);
                    } else {
                        $rand          = rand(00000000000000000000, 99999999999999999999);
                        $config_upload = array(
                            'file_name' => 'beritajatim_com' . $rand . '.jpg',
                            'upload_path' => './uploads/',
                            'allowed_types' => 'gif|jpg|png|jpeg|gif'
                        );
                        $this->load->library('upload', $config_upload);
                        if (!$this->upload->do_upload('gambar')) {
                            $message = array(
                                'status' => '2',
                                'message' => $this->upload->display_errors()
                            );
                            array_push($response, $message);
                        } else {
                            $whereParamDelete    = array(
                                'uniq_berita' => $this->input->post('uniq_berita')
                            );
                            $queryDataReadDelete = $this->crud_function_model->readData('berita', '', $whereParamDelete, '','');
                            foreach ($queryDataReadDelete as $item) {
                                unlink('./uploads/up/' . $item['gambar']);
                            }
                            $config_risize = array(
                                'image_library' => 'gd2',
                                'source_image' => './uploads/' . $this->upload->data('file_name'),
                                'new_image' => './uploads/up/',
                                'create_thumb' => FALSE,
                                'maintain_ratio' => TRUE,
                                'width' => 500,
                                'height' => 500
                            );
                            $this->load->library('image_lib', $config_risize);
                            $this->image_lib->resize();
                            if (!$this->image_lib->resize()) {
                                $message = array(
                                    'status' => '2',
                                    'message' => $this->image_lib->display_errors()
                                );
                                array_push($response, $message);
                            } else {
                                unlink('./uploads/' . $this->upload->data('file_name'));
                                $message = array(
                                    'status_risize' => '1',
                                    'message_risize' => 'risize berhasil'
                                );
                                array_push($response, $message);
                                $config_wm = array(
                                    'source_image' => './uploads/up/' . $this->upload->data('file_name'),
                                    'wm_text' => 'beritajatim.com',
                                    'wm_type' => 'text',
                                    'wm_font_path' => './system/fonts/texb.ttf',
                                    'wm_font_size' => '11',
                                    'wm_opacity' => '0,5',
                                    'wm_font_color' => 'ffffff',
                                    'wm_vrt_alignment' => 'middle',
                                    'wm_hor_alignment' => 'center',
                                    'wm_padding' => '20'
                                );
                                $this->image_lib->initialize($config_wm);
                                if (!$this->image_lib->watermark()) {
                                    $message = array(
                                        'status_watermark' => '2',
                                        'message_watermark' => $this->image_lib->display_errors()
                                    );
                                    array_push($response, $message);
                                } else {
                                    $set        = array(
                                        'user_id' => $this->input->post('user_id'),
                                        // 'tgl' => $this->input->post('tgl'),
                                        'title' => $this->input->post('title'),
                                        'kategori_id' => $this->input->post('kategori_id'),
                                        'editor' => $this->input->post('editor'),
                                        'kontributor' => $this->input->post('kontributor'),
                                        'status_publikasi' => $this->input->post('status_publikasi'),
                                        'fokus_berita_id' => $this->input->post('fokus_berita_id'),
                                        'tags_id' => $this->input->post('tags_id'),
                                        'gambar' => $this->upload->data('file_name'),
                                        'deskripsi' => $this->input->post('deskripsi_edit'),
                                        'content' => $this->input->post('content'),
                                        // 'komentar_reaksi' => $this->input->post('komentar_reaksi')
                                    );
                                    $where      = array(
                                        'uniq_berita' => $this->input->post('uniq_berita')
                                    );
                                    $this->crud_function_model->updateData('berita', $set, $where);
                                    $message = array(
                                        'status' => '1',
                                        'status_watermark' => '1',
                                        'message' => 'Update Berhasil',
                                        'message_watermark' => 'Watermark Berhasil'
                                    );
                                    array_push($response, $message);
                                }
                            }
                        }
                    }
                } else {
                    $message = array(
                        'status' => '2',
                        'message' => validation_errors()
                    );
                    array_push($response, $message);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'delete') {
                $response      = array();
                $whereParam    = array(
                    'uniq_berita' => $_GET['uniq_berita']
                );
                $queryDataRead = $this->crud_function_model->readData('berita', '', $whereParam, '','');
                foreach ($queryDataRead as $item) {
                    unlink('./uploads/up/' . $item['gambar']);
                }
                $this->crud_function_model->deleteData('berita', $whereParam);
                $message = array(
                    'status' => '1',
                    'message' => 'delete berhasil'
                );
                array_push($response, $message);
                echo json_encode($response);
            }
        }
    }
    // function select_valdation($string){
    //     if($string == '' | $string == null){
    //         $this->form_validation->set_message('select_valdation', 'Please Select Your City.');
    //         return false;
    //     } else {
    //         $this->form_validation->set_message('select_valdation', 'Please Select Your City.');
    //         return true;
    //     }
    // }
}