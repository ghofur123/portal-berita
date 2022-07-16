<div class='col-md-12 form-input-class-all' style='width:100%; margin:0; padding:0;'>
    <div class='panel panel-primary col-md-12' style='margin:0; padding:0;'>
        <div class='panel-heading'>
            Berita
        </div>
        <div class='panel-body'>
            <div class="alert alert-danger alert-dismissable alert-information">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                <div class="message-pages"></div>
            </div>
            <div class="class-form-input-card1">
                <form action='#' method='post' class='form-berita-1649650076706' enctype='multipart/form-data'>
                    <input type='text' name='uniq_berita' class='uniq_berita' placeholder='berita' hidden />
                    <div class='form-group'>
                        <label>Title</label>
                        <input type='text' name='title' class='form-control title' placeholder='title' />
                    </div>
                    <div class='form-group col-md-3'>
                        <label>Kategori</label>
                        <div class="kategori-class-view">Tunggu....</div>
                    </div>
                    <div class='form-group col-md-3'>
                        <label>Editor</label>
                        <div class="editor-class-view"></div>
                    </div>
                    <div class='form-group col-md-3'>
                        <label>Kontributor</label>
                        <div class="kontributor-class-view"></div>
                    </div>
                  <?php 
                  if($_SESSION["nama_status"] == "Administrator"){
                    $readOnlyBy = "";
                    $status = "";
                    $aktif = "";
                    $pending = "";
                    $non_aktif = "";
                  } else if($_SESSION["nama_status"] == "Admin"){
                    $readOnlyBy = "readonly";
                    $status = "";
                    $aktif = "";
                    $pending = "";
                    $non_aktif = "";
                  } else if($_SESSION["nama_status"] == "Editor"){
                    $readOnlyBy = "readonly";
                    $status = "";
                    $aktif = "selected";
                    $pending = "";
                    $non_aktif = "";
                  }	else if($_SESSION["nama_status"] == "Kontributor"){
                    $readOnlyBy = "readonly";
                    $status = "";
                    $aktif = "";
                    $pending = "selected";
                    $non_aktif = "";
                  } else if($_SESSION["nama_status"] == "User"){
                    $readOnlyBy = "hidden";
                    $status = "";
                    $aktif = "";
                    $pending = "selected";
                    $non_aktif = "";
                  } else{
                    $readOnlyBy = "hidden";
                    $status = "";
                    $aktif = "";
                    $pending = "selected";
                    $non_aktif = "";
                  }
                  
                  ?>
                    <div class='form-group col-md-3'>
                        <label>Status publikasi</label>
                        <select  name="status_publikasi" class="form-control" <?php echo $readOnlyBy; ?>>
                            <option value="">Pilih Status</option>
                            <option value="aktif" <?php echo $aktif; ?>>aktif</option>
                            <option value="pending" <?php echo $pending; ?>>pending</option>
                            <option value="non aktif" <?php echo $non_aktif; ?>>non aktif</option>
                        </select>
                    </div>
                    <div class='form-group col-md-3'>
                        <label>Fokus Berita</label>
                        <div class="fokus-berita-class-view"></div>
                    </div>
                    <div class='form-group col-md-6'>
                        <label>Tags</label>
                        <input type='text' name='tags_id' class='tags_id form-control' placeholder='tags_id' />
                    </div>
                    
                    <div class='form-group col-md-3'>
                        <label>Gambar</label>
                        <input type='file' name='gambar' class='gambar form-control' placeholder='gambar' />
                    </div>
                    <div class='form-group col-md-12'>
                        <label>Content</label>
                        <select  name="content" class="form-control">
                            <option value="0">Pilih Content</option>
                            <option value="top">top</option>
                            <option value="slider">slider</option>
                            <option value="side">side</option>
                            <option value="populer">populer</option>
                            <option value="0">none</option>
                        </select>
                    </div>
                    <div class='form-group'>
                        <label>Deskripsi</label>
                        <textarea name='deskripsi' id='deskripsi' class='deskripsi form-control'></textarea>
                    </div>

                    <button type='submit' class='btn-menu-insert-class btn btn-primary'>Save</button>
                    <button type='button' class='btn-close-class btn btn-danger'>Close</button>
                </form>
            </div>


            <div class="class-form-input-card2">
                <div class="alert alert-danger alert-dismissable alert-information">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <div class="message-pages"></div>
                </div>
                <form action='#' class='form-edit-berita-1649650076706' enctype='multipart/form-data'> 
                    <input type='text' name='uniq_berita_edit' class='uniq_berita_edit' placeholder='berita' hidden/>
                    <input type='text' name='user_id_edit' class='user_id_edit' hidden />
                    <div class='form-group'>
                        <label>Title</label>
                        <input type='text' name='title_edit' class='form-control title' placeholder='title' />
                    </div>
                    <div class='form-group col-md-3'>
                        <label>Kategori</label>
                        <div class="kategori-class-view-edit">Tunggu....</div>
                    </div>
                    <div class='form-group col-md-3'>
                        <label>Editor</label>
                        <div class="editor-class-view-edit">Tunggu....</div>
                    </div>
                    <div class='form-group col-md-3'>
                        <label>Kontributor</label>
                        <div class="kontributor-class-view-edit">Tunggu....</div>
                    </div>

                    <div class='form-group col-md-3'>
                        <label>Status publikasi</label>
                        <div class="status-publikasi-class"></div>
                    </div>
                    <div class='form-group col-md-3'>
                        <label>Fokus Berita</label>
                        <div class="fokus-berita-class-view-edit"></div>
                    </div>
                    <div class='form-group col-md-6'>
                        <label>Tags</label>
                        <input type='text' name='tags_id_edit' class='tags_id_edit form-control' placeholder='tags_id' />
                    </div>
                    <div class='form-group col-md-3'>
                        <label>Gambar</label>
                        <input type='file' name='gambar_edit' class='gambar form-control' placeholder='gambar' />
                    </div>
                    <div class='form-group col-md-12'>
                        <label>Content</label>
                        <select  name="content_edit" class="content_edit form-control">
                        </select>
                    </div>
                    <div class='form-group'>
                        <div class="class-images-view"></div>
                    </div>
                    <div class='form-group col-md-12'>
                        <label>Deskripsi</label>
                        <textarea name='deskripsi_edit' id='deskripsi_edit' class='deskripsi form-control'></textarea>
                    </div>

                    <button type='submit' class='btn-menu-insert-class btn btn-primary'>Save</button>
                    <button type='button' class='btn-close-class btn btn-danger'>Close</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- <div class='class-berita-view-edit-data'></div> -->


<div class='row data-table-rows-all'>
    <div class='col-md-12'>
        <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li class="btn-new-data"><a href="#">New Data</a></li>
                <li role="separator" class="divider"></li>
                <li class="class-tab-button-btt" data="upload"><a href="#">Upload</a></li>
                <li class="class-tab-button-btt" data="kontributor"><a href="#">Kontributor</a></li>
                <li class="class-tab-button-btt" data="editor"><a href="#">Editor</a></li>
              	<?php if(strtolower($_SESSION["nama_status"]) == "administrator"){ ?>
              		<li class="class-tab-button-btt" data="check_administrator"><a href="#">Check Data Administrator</a></li>
              	<?php } ?>
            </ul>
        </div>
        <div class='panel panel-default'>
            <div class='panel-heading form-inline '>
                <ol class="breadcrumb">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Berita</a></li>
                    <li class="class-breacdm-type active">Data</li>
                </ol>
            </div>
            <div class='panel-body'>
                <div class='table-responsive'>
                    <div class="class-berita-view-data"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="../assets/js/news/pages/berita.js"></script>