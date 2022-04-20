<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class fokus_berita_api extends CI_Controller
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
        $this->load->view('news/admin/fokus_berita');
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
                        'uniq_fokus_berita' => $_GET["uniq_fokus_berita"]
                    );
                }
                $response      = array();
                $queryDataRead = $this->crud_function_model->readData('fokus_berita', '', $whereParam, 'id_fokus_berita desc', '');
                foreach ($queryDataRead as $item) {
                    $fokus_berita = array(
                        'id_fokus_berita' => $item['id_fokus_berita'],
                        'uniq_fokus_berita' => $item['uniq_fokus_berita'],
                        'nama_fokus_berita' => $item['nama_fokus_berita'],
                        'link' => $item['link'],
                        'status' => $item['status']
                    );
                    array_push($response, $fokus_berita);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'insert') {
                $response = array();
                $param    = array(
                    'uniq_fokus_berita' => $this->input->post('uniq_fokus_berita'),
                    'nama_fokus_berita' => $this->input->post('nama_fokus_berita'),
                    'link' => $this->input->post('link'),
                    'status' => $this->input->post('status')
                );
                $this->form_validation->set_rules('nama_fokus_berita', 'nama_fokus_berita', 'required');
                $this->form_validation->set_rules('link', 'link', 'required');
                $this->form_validation->set_rules('status', 'status', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->insertData('fokus_berita', $param);
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
                    'uniq_fokus_berita' => $this->input->post('uniq_fokus_berita')
                );
                $set      = array(
                    'nama_fokus_berita' => $this->input->post('nama_fokus_berita'),
                    'link' => $this->input->post('link'),
                    'status' => $this->input->post('status')
                );
                $this->form_validation->set_rules('nama_fokus_berita', 'nama_fokus_berita', 'required');
                $this->form_validation->set_rules('link', 'link', 'required');
                $this->form_validation->set_rules('status', 'status', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->updateData('fokus_berita', $set, $where);
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
                    'uniq_fokus_berita' => $_GET['uniq_fokus_berita']
                );
                $this->crud_function_model->deleteData('fokus_berita', $param);
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