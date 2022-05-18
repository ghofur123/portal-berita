$(document).ready(function() {
    $('.uniq_fokus_berita').val(new Date().getTime());
    fokus_beritaLoadDataAll();
});
$('.btn-new-data').click(function(){
    $('input:text').val('');
    let dataView = "";
    $('.data-table-rows-all').hide();
    let uniq_menu_insert = new Date().getTime();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    dataView += "<form action='#' class='form-fokus_berita-1649635095021'>"+
        "<input type='text' name='uniq_fokus_berita' class='uniq_fokus_berita' hidden value='"+ uniq_menu_insert +"'/>"+
        "<div class='form-group'>"+
            "<label>Nama Fokus Berita</label>"+
            "<input type='text' name='nama_fokus_berita' class='nama_fokus_berita form-control' placeholder='nama_fokus_berita' />"+
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
function fokus_beritaLoadDataAll() {
    $('.exampledttbl').hide();
    let fokus_beritaDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'fokus_berita_api/load?act=load',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            fokus_beritaDataResult += "<div class='row data-table-rows-all'>"+
            "<div class='col-md-12'>"+
                "<div class='panel panel-default'>"+
                    "<div class='panel-heading'>"+
                        "Hover Rows"+
                    "</div>"+
                    "<div class='panel-body'>"+
                        "<div class='table-responsive'>"+
                            "<table class='exampledttbl table table-hover'>"+
                                "<thead>"+
                                    "<tr>"+
                                        "<th>#</th>"+
                                        "<th>Title Tags</th>"+
                                        "<th>Link</th>"+
                                        "<th>Status</th>"+
                                        "<th>act</th>"+
                                    "</tr>"+
                                "</thead>"+
                                "<tbody>";
                            let numberRows = 1;
                            for (var i = 0; i < data.length; i++) {
                                fokus_beritaDataResult += "<tr>"+
                                "<td>"+numberRows+++"</td>"+
                                "<td>"+ data[i]['nama_fokus_berita'] +"</td>"+
                                "<td>"+ data[i]['link'] +"</td>"+
                                "<td>"+ data[i]['status'] +"</td>"+
                                "<td><button type='button' data='" + data[i]['uniq_fokus_berita'] + "' class='btn-fokus_berita-form-edit btn btn-primary'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>"+
                                "<button type='button' data='" + data[i]['uniq_fokus_berita'] + "' class='btn-fokus_berita-form-delete btn btn-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td>";
                            }
                      fokus_beritaDataResult +="</tbody>"+
                                    "</table>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
            
            setTimeout(function(){
                $('.class-fokus_berita-view-data').html(fokus_beritaDataResult);
                $('.exampledttbl').DataTable();
                $('.progress').hide();
                $('.exampledttbl').show();
            }, 500);
            btnact();
        }
    }).done(function() {
    });
}

$(document).on('click', '.btn-fokus_berita-form-edit', function() {
    $('.data-table-rows-all').hide();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    btnact();
    let dataId = $(this).attr('data');
    let fokus_beritaEditDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'fokus_berita_api/load?act=load&where_parameter=1&uniq_fokus_berita=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            fokus_beritaEditDataResult += "<form action='#' class='form-edit-fokus_berita-1649635095021'>" +
                "<input type='text' name='uniq_fokus_berita' class='uniq_fokus_berita' value='" + data[0]['uniq_fokus_berita'] + "' hidden/>" + 
                "<div class='form-group'>"+
                    "<label>Nama Fokus Berita</label>"+
                    "<input type='text' name='nama_fokus_berita' class='nama_fokus_berita form-control' placeholder='nama_fokus_berita' value='" + data[0]['nama_fokus_berita'] + "'/>"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label>Link</label>"+
                    "<input type='text' name='link' class='link form-control' placeholder='link' value='" + data[0]['link'] + "'/>"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label>Status</label>"+
                    "<select name='status' class='status form-control'>"+
                        "<option value=''>Pilih Status</option>";
                        if(data[0]['status'] == 'aktif'){
                            fokus_beritaEditDataResult += "<option selected value='aktif'>Aktif</option>"+
                            "<option value='tidak aktif'>Tidak Aktif</option>";
                        }else {
                            fokus_beritaEditDataResult += "<option value='aktif'>Aktif</option>"+
                            "<option value='tidak aktif'>Tidak Aktif</option>";
                        }
                        
                        fokus_beritaEditDataResult += "</select name='status' class='status form-control'>"+
                "</div>"+
                "<button type='submit' class='btn-menu-insert-class btn btn-primary'>Save</button>"+
                "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
            "</form>";
            $(".class-form-input-card").html(fokus_beritaEditDataResult);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('click', '.btn-fokus_berita-form-delete', function() {
    if(confirm('akan di hapus permanen')){
        let dataId = $(this).attr('data');
        $.ajax({
            type: 'POST',
            url: 'fokus_berita_api/load?act=delete&uniq_fokus_berita=' + dataId,
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            data: '',
            beforeSend: function() {
                $('.progress').show();
            },
            success: function(data) {
                if (data[0]['status'] == 1) {
                    console.log(data[0]['message']);
                    fokus_beritaLoadDataAll();
                } else if (data[0]['status'] == 2) {
                    console.log(data[0]['message']);
                }
            }
        }).done(function() {
            $('.progress').hide();
        });
    }
    
});
$(document).on('submit', '.form-edit-fokus_berita-1649635095021', function() {
    $.ajax({
        type: 'POST',
        url: 'fokus_berita_api/load?act=update',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                fokus_beritaLoadDataAll();
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
$(document).on('submit', '.form-fokus_berita-1649635095021', function() {
    $.ajax({
        type: 'POST',
        url: 'fokus_berita_api/load?act=insert',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                fokus_beritaLoadDataAll();
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