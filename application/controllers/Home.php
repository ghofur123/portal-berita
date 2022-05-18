<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Home extends CI_Controller
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
        $this->load->view('news/pages_user/header');
        $this->load->view('news/pages_user/nav_bar');
        $this->load->view('news/pages_user/top_content');
        $this->load->view('news/pages_user/slide_content');
        $this->load->view('news/pages_user/populer');
        $this->load->view('news/pages_user/kategori');
        $this->load->view('news/pages_user/bottom_content');
        $this->load->view('news/pages_user/footer');
    }
    public function menu_nav(){
        $queryDataRead = $this->crud_function_model->readData('kategori', '', '', '', '');
        foreach ($queryDataRead as $item) {
            $kategori[] = $item;
        }
        $response = array(
            'count' => count($queryDataRead),
            'kategori' => $kategori
        );
        echo json_encode($response);
    }
    public function content(){
        $query = $this->crud_function_model->selectJoinFiveTable('a.uniq_berita, a.title AS judul_berita, a.gambar, b.title AS nama_kategori, c.nama_fokus_berita, d.nama_user AS nama_editor, e.nama_user AS nama_kontributor, a.`content`', 'berita a', 'kategori b', 'a.kategori_id = b.uniq_kategori', '', 'fokus_berita c', 'a.fokus_berita_id = c.uniq_fokus_berita', '',  'user d', 'a.editor = d.uniq_user', '', 'user e', 'a.`kontributor` = e.uniq_user', '', "a.`content` = 'top' OR a.`content` = 'slider' OR a.`content` = 'side' OR a.`content` = 'populer'", 'a.`id_berita` DESC');
        foreach($query as $item){
            if($item['content'] == 'top'){
                $top[] = $item;
            } else if($item['content'] == 'slider'){
                $slider[] = $item;
            } else if($item['content'] == 'side'){
                $side[] = $item;
            } else if($item['content'] == 'populer'){
                $populer[] = $item;
            }
        }
        $response = array(
            'top' => $top,
            'slide' => $slider,
            'side' => $side,
            'populer' => $populer
        );
        echo json_encode($response);
    }
}