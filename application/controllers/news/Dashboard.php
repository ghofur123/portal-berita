<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Dashboard extends CI_Controller
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
        if(isset($_SESSION['uniq_user'])){
        $this->load->view('news/pages/header');
        $this->load->view('news/pages/nav_top');
        $this->load->view('news/pages/nav_side');
        $this->load->view('news/pages/footer');
        } else {
            echo "<script>window.location = './login';</script>";
        }
    }
    public function dashboard_api()
    {
        $this->load->view('news/admin/dashboard');
    }
    public function dashboard_data_api(){
            $berita = $this->crud_function_model->readData('berita', '', '', '', '');
            $kategori = $this->crud_function_model->readData('kategori', '', '', '', '');
            $fokus_berita = $this->crud_function_model->readData('fokus_berita', '', '', '', '');
            $user = $this->crud_function_model->readData('user', '', '', '', '');

            $response = array(
                'data' => array(
                    'berita' => count($berita),
                    'kategori' => count($kategori),
                    'fokus_berita' => count($fokus_berita),
                    'user' => count($user)
                )
            );

            echo json_encode($response);
    }
    public function analisis_api(){
        $berita_analisis = $this->crud_function_model->selectJoinTwoTableGroup('COUNT(*) as jumlah, a.title', 'kategori a', 'berita b', 'a.uniq_kategori = b.kategori_id', '', '', 'a.uniq_kategori',  'a.title ASC');
        foreach($berita_analisis as $item){
            $berita_alns[] = $item;
        }
        $response = array(
            'data' => $berita_alns
        );
        echo json_encode($response);
    }
}