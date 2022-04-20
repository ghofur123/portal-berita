<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class user_api extends CI_Controller
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
        $this->load->view('news/admin/user');
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
                        'uniq_user' => $_GET["uniq_user"]
                    );
                }
                $response      = array();
                $queryDataRead = $this->crud_function_model->readData('user', '', $whereParam, 'id_user desc', '');
                foreach ($queryDataRead as $item) {
                    $user = array(
                        'id_user' => $item['id_user'],
                        'uniq_user' => $item['uniq_user'],
                        'nama_user' => $item['nama_user'],
                        'username' => $item['username'],
                        'password' => $item['password'],
                        'level' => $item['level']
                    );
                    array_push($response, $user);
                }
                echo json_encode($response);
            }else if ($_GET['act'] == 'load_user_status') {
                
                $response      = array();
                $queryDataRead = $this->crud_function_model->selectJoinTwoTable('*', 'user a', 'status_user b','a.`level` = b.`uniq_status_user`','',  'b.`nama_status` like \'%'.$_GET['where_parameter'].'%\'', 'a.`nama_user` ASC');
                foreach ($queryDataRead as $item) {
                    $user =  $item;
                    array_push($response, $user);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'insert') {
                $response = array();
                $param    = array(
                    'uniq_user' => $this->input->post('uniq_user'),
                    'nama_user' => $this->input->post('nama_user'),
                    'username' => $this->input->post('username'),
                    'password' => sha1($this->input->post('password')),
                    'level' => $this->input->post('level')
                );
                $this->form_validation->set_rules('nama_user', 'nama_user', 'required');
                $this->form_validation->set_rules('username', 'username', 'required');
                $this->form_validation->set_rules('password', 'password', 'required');
                $this->form_validation->set_rules('level', 'level', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->insertData('user', $param);
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
                    'uniq_user' => $this->input->post('uniq_user')
                );
                $set      = array(
                    'nama_user' => $this->input->post('nama_user'),
                    'username' => $this->input->post('username'),
                    'password' =>sha1( $this->input->post('password')),
                    'level' => $this->input->post('level')
                );
                $this->form_validation->set_rules('nama_user', 'nama_user', 'required');
                $this->form_validation->set_rules('username', 'username', 'required');
                $this->form_validation->set_rules('password', 'password', 'required');
                $this->form_validation->set_rules('level', 'level', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->updateData('user', $set, $where);
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
                    'uniq_user' => $_GET['uniq_user']
                );
                $this->crud_function_model->deleteData('user', $param);

                $param    = array(
                    'user_id' => $_GET['uniq_user']
                );
                $this->crud_function_model->deleteData('menu_access', $param);
                // sekaligus delete menu access yang melakat ke user
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