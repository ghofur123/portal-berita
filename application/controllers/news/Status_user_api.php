<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Status_user_api extends CI_Controller
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
        $this->load->view('news/admin/status_user');
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
                        'uniq_status_user' => $_GET["uniq_status_user"]
                    );
                }
                $response      = array();
                $queryDataRead = $this->crud_function_model->readData('status_user', '', $whereParam, 'id_status_user desc', '');
                foreach ($queryDataRead as $item) {
                    $status_user = array(
                        'id_status_user' => $item['id_status_user'],
                        'uniq_status_user' => $item['uniq_status_user'],
                        'nama_status' => $item['nama_status'],
                        'deskripsi' => $item['deskripsi']
                    );
                    array_push($response, $status_user);
                }
                echo json_encode($response);
            }else if ($_GET['act'] == 'insert') {
                $response = array();
                $param    = array(
                    'uniq_status_user' => $this->input->post('uniq_status_user'),
                    'nama_status' => $this->input->post('nama_status'),
                    'deskripsi' => $this->input->post('deskripsi')
                );
                $this->form_validation->set_rules('nama_status', 'nama_status', 'required');
                $this->form_validation->set_rules('deskripsi', 'deskripsi', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->insertData('status_user', $param);
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
                    'uniq_status_user' => $this->input->post('uniq_status_user')
                );
                $set      = array(
                    'nama_status' => $this->input->post('nama_status'),
                    'deskripsi' => $this->input->post('deskripsi')
                );
                $this->form_validation->set_rules('nama_status', 'nama_status', 'required');
                $this->form_validation->set_rules('deskripsi', 'deskripsi', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->updateData('status_user', $set, $where);
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
                    'uniq_status_user' => $_GET['uniq_status_user']
                );
                $this->crud_function_model->deleteData('status_user', $param);
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