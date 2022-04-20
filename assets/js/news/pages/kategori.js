$(document).ready(function() {
    kategoriLoadDataAll();
});
$('.btn-new-data').click(function(){
    $('input:text').val('');
    let dataView = "";
    $('.data-table-rows-all').hide();
    let uniq_menu_insert = new Date().getTime();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    dataView += "<form action='#' class='form-kategori-1649408668024'>"+
        "<input type='text' name='uniq_kategori' class='uniq_kategori' hidden value='"+ uniq_menu_insert +"'/>"+
        "<div class='form-group'>"+
            "<label>title</label>"+
            "<input type='text' name='title' class='title form-control' placeholder='title' />"+
        "</div>"+
        "<div class='form-group'>"+
            "<label>Deskripsi</label>"+
            "<input type='text' name='deskripsi' class='deskripsi form-control' placeholder='deskripsi' />"+
        "</div>"+
        "<div class='form-group'>"+
            "<label>Link</label>"+
            "<input type='text' name='link' class='link form-control' placeholder='link' />"+
        "</div>"+
        "<div class='form-group'>"+
            "<label>Status</label>"+
            "<select name='status' class='status form-control'>"+
                "<option value=''>Pilih Status</option>"+
                "<option value='aktif'>Aktif</option>"+
                "<option value='tidak aktif'>Tidak Aktif</option>"+
            "</select name='status' class='status form-control'>"+
        "</div>"+
        "<button type='submit' class='btn-menu-insert-class btn btn-primary'>Save</button>"+
        "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
    "</form>";
    $(".class-form-input-card").html(dataView);
});
$(document).on('click', '.btn-close-class', function(){
    $('.btn-new-data').show();
    $('.form-input-class-all').hide();
    $('.data-table-rows-all').show();
    btnact();
});
function kategoriLoadDataAll() {
    let kategoriDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'kategori_api/load?act=load',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            kategoriDataResult += "<div class='row data-table-rows-all'>"+
            "<div class='col-md-12'>"+
                "<div class='panel panel-default'>"+
                    "<div class='panel-heading'>"+
                        "Hover Rows"+
                    "</div>"+
                    "<div class='panel-body'>"+
                        "<div class='table-responsive'>"+
                            "<table class='table table-hover'>"+
                                "<thead>"+
                                    "<tr>"+
                                        "<th>#</th>"+
                                        "<th>Title</th>"+
                                        "<th>Deskripsi</th>"+
                                        "<th>Link</th>"+
                                        "<th>Status</th>"+
                                        "<th>act</th>"+
                                    "</tr>"+
                                "</thead>"+
                                "<tbody>";
                            let numberRows = 1;
                            for (var i = 0; i < data.length; i++) {
                                kategoriDataResult += "<tr>"+
                                "<td>"+numberRows+++"</td>"+
                                "<td>"+ data[i]['title'] +"</td>"+
                                "<td>"+ data[i]['deskripsi'] +"</td>"+
                                "<td>"+ data[i]['link'] +"</td>"+
                                "<td>"+ data[i]['status'] +"</td>"+
                                "<td><button type='button' data='" + data[i]['uniq_kategori'] + "' class='btn-kategori-form-edit btn btn-primary btn-edit-global'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>"+
                                "<button type='button' data='" + data[i]['uniq_kategori'] + "' class='btn-kategori-form-delete btn btn-danger btn-delete-global'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>"+
                                "</td>";
                            }
            kategoriDataResult +="</tbody>"+
                                    "</table>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
            $('.class-kategori-view-data').html(kategoriDataResult);
            btnact();
        }
    }).done(function() {
        $('.progress').hide();
    });
}
$(document).on('click', '.btn-kategori-form-edit', function() {
    $('.data-table-rows-all').hide();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    btnact();
    let dataId = $(this).attr('data');
    let kategoriEditDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'kategori_api/load?act=load&where_parameter=1&uniq_kategori=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            kategoriEditDataResult += "<form action='#' class='form-edit-kategori-1649408668024' >"+
                "<input type='text' name='uniq_kategori' class='uniq_kategori' value='" + data[0]['uniq_kategori'] + "' hidden/>"+
                "<div class='form-group'>"+
                    "<label>title</label>"+
                    "<input type='text' name='title' class='title form-control' placeholder='title' value='" + data[0]['title'] + "' />"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label>Deskripsi</label>"+
                    "<input type='text' name='deskripsi' class='deskripsi form-control' placeholder='deskripsi' value='" + data[0]['deskripsi'] + "' />"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label>Link</label>"+
                    "<input type='text' name='link' class='link form-control' placeholder='link' value='" + data[0]['link'] + "' />"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label>Status</label>"+
                    "<select name='status' class='status form-control'>"+
                        "<option value=''>Pilih Status</option>";
                        if(data[0]['status'] == 'aktif'){
                            kategoriEditDataResult += "<option selected value='aktif'>Aktif</option>"+
                            "<option value='tidak aktif'>Tidak Aktif</option>";
                        }else {
                            kategoriEditDataResult += "<option value='aktif'>Aktif</option>"+
                            "<option value='tidak aktif'>Tidak Aktif</option>";
                        }
                        
                        kategoriEditDataResult += "</select name='status' class='status form-control'>"+
                "</div>"+
                "<button type='submit' class='btn-menu-insert-class btn btn-primary'>Save</button>"+
                "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
            "</form>";
            $('.class-form-input-card').html(kategoriEditDataResult);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('click', '.btn-kategori-form-delete', function() {
    let dataId = $(this).attr('data');
    let kategoriDeleteDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'kategori_api/load?act=delete&uniq_kategori=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                kategoriLoadDataAll();
            } else if (data[0]['status'] == 2) {
                console.log(data[0]['message']);
            }
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('submit', '.form-edit-kategori-1649408668024', function() {
    $.ajax({
        type: 'POST',
        url: 'kategori_api/load?act=update',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                kategoriLoadDataAll();
            } else if (data[0]['status'] == 2) {
                console.log(data[0]['message']);
            }
            $('.btn-new-data').show();
            $('.form-input-class-all').hide();
            $('.data-table-rows-all').show();
            btnact();
        }
    }).done(function() {
        $('.progress').hide();
    });
    return false;
});
$(document).on('submit', '.form-kategori-1649408668024', function() {
    $.ajax({
        type: 'POST',
        url: 'kategori_api/load?act=insert',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                kategoriLoadDataAll();
            } else if (data[0]['status'] == 2) {
                console.log(data[0]['message']);
            }
            $('.btn-new-data').show();
            $('.form-input-class-all').hide();
            $('.data-table-rows-all').show();
            btnact();
        }
    }).done(function() {
        $('.progress').hide();
    });
    return false;
});