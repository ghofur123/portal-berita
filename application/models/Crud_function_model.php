<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Crud_function_model extends CI_Model {
	// function memasukan data oop
	public function insertData($table,  $fieldInTable){
		$query = $this->db->insert($table, $fieldInTable);
	}
	public function insertDataMulti($table,  $fieldInTable){
		$jumlah = count($fieldInTable);
	
		if ($jumlah > 0)
		{
			$this->db->insertData2($table, $fieldInTable);
		}
	}
	public function insertData2($table,  $fieldInTable){
		$query = $this->db->insert($table, $fieldInTable);
		return $query;
	}
	public function readData($nameTable, $select, $where, $orderBy, $limit){
		// untuk menselect
		$query = $this->db->select($select);
		if(empty($where)){
		} else {
		//untuk where
			$query = $this->db->where($where);
		}
		if(empty($orderBy)){
		} else {
		// order by
			$query = $this->db->order_by($orderBy);
		}
		if(empty($limit)){

		}else{
			$query = $this->db->limit($limit);
		}
		// milih table
		// sama dengan select * from nameTable
		// dan harus di paling bawah
		$query = $this->db->get($nameTable);
		
		return $query->result_array();
	}
	// fix
	public function selectJoinTwoTable($select, $table1, $table2, $on2, $left2, $where, $orderBy){
		$this->db->select($select);
		$this->db->from($table1);
		$this->db->join($table2, $on2, $left2);
		if(empty($where)){
		} else {
			$this->db->where($where);
		}
    	$this->db->order_by($orderBy);
		$query = $this->db->get();
		return $query->result_array();
	}
	public function selectJoinTwoTableGroup($select, $table1, $table2, $on2, $left2, $where, $groupBy, $orderBy){
		$this->db->select($select);
		$this->db->from($table1);
		$this->db->join($table2, $on2, $left2);
		if(empty($where)){
		} else {
			$this->db->where($where);
		}
		$this->db->group_by($groupBy);
    	$this->db->order_by($orderBy);
		$query = $this->db->get();
		return $query->result_array();
	}
	// fix
	public function selectJointhreeTable($select, $table1, $table2, $on2, $left2, $table3, $on3, $left3, $where, $orderBy){
		$this->db->select($select);
		$this->db->from($table1);
		$this->db->join($table2, $on2, $left2);
		$this->db->join($table3, $on3, $left3);
		if(empty($where)){
		} else {
			$this->db->where($where);
		}
    	$this->db->order_by($orderBy);   
		$query = $this->db->get();
		return $query->result_array();
	}
	public function selectJointhreeTablelimit($select, $table1, $table2, $on2, $left2, $table3, $on3, $left3, $where, $orderBy, $limit){
		$this->db->select($select);
		$this->db->from($table1);
		$this->db->join($table2, $on2, $left2);
		$this->db->join($table3, $on3, $left3);
		if(empty($where)){
		} else {
			$this->db->where($where);
		}
    	$this->db->order_by($orderBy);   
		$this->db->limit($limit);
		$query = $this->db->get();
		return $query->result_array();
	}
	public function selectJoinFourTable($select, $table1, $table2, $on2, $left2, $table3, $on3, $left3,  $table4, $on4, $left4, $where, $orderBy){
		$this->db->select($select);
		$this->db->from($table1);
		$this->db->join($table2, $on2, $left2);
		$this->db->join($table3, $on3, $left3);
		$this->db->join($table4, $on4, $left4);
		if(empty($where)){
		} else {
			$this->db->where($where);
		}
    	$this->db->order_by($orderBy);   
		$query = $this->db->get();
		return $query->result_array();
	}
	public function selectJoinFiveTable($select, $table1, $table2, $on2, $left2, $table3, $on3, $left3,  $table4, $on4, $left4, $table5, $on5, $left5, $where, $orderBy){
		$this->db->select($select);
		$this->db->from($table1);
		$this->db->join($table2, $on2, $left2);
		$this->db->join($table3, $on3, $left3);
		$this->db->join($table4, $on4, $left4);
		$this->db->join($table5, $on5, $left5);
		if(empty($where)){
		} else {
			$this->db->where($where);
		}
    	$this->db->order_by($orderBy);   
		$query = $this->db->get();
		return $query->result_array();
	}
	public function selectJoinFiveTableLimit($select, $table1, $table2, $on2, $left2, $table3, $on3, $left3,  $table4, $on4, $left4, $table5, $on5, $left5, $where, $orderBy, $limit){
		$this->db->select($select);
		$this->db->from($table1);
		$this->db->join($table2, $on2, $left2);
		$this->db->join($table3, $on3, $left3);
		$this->db->join($table4, $on4, $left4);
		$this->db->join($table5, $on5, $left5);
		if(empty($where)){
		} else {
			$this->db->where($where);
		}
    	$this->db->order_by($orderBy);   
    	$this->db->limit($limit);   
		$query = $this->db->get();
		return $query->result_array();
	}
	public function deleteData($nameTable, $where){
		//catatan
		//untuk where harus di atas nameTable
		// where id = id
		$query = $this->db->where($where);
		
		// delete form nameTable
		$query = $this->db->delete($nameTable);
	}
	public function updateData($nameTable, $set, $where){
		$query = $this->db->set($set);
		$query = $this->db->where($where);
		$query = $this->db->update($nameTable);
	}
	public function login($nameTable, $where){
		$query = $this->db->where($where);
		$query = $this->db->get($nameTable);
		return $query->num_rows();
	}

	public function readDataManuallyFunction($q){
		$query = $this->db->query($q);
		return $query->result_array();
	}
}