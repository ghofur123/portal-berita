<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Performa_user_api extends CI_Controller
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
        $this->load->view('news/admin/performa_user');
    }
    public function status_user(){
        $queryDataRead = $this->crud_function_model->readData('status_user', '', '', 'nama_status asc', '');
        foreach($queryDataRead as $item){
            $status_users[] = $item;
        }
        $response = array(
            'status_users' => $status_users
        );
        echo json_encode($response);
    }
    public function select_user($data){
        $where = array(
            'level' => $data
        );
        $queryDataRead = $this->crud_function_model->readData('user', '', $where, 'nama_user asc', '');
        foreach($queryDataRead as $item){
            $users[] = $item;
        }
        $response = array(
            'users' => $users
        );
        echo json_encode($response);
    }
    public function actifitas_berita($data){
        // aktifitas upload berita
        $where = array(
            'a.user_id' => $data
        );
        $where2 = array(
            'a.kontributor' => $data
        );
        $where3 = array(
            'a.editor' => $data
        );
        $queryData = array(
            'upload' => $this->crud_function_model->readData('berita a', 'COUNT(*) AS upload', $where, '', ''),
            'kontributor' => $this->crud_function_model->readData('berita a', 'COUNT(*) AS kontributor', $where2, '', ''),
            'editor' => $this->crud_function_model->readData('berita a', 'COUNT(*) AS editor', $where3, '', '')
        );
        foreach($queryData['upload'] as $item1);
        foreach($queryData['kontributor'] as $item2);
        foreach($queryData['editor'] as $item3);

        // view users
        $where4 = array(
            'a.user_id' => $data
        );
        $aktifitasViewUsers = $this->crud_function_model->selectJointhreeTablelimit('a.uniq_berita, a.title, c.jumlah', 'berita a', 'user b', 'a.user_id = b.uniq_user', '', 'pengunjung c', 'a.uniq_berita = c.berita_id', '', $where4, 'c.jumlah DESC', '10');
        foreach($aktifitasViewUsers as $itmAU){
            $actifitasUsersView[] = $itmAU;
        }
        if(empty($actifitasUsersView)){
            $dtVwUs = "0";
            $statusView = 'False';
        } else {
            $dtVwUs = $actifitasUsersView;
            $statusView = 'True';
        }
        $response = array(
            'data' => array(
                'aktitas_uploads' => $item1['upload'],
                'kontributor' => $item2['kontributor'],
                'editor' => $item3['editor'],
                'status_view' => $statusView,
                'actifitas_view' => $dtVwUs
            )
            
        );
        echo json_encode($response);
    }
}