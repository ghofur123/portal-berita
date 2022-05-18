<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Details extends CI_Controller
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
            'title_url' =>  str_replace("-", " ",$this->uri->segment(3)).'suara indonesia'
        );
        $urlsegmendata = array(
            'url_segment' => $urlpages
        );
        $this->load->view('news/pages_user_2/header', $data);
        $this->load->view('news/pages_user_2/nav', $data);
        $this->load->view('news/pages_user_2/details', $data);
        $this->load->view('news/pages_user_2/footer2', $urlsegmendata);
        $this->load->view('news/pages_user_2/custem/custemjsdetail', $urlsegmendata);
    }
    public function content_data(){
        $where = array(
            'a.`uniq_berita`' => $_GET['uniq_berita']
        );
        $query = $this->crud_function_model->selectJoinFiveTableLimit("LOWER(REPLACE(a.title, ' ', '-')) AS linked, replace(DATE_FORMAT(a.tgl, '%d %M, %Y'), ',', ' ') AS tgl, RIGHT(a.tgl, 8) AS jam, a.uniq_berita, a.title AS judul_berita, a.gambar, b.title AS nama_kategori, c.nama_fokus_berita, d.nama_user AS nama_editor, e.nama_user AS nama_kontributor, a.`content`, a.tags_id,a.deskripsi,a.fokus_berita_id", 'berita a', 'kategori b', 'a.kategori_id = b.uniq_kategori', '', 'fokus_berita c', 'a.fokus_berita_id = c.uniq_fokus_berita', '',  'user d', 'a.editor = d.uniq_user', '', 'user e', 'a.`kontributor` = e.uniq_user', '', $where, 'a.id_berita asc', '6');
        foreach($query as $item){
            $content[] = $item;
            $queryTerkait = $this->crud_function_model->readData("berita a", "a.title, LOWER(REPLACE(a.title, ' ', '-')) AS linked, a.uniq_berita", "a.fokus_berita_id = ".$item['fokus_berita_id']." AND a.uniq_berita != '".$item['uniq_berita']."'", "", "10");
            foreach($queryTerkait as $teritem){
                $berita_terkait[] = $teritem;
            }
        }
        $queryNew = $this->crud_function_model->selectJoinFiveTableLimit("LOWER(REPLACE(a.title, ' ', '-')) AS linked, replace(DATE_FORMAT(a.tgl, '%d %M, %Y'), ',', ' ') AS tgl, RIGHT(a.tgl, 8) AS jam, a.uniq_berita, a.title AS judul_berita, a.gambar, b.title AS nama_kategori, c.nama_fokus_berita, d.nama_user AS nama_editor, e.nama_user AS nama_kontributor, a.`content`, a.tags_id", 'berita a', 'kategori b', 'a.kategori_id = b.uniq_kategori', '', 'fokus_berita c', 'a.fokus_berita_id = c.uniq_fokus_berita', '',  'user d', 'a.editor = d.uniq_user', '', 'user e', 'a.`kontributor` = e.uniq_user', '', '', 'a.id_berita desc', '10');
        foreach($queryNew as $item_new){
            $new_berita[] = $item_new;
        }
        if(empty($berita_terkait)){
            $terkaitData = "";
        } else {
            $terkaitData = $berita_terkait;
        }
        $response = array(
            'data' => $content,
            'terkait' => $terkaitData,
            'berita_terbaru' => $new_berita
        );
        echo json_encode($response);
    }
}