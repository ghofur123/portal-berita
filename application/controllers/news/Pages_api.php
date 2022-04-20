<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Pages_api extends CI_Controller
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
        $this->load->view('news/admin/pages');
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
                        'uniq_pages' => $_GET["uniq_pages"]
                    );
                }
                $response      = array();
                $queryDataRead = $this->crud_function_model->readData('pages', '', $whereParam, 'id_pages desc', '');
                foreach ($queryDataRead as $item) {
                    $pages = $item;
                    array_push($response, $pages);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'insert') {
                $response = array();
                $param    = array(
                    'uniq_pages' => $this->input->post('uniq_pages'),
                    'judul' => $this->input->post('judul'),
                    'link_pages' => $this->input->post('link_pages'),
                    'status' => $this->input->post('status'),
                    'deskripsi' => $this->input->post('deskripsi')
                );
                $this->form_validation->set_rules('judul', 'judul', 'required');
                $this->form_validation->set_rules('link_pages', 'link_pages', 'required');
                $this->form_validation->set_rules('status', 'status', 'required');
                $this->form_validation->set_rules('deskripsi', 'deskripsi', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->insertData('pages', $param);
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
                    'uniq_pages' => $this->input->post('uniq_pages')
                );
                $set      = array(
                    'judul' => $this->input->post('judul'),
                    'link_pages' => $this->input->post('link_pages'),
                    'status' => $this->input->post('status'),
                    'deskripsi' => $this->input->post('deskripsi_edit')
                );
                $this->form_validation->set_rules('judul', 'judul', 'required');
                $this->form_validation->set_rules('link_pages', 'link_pages', 'required');
                $this->form_validation->set_rules('status', 'status', 'required');
                $this->form_validation->set_rules('deskripsi_edit', 'deskripsi', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->updateData('pages', $set, $where);
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
                    'uniq_pages' => $_GET['uniq_pages']
                );
                $this->crud_function_model->deleteData('pages', $param);
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