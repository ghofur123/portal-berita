<button type='button' class='btn-new-data btn btn-primary'>New</button>
<div class='col-md-12 form-input-class-all'>
    <div class='panel panel-primary'>
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
                    <div class='form-group col-md-3'>
                        <label>Status publikasi</label>
                        <select name="status_publikasi" class="form-control">
                            <option value="">Pilih Status</option>
                            <option value="aktif">aktif</option>
                            <option value="pending">pending</option>
                            <option value="non aktif">non aktif</option>
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

<div class='class-berita-view-edit-data'></div>
<div class='row data-table-rows-all'>
    <div class='col-md-12'>
        <div class='panel panel-default'>
            <div class='panel-heading form-inline'>
                <div class="input-group">
                    <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">
                    <div class="input-group-addon" style='cursor:pointer;'>Cari...</div>
                </div>
            </div>
            <div class='panel-body'>
                <div class='table-responsive'>
                    <table class='table table-hover table-data-class'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Kontributor</th>
                                <th>Editor</th>
                                <th>Tgl</th>
                                <th>Title</th>
                                <th>Kategori</th>
                                <th>Status</th>
                                <th>act</th>
                            </tr>
                        </thead>
                        <tbody class='class-berita-view-data'>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="../assets/js/news/pages/berita.js"></script>