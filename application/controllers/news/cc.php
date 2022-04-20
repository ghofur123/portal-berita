<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Cc extends CI_Controller
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
        $this->load->view('news/admin/cc');
    }
    public function vv(){
        
        $queryDataRead = $this->crud_function_model->readData('menu', '', '', 'id_menu desc','');
        // $vvv = $queryDataRead->num_rows();

        foreach ($queryDataRead as $item) {
            $menu[] = array(
                'id_menu' => $item['id_menu'],
                'uniq_menu' => $item['uniq_menu'],
                'nama_menu' => $item['nama_menu'],
                'status' => $item['status'],
                'link' => $item['link']
            );
            // array_push($response, $menu);
        }
        $batas = 10;
        // if((count($queryDataRead) / 10) > 1  ){
            $page = floor(count($queryDataRead) / $batas);
        // } else {
        //     $page =0;
        // }
        $response = array(
            'jumlah' => count($queryDataRead),
            'perpage' => $page,
            'data' => $menu
        );
        echo json_encode($response);
    }
    public function bb(){
        $this->load->library('pagination');

        $config['base_url'] = 'http://example.com/index.php/test/page/';
        $config['total_rows'] = 200;
        $config['per_page'] = 20;

        $this->pagination->initialize($config);

        echo $this->pagination->create_links();
        // $response = array(
        //     'link' => $this->pagination->create_links()
        // );
        // echo json_encode($response);


    }
}