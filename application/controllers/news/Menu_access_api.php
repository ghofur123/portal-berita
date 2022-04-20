<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class menu_access_api extends CI_Controller
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
        $this->load->view('news/admin/menu_access');
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
                        'uniq_menu_access' => $_GET["uniq_menu_access"]
                    );
                }
                $response      = array();
                $queryDataRead = $this->crud_function_model->readData('menu_access', '', $whereParam, 'id_menu_access desc', '');
                foreach ($queryDataRead as $item) {
                    $menu_access = array(
                        'id_menu_access' => $item['id_menu_access'],
                        'uniq_menu_access' => $item['uniq_menu_access'],
                        'user_id' => $item['user_id'],
                        'menu_id' => $item['menu_id'],
                        'create' => $item['create'],
                        'read' => $item['read'],
                        'update' => $item['update'],
                        'delete' => $item['delete']
                    );
                    array_push($response, $menu_access);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'insert') {
                $response = array();
                $param    = array(
                    'uniq_menu_access' => $this->input->post('uniq_menu_access'),
                    'user_id' => $this->input->post('user_id'),
                    'menu_id' => $this->input->post('menu_id'),
                    'create' => $this->input->post('create'),
                    'read' => $this->input->post('read'),
                    'update' => $this->input->post('update'),
                    'delete' => $this->input->post('delete')
                );
                $this->form_validation->set_rules('user_id', 'user_id', 'required');
                $this->form_validation->set_rules('menu_id', 'menu_id', 'required');
                $this->form_validation->set_rules('create', 'create', 'required');
                $this->form_validation->set_rules('read', 'read', 'required');
                $this->form_validation->set_rules('update', 'update', 'required');
                $this->form_validation->set_rules('delete', 'delete', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->insertData('menu_access', $param);
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
            } else if ($_GET['act'] == 'insert_tes') {
                $response = array();
                $user_id = $this->input->post('user_id');
                $length_data = $this->input->post('length_data');
                $uniq_menu_access = $this->input->post('uniq_menu_access');
                $menu_id = $this->input->post('menu_id');
                $create = $this->input->post('create');
                $read = $this->input->post('read');
                $update = $this->input->post('update');
                $delete = $this->input->post('delete');
                $metode = $this->input->post('metode');
                // for($i = 0; $i < $length_data; $i++){
                // $response = array();
                // $i =0;
                // foreach($menu_id as $item => $i){
               for($i = 0; $i < $length_data; $i++){
                    $data_array = array(
                        'uniq_menu_access' => $uniq_menu_access[$i],
                        'user_id' => $user_id,
                        'menu_id' => $menu_id[$i],
                        'create' => $create[$i],
                        'read' => $read[$i],
                        'update' => $update[$i],
                        'delete' => $delete[$i]
                    );

                    $where    = array(
                        'uniq_menu_access' => $uniq_menu_access[$i]
                    );
                    $set      = array(
                        'user_id' => $user_id,
                        'menu_id' => $menu_id[$i],
                        'create' => $create[$i],
                        'read' => $read[$i],
                        'update' => $update[$i],
                        'delete' => $delete[$i]
                    );
                    if($metode[$i] == 'insert'){
                        $this->crud_function_model->insertData('menu_access', $data_array);
                    }else if($metode[$i] == 'update') {
                        $this->crud_function_model->updateData('menu_access', $set, $where);
                    }
                    
                    array_push($response, $data_array);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'update') {
                $response = array();
                $where    = array(
                    'uniq_menu_access' => $this->input->post('uniq_menu_access')
                );
                $set      = array(
                    'user_id' => $this->input->post('user_id'),
                    'menu_id' => $this->input->post('menu_id'),
                    'create' => $this->input->post('create'),
                    'read' => $this->input->post('read'),
                    'update' => $this->input->post('update'),
                    'delete' => $this->input->post('delete')
                );
                $this->form_validation->set_rules('user_id', 'user_id', 'required');
                $this->form_validation->set_rules('menu_id', 'menu_id', 'required');
                $this->form_validation->set_rules('create', 'create', 'required');
                $this->form_validation->set_rules('read', 'read', 'required');
                $this->form_validation->set_rules('update', 'update', 'required');
                $this->form_validation->set_rules('delete', 'delete', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->updateData('menu_access', $set, $where);
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
                    'uniq_menu_access' => $_GET['uniq_menu_access']
                );
                $this->crud_function_model->deleteData('menu_access', $param);
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