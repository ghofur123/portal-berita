$(document).ready(function() {
    $('.uniq_berita').val(new Date().getTime());
    beritaLoadDataAll();

});
CKEDITOR.replace('deskripsi');
CKEDITOR.replace( 'deskripsi_edit' );
$('.btn-new-data').click(function(){
    CKEDITOR.instances['deskripsi'].setData('');
    $('input:text').val('');
    $('.data-table-rows-all').hide();
    $('.uniq_berita').val(new Date().getTime());
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    $('.class-form-input-card1').show();
    $('.class-form-input-card2').hide();
    setTimeout(function(){
        selectFormInput('kategori_api/load?act=load', 'kategori_id', 'uniq_kategori', 'title', '.kategori-class-view');
        selectFormInput('user_api/load?act=load_user_status&where_parameter=editor', 'editor', 'uniq_user', 'nama_user', '.editor-class-view');
        selectFormInput('user_api/load?act=load_user_status&where_parameter=kontributor', 'kontributor', 'uniq_user', 'nama_user', '.kontributor-class-view');
        selectFormInput('fokus_berita_api/load?act=load', 'fokus_berita_id', 'uniq_fokus_berita', 'nama_fokus_berita', '.fokus-berita-class-view');

    }, 1000);
});
$(document).on('click', '.btn-close-class', function(){
    $('.btn-new-data').show();
    $('.form-input-class-all').hide();
    $('.data-table-rows-all').show();
    $('.class-form-input-card1').hide();
    $('.class-form-input-card2').hide();
    btnact();
});
function beritaLoadDataAll() {
    let beritaDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'berita_api/load?act=load',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            let numberRows = 1;
            for (var i = 0; i < data.length; i++) {
                beritaDataResult += "<tr>"+
                "<td>"+ numberRows++ +"</td>"+
                "<td>"+ data[i]['kontributor_nm'] +"</td>"+
                "<td>"+ data[i]['editor_nm'] +"</td>"+
                "<td>"+ data[i]['tgl'] +"</td>"+
                "<td>"+ data[i]['title'] +"</td>"+
                "<td>"+ data[i]['title_kategori'] +"</td>"+
                "<td>"+ data[i]['status_publikasi'] +"</td>"+
                "<td><button type='button' data='" + data[i]['uniq_berita'] + "' class='btn-berita-form-edit btn btn-primary'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>"+
                "<button type='button' data='" + data[i]['uniq_berita'] + "' class='btn-berita-form-delete btn btn-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td>";
            }

            $('.class-berita-view-data').html(beritaDataResult);
            btnact();
        }
    }).done(function() {
        $('.progress').hide();
    });
}
$('.form-berita-1649650076706').submit(function() {
    var formData = new FormData();

    let uniq_beritaText = $('input[name=uniq_berita]').val();
    formData.append('uniq_berita', uniq_beritaText);

    let titleText = $('input[name=title]').val();
    formData.append('title', titleText);

    let kategori_idText = $('select[name=kategori_id]').val();
    formData.append('kategori_id', kategori_idText);

    let editorText = $('select[name=editor]').val();
    formData.append('editor', editorText);

    let kontributorText = $('select[name=kontributor]').val();
    formData.append('kontributor', kontributorText);

    let status_publikasiText = $('select[name=status_publikasi]').val();
    formData.append('status_publikasi', status_publikasiText);

    let fokus_beritaText = $('select[name=fokus_berita_id]').val();
    formData.append('fokus_berita_id', fokus_beritaText);

    let tags_idText = $('input[name=tags_id]').val();
    formData.append('tags_id', tags_idText);

    let gambarFile = $('input[name=gambar]');
    let gambarFileToUpload = gambarFile[0].files[0];
    formData.append('gambar', gambarFileToUpload);

    let deskripsiText = CKEDITOR.instances.deskripsi.getData();
    formData.append('deskripsi', deskripsiText);

    let komentar_reaksiText = $('input[name=komentar_reaksi]').val();
    formData.append('komentar_reaksi', komentar_reaksiText);
    $.ajax({
        type: 'POST',
        url: 'berita_api/load?act=insert',
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        dataType: 'json',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if(Boolean(data[0]['status'])){
                if(data[0]['status'] == 2){
                    $('.alert-information').show();
                    $('.message-pages').html(data[0]['message']);
                    setTimeout(function(){$('.alert-information').hide();},2000);
                } 
            }else {
                $('.btn-new-data').show();
                $('.form-input-class-all').hide();
                $('.data-table-rows-all').show();
                $('.class-form-input-card1').hide();
                $('.class-form-input-card2').hide();
                btnact();
                setTimeout(function () {beritaLoadDataAll();},1000);
            }
        }
    }).done(function() {
        $('.progress').hide();
    });
    return false;
});
$(document).on('keyup', '.tags_id', function(){
});
$(document).on('click', '.btn-berita-form-edit', function() {
    $('.data-table-rows-all').hide();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    $('.class-form-input-card1').hide();
    $('.class-form-input-card2').show();

    let dataId = $(this).attr('data');
    let beritaEditDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'berita_api/load?act=load&where_parameter=1&uniq_berita=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            setTimeout(function(){
                $('.uniq_berita_edit').val(data[0]['uniq_berita']);
                $('.user_id_edit').val(data[0]['user_id']);
                $('.title').val(data[0]['title']);
                fisledglo('kategori_api/load?act=load', 'kategori_id_edit', 'uniq_kategori', 'title', '.kategori-class-view-edit', data[0]['kategori_id']);
                fisledglo('user_api/load?act=load_user_status&where_parameter=editor', 'editor_edit', 'uniq_user', 'nama_user', '.editor-class-view-edit', data[0]['editor']);
                fisledglo('user_api/load?act=load_user_status&where_parameter=kontributor', 'kontributor_edit', 'uniq_user', 'nama_user', '.kontributor-class-view-edit', data[0]['kontributor']);
                let status_publis = "";
                status_publis += "<select name='status_publikasi_edit' class='form-control'>"+
                    "<option value=''>Pilih Status</option>";
                if(data[0]['status_publikasi'] == 'aktif'){
                    status_publis += "<option selected value='aktif'>aktif</option>";
                    status_publis += "<option value='pending'>pending</option>";
                    status_publis += "<option value='non aktif'>non aktif</option>";
                } else if(data[0]['status_publikasi'] == 'pending'){
                    status_publis += "<option value='aktif'>aktif</option>";
                    status_publis += "<option selected value='pending'>pending</option>";
                    status_publis += "<option value='non aktif'>non aktif</option>";
                } else if(data[0]['status_publikasi'] == 'non aktif'){
                    status_publis += "<option value='aktif'>aktif</option>";
                    status_publis += "<option value='pending'>pending</option>";
                    status_publis += "<option selected value='non aktif'>non aktif</option>";
                } else {
                    status_publis += "<option value='aktif'>aktif</option>";
                    status_publis += "<option value='pending'>pending</option>";
                    status_publis += "<option value='non aktif'>non aktif</option>";
                }
                $('.status-publikasi-class').html(status_publis);
                fisledglo('fokus_berita_api/load?act=load', 'fokus_berita_id_edit', 'uniq_fokus_berita', 'nama_fokus_berita', '.fokus-berita-class-view-edit', data[0]['fokus_berita_id']);
                $('.tags_id_edit').val(data[0]['tags_id']);
                $('.class-images-view').html("<img src='../uploads/up/"+ data[0]['gambar'] +"' width='150px' height='150px'/>");
                CKEDITOR.instances.deskripsi_edit.setData(data[0]['deskripsi']);
            }, 1000);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('click', '.btn-berita-form-delete', function() {
    let dataId = $(this).attr('data');
    let beritaDeleteDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'berita_api/load?act=delete&uniq_berita=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                beritaLoadDataAll();
            } else if (data[0]['status'] == 2) {
            }
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('submit', '.form-edit-berita-1649650076706', function() {
    var formData = new FormData();

    let uniq_beritaText = $('input[name=uniq_berita_edit]').val();
    formData.append('uniq_berita', uniq_beritaText);

    let user_idText = $('input[name=user_id_edit]').val();
    formData.append('user_id', user_idText);

    let tglText = $('input[name=tgl_edit]').val();
    formData.append('tgl', tglText);

    let titleText = $('input[name=title_edit]').val();
    formData.append('title', titleText);

    let kategori_idText = $('select[name=kategori_id_edit]').val();
    formData.append('kategori_id', kategori_idText);

    let editorText = $('select[name=editor_edit]').val();
    formData.append('editor', editorText);

    let kontributorext = $('select[name=kontributor_edit]').val();
    formData.append('kontributor', kontributorext);

    let status_publikasiText = $('select[name=status_publikasi_edit]').val();
    formData.append('status_publikasi', status_publikasiText);

    let fokus_beritaText = $('select[name=fokus_berita_id_edit]').val();
    formData.append('fokus_berita_id', fokus_beritaText);

    let tags_idText = $('input[name=tags_id_edit]').val();
    formData.append('tags_id', tags_idText);

    let gambarFile = $('input[name=gambar_edit]');
    let gambarFileToUpload = gambarFile[0].files[0];
    formData.append('gambar', gambarFileToUpload);

    // let deskripsiText = $('input[name=deskripsi_edit]').val();
    let deskripsiText = CKEDITOR.instances.deskripsi_edit.getData();
    formData.append('deskripsi_edit', deskripsiText);

    let komentar_reaksiText = $('input[name=komentar_reaksi_edit]').val();
    formData.append('komentar_reaksi', komentar_reaksiText);

    $.ajax({
        type: 'POST',
        url: 'berita_api/load?act=update',
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        dataType: 'json',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if(Boolean(data[0]['status'])){
                if(data[0]['status'] == 2){
                    $('.alert-information').show();
                    $('.message-pages').html(data[0]['message']);
                    setTimeout(function(){$('.alert-information').hide();},2000);
                } 
            }else {
                $('.btn-new-data').show();
                $('.form-input-class-all').hide();
                $('.data-table-rows-all').show();
                $('.class-form-input-card1').hide();
                $('.class-form-input-card2').hide();
                btnact();
                setTimeout(function () {beritaLoadDataAll();},1000);
            }
        }
    }).done(function() {
        $('.progress').hide();
    });
    return false;
});

// function global
function selectFormInput(link, nameForm, valueName, viewName, divValueDataGlo){
    let dataValueGlobalFunction = '';
    $.ajax({
        type: 'POST',
        url: link,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {},
        success: function(data) {
            dataValueGlobalFunction += "<select name='"+ nameForm +"' id='id-"+ nameForm +"-select' class='class-"+ nameForm +"-select form-control'>";
            dataValueGlobalFunction += "<option value='#'>-Pilih "+ nameForm +"-</option>";
            for (var i = 0; i < data.length; i++) {
                dataValueGlobalFunction += "<option value='"+ data[i][valueName] +"'>"+ data[i][viewName] +"</option>";
            }
            dataValueGlobalFunction += "</select>";
            $(divValueDataGlo).html(dataValueGlobalFunction);
        }
    }).done(function() {});
}
function fisledglo(link, nameForm, valueName, viewName, divValueDataGlo, selectedDataGlo){
    let dataValueGlobalFunction = '';
    $.ajax({
        type: 'POST',
        url: link,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {},
        success: function(data) {
            dataValueGlobalFunction += "<select name='"+ nameForm +"' id='id-"+ nameForm +"-select' class='class-"+ nameForm +"-select form-control'>";
            dataValueGlobalFunction += "<option value='#'>-Pilih "+ nameForm +"-</option>";
            for (var i = 0; i < data.length; i++) {
                console.log(data[i][valueName] +"-----"+selectedDataGlo);
                if(data[i][valueName] == selectedDataGlo){
                    dataValueGlobalFunction += "<option selected value='"+ data[i][valueName] +"'>"+ data[i][viewName] +"</option>";
                } else {
                    dataValueGlobalFunction += "<option value='"+ data[i][valueName] +"'>"+ data[i][viewName] +"</option>";
                }
            }
            dataValueGlobalFunction += "</select>";
            $(divValueDataGlo).html(dataValueGlobalFunction);
        }
    }).done(function() {});
}