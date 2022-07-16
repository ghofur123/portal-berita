<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Logo_api extends CI_Controller
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
        $this->load->view('news/admin/logo');
    }
    public function load_data(){
        $queryDataRead = $this->crud_function_model->readData('logo', '*',  '', '', '');
        foreach($queryDataRead as $item){
            $data[] = $item;
        }
        if(!empty($data)){
            $response = array(
                'status' => 'true',
                'count' => count($queryDataRead),
                'data' => $data
            );
        } else {
            $response = array(
                'status' => 'false'
            );
        }
        echo json_encode($response);
    }
    public function load_data_edit($uniq_logo){
        $where = array(
                'uniq_logo' => $uniq_logo
            );
        $queryDataRead = $this->crud_function_model->readData('logo', '*',  $where, '', '');
        foreach($queryDataRead as $item){
            $data[] = $item;
        }
        if(!empty($data)){
            $response = array(
                'status' => 'true',
                'count' => count($queryDataRead),
                'data' => $data
            );
        } else {
            $response = array(
                'status' => 'false'
            );
        }
        echo json_encode($response);
    }
    public function insert(){
        if($_GET['act'] == 'insert'){
            $response = array();
            $this->form_validation->set_rules('title', 'title', 'required');
            if ($this->form_validation->run() == true) {
                $config_upload = array(
                    'file_name' => 'logo.jpg',
                    'upload_path' => './uploads/logo/',
                    'allowed_types' => 'gif|jpg|png|jpeg|gif'
                );
                $this->load->library('upload', $config_upload);
                if ($this->upload->do_upload('gambar')) {
                    $param = array(
                        'uniq_logo' => $this->input->post('uniq_logo'),
                        'title' => $this->input->post('title'),
                        'status' => $this->input->post('status'),
                        'gambar' => $this->upload->data('file_name'),
                    );
                    $this->crud_function_model->insertData('logo', $param);
                    $message = array(
                        'status' => 'false',
                        'proses' => 'success',
                        'message' => 'success'
                    );
                    array_push($response, $message);
                } else {
                    $message = array(
                        'status' => 'false',
                        'proses' => 'uploaded',
                        'message' => $this->upload->display_errors()
                    );
                    array_push($response, $message);
                }
            } else {
                $message = array(
                    'status' => 'false',
                    'proses' => 'validation',
                    'message' => validation_errors()
                );
                array_push($response, $message);
            }
            echo json_encode($response);
        }
        
    }
    public function update(){
        $response = array();
        $this->form_validation->set_rules('title', 'title', 'required');
        if ($this->form_validation->run() == true) {
            $config_upload = array(
                'file_name' => 'logo-.jpg',
                'upload_path' => './uploads/logo/',
                'allowed_types' => 'gif|jpg|png|jpeg|gif'
            );
            $this->load->library('upload', $config_upload);
            if ($this->upload->do_upload('gambar')) {
                
                $set = array(
                    'title' => $this->input->post('title'),
                    'status' => $this->input->post('status'),
                    'gambar' => $this->upload->data('file_name')
                );
                $whereData = array(
                    'uniq_logo' => $this->input->post('uniq_logo')
                );
                $this->crud_function_model->updateData('logo', $set, $whereData);

                $message = array(
                    'status' => 'true',
                    'proses' => 'success',
                    'message' => 'success'
                );
                array_push($response, $message);
                unlink('./uploads/logo/'.$this->input->post('gambar_hidden'));
            } else {
                $message = array(
                    'status' => 'false',
                    'proses' => 'uploaded',
                    'message' => $this->upload->display_errors()
                );
                array_push($response, $message);
            }
        } else {
            $message = array(
                'status' => 'false',
                'proses' => 'validation',
                'message' => validation_errors()
            );
            array_push($response, $message);
        }
        echo json_encode($response);
    }
    public function delete($deleteData){
        $response      = array();

        $whereParam    = array(
            'uniq_logo' => $deleteData
        );

        $queryDataRead = $this->crud_function_model->readData('logo', '', $whereParam, '','');
        foreach ($queryDataRead as $item) {
            unlink('./uploads/logo/' . $item['gambar']);
        }

        $this->crud_function_model->deleteData('logo', $whereParam);
        $message = array(
            'status' => '1',
            'message' => 'delete berhasil'
        );
        array_push($response, $message);
        echo json_encode($response);
    }
}