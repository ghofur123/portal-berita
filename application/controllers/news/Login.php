<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->database();
		$this->load->model("crud_function_model");
		$this->load->library('session', 'url');
	}
	public function index(){
		$this->load->view("news/login");
	}
    public function validation(){
        $response = array();
        $where = array(
			"username" => $this->input->post("username"),
			"password" => sha1($this->input->post("password"))
		);
		$this->form_validation->set_rules("username", "username", "required");
		$this->form_validation->set_rules("password", "password", "required");
		if($this->form_validation->run() == true){
            $queryLogin = $this->crud_function_model->login("user", $where);
			if ($queryLogin > 0) {
                $queryAmbilData = $this->crud_function_model->selectJoinTwoTable("*", "user a", "status_user b", "a.level = b.uniq_status_user", "", $where, "");
				foreach($queryAmbilData as $item){
					$arraySession = array( 
						"uniq_user" => $item["uniq_user"],
						"nama_user" => $item["nama_user"],
                      	"nama_status"	=> $item["nama_status"]
						);
					$this->session->set_userdata($arraySession);
				}
                $message =  array(
                    "status" => 1,
                    "message" => "berhasil"
                );
                array_push($response, $message);
            } else {
                $message =  array(
                    "status" => 2,
                    "message" => "Username Atau Password salah"
                );
                array_push($response, $message);
            }
        }else {
            $message =  array(
                "status" => 2,
				"message" => validation_errors()
			);
            array_push($response, $message);
        }
        echo json_encode($response);
    }
    public function logout(){
        $this->session->sess_destroy();
        // redirect('./login');
        echo "<script>window.location = './login';</script>";
    }
    public function login(){
        echo "<script>window.location = '../login';</script>";
    }
  	public function aaaaa(){
      $where = array(
			"a.username" => 23423,
			"a.password" => 234234
		);
      $queryAmbilData = $this->crud_function_model->selectJoinTwoTable("*", "user a", "status_user b", "a.level = b.uniq_status_user", "", $where, "");
				foreach($queryAmbilData as $item){
					/*$arraySession = array( 
						"uniq_user" => $item["uniq_user"],
						"nama_user" => $item["nama_user"],
                      	"nama_status"	=> $item["nama_status"]
						); */
					echo $item["nama_status"];
				}
    }
}