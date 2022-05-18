<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Pages extends CI_Controller
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
        if($this->uri->segment(1) == 'beranda' || $this->uri->segment(1) == 'berita' || $this->uri->segment(1) == 'page'){
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
        $this->load->view('news/pages_user_2/pages', $data);
        $this->load->view('news/pages_user_2/footer2', $urlsegmendata);
        $this->load->view('news/pages_user_2/custem/custempages', $urlsegmendata);
    }
    public function pages_data(){
        $where = array(
            'a.link_pages' => $_GET['link']
        );
        $pagesQuery = $this->crud_function_model->readData('pages a', 'a.judul, a.deskripsi', $where, '', '');
        foreach ($pagesQuery as $item) {
            $pages[] = $item;
        }
        $response = array(
            'data' => $pages
        );
        echo json_encode($response);
    }
}