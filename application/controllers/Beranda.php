<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Beranda extends CI_Controller
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
        redirect('beranda/home', 'location');
    }
    public function home(){
        if($this->uri->segment(1) == 'beranda' || $this->uri->segment(1) == 'berita'){
            $urlpages = "../";
        } if($this->uri->segment(1) == 'detail'){
            $urlpages = "../../";
        }
        $data = array(
            'title' => 'suaraindonesia.com',
            'content_desk' => 'Media Nasional Berjaringan suaraindonesia.co.id adalah media mainstream yang sudah memiliki legalitas resmi Kemenkumham dan Terverifikasi Faktual Dewan Pers',
            'url_segment' => $urlpages,
            'link_page' => current_url(),
            'title_url' => 'suara-indonesia'
        );
        $this->load->view('news/pages_user_2/header', $data);
        $this->load->view('news/pages_user_2/nav', $data);
        $this->load->view('news/pages_user_2/top', $data);
        $this->load->view('news/pages_user_2/populer_slider', $data);
        $this->load->view('news/pages_user_2/kategori');
        $this->load->view('news/pages_user_2/footer', $data);
    }
    public function kategori_menu(){
        $kategoriQuery = $this->crud_function_model->readData('kategori', '', '', '', '');
        foreach ($kategoriQuery as $item) {
            $kategori[] = $item;
        }
        // 
        $pagesQuery = $this->crud_function_model->readData('pages a', 'a.uniq_pages, a.judul, a.link_pages', '', '', '');
        foreach ($pagesQuery as $item) {
            $pages[] = $item;
        }
        $response = array(
            'count_kategori' => count($kategoriQuery),
            'kategori' => $kategori,
            'count_pages' => count($pagesQuery),
            'pages' => $pages
        );
        echo json_encode($response);
    }
    public function content_data(){
        $query = $this->crud_function_model->selectJoinFiveTable("LOWER(REPLACE(a.title, ' ', '-')) AS linked, replace(DATE_FORMAT(a.tgl, '%d %M, %Y'), ',', ' ') AS tgl, RIGHT(a.tgl, 8) AS jam, a.uniq_berita, a.title AS judul_berita, a.gambar, b.title AS nama_kategori, c.nama_fokus_berita, d.nama_user AS nama_editor, e.nama_user AS nama_kontributor, a.`content`", 'berita a', 'kategori b', 'a.kategori_id = b.uniq_kategori', '', 'fokus_berita c', 'a.fokus_berita_id = c.uniq_fokus_berita', '',  'user d', 'a.editor = d.uniq_user', '', 'user e', 'a.`kontributor` = e.uniq_user', '', "a.`content` = 'top' OR a.`content` = 'slider' OR a.`content` = 'side' OR a.`content` = 'populer'", 'RAND()');
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
    public function kategori_data(){
        if(!empty($_GET['kategori_id'])){
            $where = array(
                'b.`content`' => '',
                'b.`kategori_id`' => $_GET['kategori_id']
            );
        } else {
            $where = array(
                'b.`content`' => ''
            );
        }
        
        // $query = $this->crud_function_model->selectJoinTwoTable('a.`title`, b.`title`, b.`uniq_berita`, b.`gambar`, b.`fokus_berita_id`', 'kategori a', 'berita b', 'a.`uniq_kategori` = b.`kategori_id`', '', '', 'rand() limit 4');
        $query = $this->crud_function_model->selectJointhreeTable("LOWER(REPLACE(b.title, ' ', '-')) AS linked, replace(DATE_FORMAT(b.tgl, '%d %M, %Y'), ',', ' ') AS tgl, a.`uniq_kategori`, a.`title` AS nama_kategori,b.`title`,b.`uniq_berita`,b.`gambar`,c.`nama_fokus_berita`", 'kategori a', 'berita b', 'a.`uniq_kategori` = b.`kategori_id`', '', 'fokus_berita c', 'b.`fokus_berita_id` = c.`uniq_fokus_berita`', '', $where, 'RAND() limit 6');
        foreach($query as $item){
            $data[] = $item;
        }
        $response = array(
            'count' => count($query),
            'data' => $data
        );
        echo json_encode($response);
    }
    public function fokus_berita(){
        $fokusQuery = $this->crud_function_model->readData('fokus_berita', '', '', '', '');
        foreach ($fokusQuery as $item) {
            $fokus[] = $item;
        }
        $response = array(
            'count' => count($fokusQuery),
            'data' => $fokus
        );
        echo json_encode($response);
    }
    public function content_terbaru(){
        $query = $this->crud_function_model->selectJoinFiveTableLimit("LOWER(REPLACE(a.title, ' ', '-')) AS linked, replace(DATE_FORMAT(a.tgl, '%d %M, %Y'), ',', ' ') AS tgl, RIGHT(a.tgl, 8) AS jam, a.uniq_berita, a.title AS judul_berita, a.gambar, b.title AS nama_kategori, c.nama_fokus_berita, d.nama_user AS nama_editor, e.nama_user AS nama_kontributor, a.`content`", 'berita a', 'kategori b', 'a.kategori_id = b.uniq_kategori', '', 'fokus_berita c', 'a.fokus_berita_id = c.uniq_fokus_berita', '',  'user d', 'a.editor = d.uniq_user', '', 'user e', 'a.`kontributor` = e.uniq_user', '', "", 'a.id_berita asc', '6');
        foreach($query as $item){
            $terbaru[] = $item;
        }
        $response = array(
            'data' => $terbaru
        );
        echo json_encode($response);
    }
}