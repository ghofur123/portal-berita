<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Tags_api extends CI_Controller
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
        $this->load->view('news/admin/tags');
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
                        'uniq_tags' => $_GET["uniq_tags"]
                    );
                }
                $response      = array();
                $queryDataRead = $this->crud_function_model->readData('tags', '', $whereParam, 'id_tags desc', '');
                foreach ($queryDataRead as $item) {
                    $tags = array(
                        'id_tags' => $item['id_tags'],
                        'uniq_tags' => $item['uniq_tags'],
                        'title_tags' => $item['title_tags'],
                        'link' => $item['link']
                    );
                    array_push($response, $tags);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'insert') {
                $response = array();
                $param    = array(
                    'uniq_tags' => $this->input->post('uniq_tags'),
                    'title_tags' => $this->input->post('title_tags'),
                    'link' => $this->input->post('link')
                );
                $this->form_validation->set_rules('title_tags', 'title_tags', 'required');
                $this->form_validation->set_rules('link', 'link', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->insertData('tags', $param);
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
                    'uniq_tags' => $this->input->post('uniq_tags')
                );
                $set      = array(
                    'title_tags' => $this->input->post('title_tags'),
                    'link' => $this->input->post('link')
                );
                $this->form_validation->set_rules('title_tags', 'title_tags', 'required');
                $this->form_validation->set_rules('link', 'link', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->updateData('tags', $set, $where);
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
                    'uniq_tags' => $_GET['uniq_tags']
                );
                $this->crud_function_model->deleteData('tags', $param);
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