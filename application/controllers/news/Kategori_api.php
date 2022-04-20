<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Kategori_api extends CI_Controller
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
        $this->load->view('news/admin/kategori');
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
                        'uniq_kategori' => $_GET["uniq_kategori"]
                    );
                }
                $response      = array();
                $queryDataRead = $this->crud_function_model->readData('kategori', '', $whereParam, 'id_kategori desc', '');
                foreach ($queryDataRead as $item) {
                    $kategori = array(
                        'id_kategori' => $item['id_kategori'],
                        'uniq_kategori' => $item['uniq_kategori'],
                        'title' => $item['title'],
                        'deskripsi' => $item['deskripsi'],
                        'status' => $item['status'],
                        'link' => $item['link']
                    );
                    array_push($response, $kategori);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'insert') {
                $response = array();
                $param    = array(
                    'uniq_kategori' => $this->input->post('uniq_kategori'),
                    'title' => $this->input->post('title'),
                    'deskripsi' => $this->input->post('deskripsi'),
                    'link' => $this->input->post('link'),
                    'status' => $this->input->post('status')
                );
                $this->form_validation->set_rules('title', 'title', 'required');
                $this->form_validation->set_rules('deskripsi', 'deskripsi', 'required');
                $this->form_validation->set_rules('link', 'link', 'required');
                $this->form_validation->set_rules('status', 'status', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->insertData('kategori', $param);
                    $message    = array(
                        'status' => '1',
                        'message' => 'input berhasil'
                    );
                    array_push($response, $message);
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
                $where    = array(
                    'uniq_kategori' => $this->input->post('uniq_kategori')
                );
                $set      = array(
                    'title' => $this->input->post('title'),
                    'deskripsi' => $this->input->post('deskripsi'),
                    'link' => $this->input->post('link'),
                    'status' => $this->input->post('status')
                );
                $this->form_validation->set_rules('title', 'title', 'required');
                $this->form_validation->set_rules('deskripsi', 'deskripsi', 'required');
                $this->form_validation->set_rules('link', 'link', 'required');
                $this->form_validation->set_rules('status', 'status', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->updateData('kategori', $set, $where);
                    $message    = array(
                        'status' => '1',
                        'message' => 'input berhasil'
                    );
                    array_push($response, $message);
                } else {
                    $message = array(
                        'status' => '2',
                        'message' => validation_errors()
                    );
                    array_push($response, $message);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'delete') {
                $response = array();
                $param    = array(
                    'uniq_kategori' => $_GET['uniq_kategori']
                );
                $this->crud_function_model->deleteData('kategori', $param);
                $message = array(
                    'status' => '1',
                    'message' => 'delete berhasil'
                );
                array_push($response, $message);
                echo json_encode($response);
            }
        }
    }
}