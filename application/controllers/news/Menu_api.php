<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class menu_api extends CI_Controller
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
        $this->load->view('news/admin/menu');
    }
    public function load()
    {
        if (!isset($_GET['act'])) {
        } else {
            if ($_GET['act'] == 'load') {
                if(isset($_GET['where_parameter'])){
                    $whereParam = array(
                        'uniq_menu' => $_GET["uniq_menu"]
                    );
                }else if(isset($_GET['where_like'])){
                    $whereParam = 'nama_menu LIKE  \'%'.$_GET['where_like'].'%\'';
                } else if(isset($_GET['where_status'])){
                    $whereParam = array(
                        'status' => $_GET['where_status']
                    );
                } else {
                    $whereParam = '';
                }
                $menu;
                $queryDataRead = $this->crud_function_model->readData('menu', '', $whereParam, 'id_menu desc','');
                foreach ($queryDataRead as $item) {
                    $menu[] = array(
                        'id_menu' => $item['id_menu'],
                        'uniq_menu' => $item['uniq_menu'],
                        'nama_menu' => $item['nama_menu'],
                        'status' => $item['status'],
                        'link' => $item['link']
                    );
                }
                if(!isset($menu)){
                    $response = array(
                        'data' => ''
                    );
                } else {
                    $response = array(
                        'jumlah' => count($queryDataRead),
                        'data' => $menu
                    );
                }
                echo json_encode($response);
            }if ($_GET['act'] == 'load_menu_nav') {
                
                $queryDataRead = $this->crud_function_model->selectJointhreeTable('c.`nama_menu`,c.`link`,c.`uniq_menu`,c.`menu_utama_id`, a.`create`,a.`read`,a.`update`,a.`delete`, c.`status`', 'menu_access a','USER b', 'a.`user_id` = b.`uniq_user`','', 'menu c', 'a.`menu_id` = c.`uniq_menu`', '', 'a.`create` = "y" OR a.`read` = "y" OR a.`update` = "y" OR a.`delete` = "y" AND a.`user_id` = '.$_SESSION['uniq_user'].'', 'c.nama_menu ASC');
                foreach ($queryDataRead as $item) {
                    if($item['status'] == 1){
                        $menu_utama[] = $item;
                    }else if($item['status'] == 2){
                        $menu_sub[] = $item;
                    }
                    
                }
                // if(!isset($menu_utama)){
                //     $response = array(
                //         'data' => ''
                //     );
                // } else {
                //     $response = array(
                //         'jumlah' => count($queryDataRead),
                //         'menu_utama' => $menu_utama,
                //         'menu_sub' => $menu_sub
                //     );
                // }
                $response = array(
                    'jumlah' => count($queryDataRead),
                    'menu_utama' => $menu_utama,
                    'menu_sub' => $menu_sub
                );
                echo json_encode($response);
            } else if ($_GET['act'] == 'load_menu_pages') {
                $response      = array();
                $queryDataRead = $this->crud_function_model->readDataManuallyFunction("
                    SELECT
                        c.`nama_menu`,
                        c.`link`,
                        a.`create`,
                        a.`read`,
                        a.`update`,
                        a.`delete`
                    FROM
                        menu_access AS a
                        JOIN USER AS b
                        JOIN menu AS c
                        ON a.`user_id` = b.`uniq_user`
                        AND a.`menu_id` = c.`uniq_menu`
                        AND a.`user_id` = ".$_SESSION['uniq_user']."
                    WHERE a.`create` = 'y'
                        OR a.`read` = 'y'
                        OR a.`update` = 'y'
                        OR a.`delete` = 'y'
                ");
                foreach ($queryDataRead as $item) {
                    $menu = array(
                        'nama_menu' => $item['nama_menu'],
                        'link' => $item['link'],
                        'create' => $item['create'],
                        'read' => $item['read'],
                        'update' => $item['update'],
                        'delete' => $item['delete']
                    );
                    array_push($response, $menu);
                }
                echo json_encode($response);
            } else if ($_GET['act'] == 'load_menu_access') {
            
                $response      = array();
                $queryDataRead = $this->crud_function_model->readDataManuallyFunction("
                    SELECT
                    *
                    FROM
                    menu AS a
                    LEFT JOIN menu_access AS b
                        ON a.`uniq_menu` = b.`menu_id`
                        AND b.`user_id` = $_GET[uniq_user]
                    LEFT JOIN user AS c
                        ON b.`user_id` = c.`uniq_user`
                        AND c.`uniq_user` = $_GET[uniq_user]
                ");
                foreach ($queryDataRead as $item) {
                    $menu = array(
                        'id_menu' => $item['id_menu'],
                        'uniq_menu' => $item['uniq_menu'],
                        'nama_menu' => $item['nama_menu'],
                        'create' => $item['create'],
                        'read' => $item['read'],
                        'update' => $item['update'],
                        'delete' => $item['delete'],
                        'uniq_menu_access' => $item['uniq_menu_access']
                    );
                    array_push($response, $menu);
                }
                echo json_encode($response);
            }else if ($_GET['act'] == 'insert') {
                $response = array();
                $param    = array(
                    'uniq_menu' => $this->input->post('uniq_menu'),
                    'nama_menu' => $this->input->post('nama_menu'),
                    'status' => $this->input->post('status'),
                    'menu_utama_id' => $this->input->post('menu_utama_id'),
                    'link' => $this->input->post('link')
                );
                $this->form_validation->set_rules('nama_menu', 'nama_menu', 'required');
                $this->form_validation->set_rules('status', 'status', 'required');
                // $this->form_validation->set_rules('menu_utama_id', 'menu_utama_id', 'required');
                $this->form_validation->set_rules('link', 'link', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->insertData('menu', $param);
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
                    'uniq_menu' => $this->input->post('uniq_menu')
                );
                $set      = array(
                    'nama_menu' => $this->input->post('nama_menu'),
                    'status' => $this->input->post('status'),
                    'menu_utama_id' => $this->input->post('menu_utama_id'),
                    'link' => $this->input->post('link')
                );
                $this->form_validation->set_rules('nama_menu', 'nama_menu', 'required');
                $this->form_validation->set_rules('status', 'status', 'required');
                // $this->form_validation->set_rules('menu_utama_id', 'Menu Utama', 'required');
                $this->form_validation->set_rules('link', 'link', 'required');
                if ($this->form_validation->run() == true) {
                    $queryLogin = $this->crud_function_model->updateData('menu', $set, $where);
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
                    'uniq_menu' => $_GET['uniq_menu']
                );
                $this->crud_function_model->deleteData('menu', $param);
                $param2    = array(
                    'menu_id' => $_GET['uniq_menu']
                );
                $this->crud_function_model->deleteData('menu_access', $param2);
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