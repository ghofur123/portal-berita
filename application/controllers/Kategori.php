<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Kategori extends CI_Controller
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
        $urlsegmendata = array(
            'url_segment' => $urlpages
        );
        $this->load->view('news/pages_user_2/header', $data);
        $this->load->view('news/pages_user_2/nav', $data);
        $this->load->view('news/pages_user_2/kategori/kategori', $data);
        $this->load->view('news/pages_user_2/footer2', $urlsegmendata);
        $this->load->view('news/pages_user_2/custem/custumjskategori', $urlsegmendata);
    }
    public function kategori_data(){
        $where = array(
            'b.link' => $_GET['kategori']
        );
        if(!empty($_GET['limit'])){
            $limit = $_GET['limit'];
        } else {
            $limit = '6';
        }
        
        $query = $this->crud_function_model->selectJoinFiveTableLimit("LOWER(REPLACE(a.title, ' ', '-')) AS linked, replace(DATE_FORMAT(a.tgl, '%d %M, %Y'), ',', ' ') AS tgl, RIGHT(a.tgl, 8) AS jam, a.uniq_berita, a.title AS judul_berita, a.gambar, b.title AS nama_kategori, c.nama_fokus_berita, d.nama_user AS nama_editor, e.nama_user AS nama_kontributor, a.`content`", 'berita a', 'kategori b', 'a.kategori_id = b.uniq_kategori', '', 'fokus_berita c', 'a.fokus_berita_id = c.uniq_fokus_berita', '',  'user d', 'a.editor = d.uniq_user', '', 'user e', 'a.`kontributor` = e.uniq_user', '', $where, 'a.id_berita asc', $limit);
        foreach($query as $item){
            $terbaru[] = $item;
        }
        $response = array(
            'count' => count($query),
            'data' => $terbaru
        );
        echo json_encode($response);
    }
}