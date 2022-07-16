<button type='button' class='btn-new-data btn btn-primary'>New</button>
<div class='col-md-12 form-input-class-all' style='width:100%; margin:0; padding:0;'>
    <div class='panel panel-primary' style='margin:0; padding:0;'>
        <div class='panel-heading'>
            Menu
        </div>
        <div class='panel-body'>
        
        <div class="class-form-input-card1">
            <form action='#' class='form-pages-1649454613157'>
                <input type='text' name='uniq_pages' class='uniq_pages_ins' hidden/>
                <div class='form-group col-md-12'>
                    <label>judul</label>
                    <input type='text' name='judul' class='judul form-control' placeholder='judul' /> 
                </div>
                <div class='form-group col-md-6'>
                    <label>Link Page</label>
                    <input type='text' name='link_pages' class='link_pages form-control' placeholder='link_pages' />
                </div>
                <div class='form-group col-md-6'>
                    <label>Status</label>
                    <select name='status' class='status form-control'>
                        <option value=''>Pilih Status</option>
                        <option value='aktif'>aktif</option>
                        <option value='tidak aktif'>tidak aktif</option>
                    </select>
                </div>
                <div class='form-group'>
                    <label>Deskripsi</label>
                    <textarea name='deskripsi' class='ckedtpage1'></textarea>
                </div>
                <button type='submit' class='btn-menu-insert-class btn btn-primary'>Save</button>
                <button type='button' class='btn-close-class btn btn-danger'>Close</button>
            </form>
        </div>
        <div class="class-form-input-card2">
            <form action='#' class='form-edit-pages-1649454613157'>
                <input type='text' name='uniq_pages' class='uniq_pages_edit' hidden />
                <div class='form-group'>
                    <label>Judul</label>
                    <input type='text' name='judul' class='judul_edit form-control' placeholder='judul' />
                </div>
                <div class='form-group col-md-6'>
                    <label>Link Page</label>
                    <input type='text' name='link_pages' class='link_pages_edit form-control' />
                </div>
                <div class='form-group col-md-6'>
                    <label>Status</label>
                    <select name='status' class='status form-control status-value-edit'>
                    </select>
                </div>
                <div class='form-group'>
                    <label>Deskripsi</label>
                    <textarea name='deskripsi_edit' class='ckedtpage2 deskripsi_edit form-control ' ></textarea>
                </div>
                <button type='submit' class='btn-pages-edit-class btn btn-primary'>Simpan</button>
                <button type='button' class='btn-close-class btn btn-danger'>Close</button>
            </form>
        </div>
        </div>
        <div class='panel-footer'>
        </div>
    </div>
</div>
<div class='class-pages-view-data'></div>
<script src="../assets/js/news/pages/pages.js"></script>
<!-- <textarea name='deskripsi' id='myTextarea'></textarea> -->