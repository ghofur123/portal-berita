$(document).ready(function() {
    pagesLoadDataAll();
});
CKEDITOR.replace( 'deskripsi' );
CKEDITOR.replace( 'deskripsi_edit' );

$('.btn-new-data').click(function(){
    CKEDITOR.instances['deskripsi'].setData('');
    $('input:text').val('');
    $('.data-table-rows-all').hide();
    $('.uniq_pages_ins').val(new Date().getTime());
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    $('.class-form-input-card1').show();
    $('.class-form-input-card2').hide();
});
$(document).on('click', '.btn-close-class', function(){
    $('.btn-new-data').show();
    $('.form-input-class-all').hide();
    $('.data-table-rows-all').show();
    $('.class-form-input-card1').hide();
    $('.class-form-input-card2').hide();
    btnact();
});
function pagesLoadDataAll() {
    $('.exampledttbl').hide();
    let pagesDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'pages_api/load?act=load',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            pagesDataResult += "<div class='row data-table-rows-all'>"+
            "<div class='col-md-12'>"+
                "<div class='panel panel-default'>"+
                    "<div class='panel-heading'>"+
                        "Hover Rows"+
                    "</div>"+
                    "<div class='panel-body'>"+
                        "<div class='table-responsive'>"+
                            "<table class='exampledttbl table table-hover table-data-class'>"+
                                "<thead>"+
                                    "<tr>"+
                                        "<th>#</th>"+
                                        "<th>Title</th>"+
                                        "<th>Link</th>"+
                                        "<th>Status</th>"+
                                        "<th>act</th>"+
                                    "</tr>"+
                                "</thead>"+
                                "<tbody>";
                                let numberRows = 1;
                            for (var i = 0; i < data.length; i++) {
                                pagesDataResult += "<tr>"+
                                "<td>"+ numberRows++ +"</td>"+
                                "<td>"+ data[i]['judul'] +"</td>"+
                                "<td>"+ data[i]['link_pages'] +"</td>"+
                                "<td>"+ data[i]['status'] +"</td>"+
                                "<td><button type='button' data='" + data[i]['uniq_pages'] + "' class='btn-pages-form-edit btn btn-primary btn-edit-global'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>"+
                                "<button type='button' data='" + data[i]['uniq_pages'] + "' class='btn-pages-form-delete btn btn-danger btn-delete-global'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td>";
                            }
                            pagesDataResult +="</tbody>"+
                                    "</table>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
            setTimeout(function(){
                $('.class-pages-view-data').html(pagesDataResult);
                $('.exampledttbl').DataTable();
                $('.progress').hide();
                $('.exampledttbl').show();
            }, 500);
            btnact();
        }
    }).done(function() {
    });
}
$(document).on('click', '.btn-pages-form-edit', function() {
    $('.data-table-rows-all').hide();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    $('.class-form-input-card1').hide();
    $('.class-form-input-card2').show();
    btnact();
    let dataId = $(this).attr('data');
    let pagesEditDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'pages_api/load?act=load&where_parameter=1&uniq_pages=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            $('.uniq_pages_edit').val(data[0]['uniq_pages']);
            $('.judul_edit').val(data[0]['judul']);
            $('.link_pages_edit').val(data[0]['link_pages']);
            let statusValue = "";
            statusValue += "<option value=''>Pilih Status</option>";
                if(data[0]['status'] == 'aktif'){
                    statusValue +="<option selected value='aktif'>aktif</option>"+
                    "<option value='tidak aktif'>tidak aktif</option>";
                } else {
                    statusValue +="<option value='aktif'>aktif</option>"+
                    "<option selected value='tidak aktif'>tidak aktif</option>";
                }
            $('.status-value-edit').html(statusValue);
            CKEDITOR.instances['deskripsi_edit'].setData(data[0]['deskripsi']);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('click', '.btn-pages-form-delete', function() {
    if(confirm('akan di hapus permanen')){
        let dataId = $(this).attr('data');
        let pagesDeleteDataResult = '';
        $.ajax({
            type: 'POST',
            url: 'pages_api/load?act=delete&uniq_pages=' + dataId,
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            data: '',
            beforeSend: function() {
                $('.progress').show();
            },
            success: function(data) {
                if (data[0]['status'] == 1) {
                    console.log(data[0]['message']);
                    pagesLoadDataAll();
                } else if (data[0]['status'] == 2) {
                    console.log(data[0]['message']);
                }
            }
        }).done(function() {
            $('.progress').hide();
        });
    }
});
$(document).on('submit', '.form-edit-pages-1649454613157', function() {
    $.ajax({
        type: 'POST',
        url: 'pages_api/load?act=update',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                pagesLoadDataAll();
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
$(document).on('submit', '.form-pages-1649454613157', function() {
    $.ajax({
        type: 'POST',
        url: 'pages_api/load?act=insert',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                pagesLoadDataAll();
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