$(document).ready(function() {
    status_userLoadDataAll();
});
$('.btn-new-data').click(function(){
    $('input:text').val('');
    let dataView = "";
    $('.data-table-rows-all').hide();
    let uniq_menu_insert = new Date().getTime();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    dataView += "<form action='#' class='form-status_user-1649460653564'>"+
        "<input type='text' name='uniq_status_user' class='uniq_status_user' value='"+ uniq_menu_insert +"' hidden />"+
        "<div class='form-group'>"+
            "<label>Nama Status</label>"+
            "<input type='text' name='nama_status' class='nama_status form-control' placeholder='nama_status' />"+
        "</div>"+
        "<div class='form-group'>"+
            "<label>Deskripsi</label>"+
            "<input type='text' name='deskripsi' class='deskripsi form-control' placeholder='deskripsi' />"+
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
function status_userLoadDataAll() {
    $('.exampledttbl').hide();
    let status_userDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'status_user_api/load?act=load',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            status_userDataResult += "<div class='row data-table-rows-all'>"+
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
                                        "<th>Title</th>"+
                                        "<th>Deskripsi</th>"+
                                        "<th>act</th>"+
                                    "</tr>"+
                                "</thead>"+
                                "<tbody>";
                            let numberRows = 1;
                            for (var i = 0; i < data.length; i++) {
                                status_userDataResult += "<tr>"+
                                "<td>"+numberRows+++"</td>"+
                                "<td>"+ data[i]['nama_status'] +"</td>"+
                                "<td>"+ data[i]['deskripsi'] +"</td>"+
                                "<td><button type='button' data='" + data[i]['uniq_status_user'] + "' class='btn-status_user-form-edit btn btn-primary btn-edit-global'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>"+  
                                "<button type='button' data='" + data[i]['uniq_status_user'] + "' class='btn-status_user-form-delete btn btn-danger btn-delete-global'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td>";
                            }
                            status_userDataResult +="</tbody>"+
                                    "</table>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
                $('.class-status_user-view-data').html(status_userDataResult);                
                $('.progress').hide();
            btnact();
        }
    }).done(function() {
    });
}
$(document).on('click', '.btn-status_user-form-edit', function() {
    $('.data-table-rows-all').hide();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    btnact();
    let dataId = $(this).attr('data');
    let status_userEditDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'status_user_api/load?act=load&where_parameter=1&uniq_status_user=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            status_userEditDataResult += "<form action='#' class='form-edit-status_user-1649460653564' >" + 
            "<input type='text' name='uniq_status_user' class='uniq_status_user' value='" + data[0]['uniq_status_user'] + "' hidden/>" +
            "<div class='form-group'>"+
                "<label>Nama Status</label>"+
                "<input type='text' name='nama_status' class='nama_status form-control' placeholder='nama_status' value='" + data[0]['nama_status'] + "' />" +
            "</div>"+
            "<div class='form-group'>"+
                "<label>Deskripsi</label>"+
                "<input type='text' name='deskripsi' class='deskripsi form-control' placeholder='deskripsi' value='" + data[0]['deskripsi'] + "' />" +
            "</div>"+
            "<button type='submit' class='btn-status_user-edit-class btn btn-primary'>Simpan</button>" + 
            "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
            "</form>";
            $('.class-form-input-card').html(status_userEditDataResult);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('click', '.btn-status_user-form-delete', function() {
    if(confirm('akan di hapus permanen')){
        let dataId = $(this).attr('data');
        $.ajax({
            type: 'POST',
            url: 'status_user_api/load?act=delete&uniq_status_user=' + dataId,
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            data: '',
            beforeSend: function() {
                $('.progress').show();
            },
            success: function(data) {
                if (data[0]['status'] == 1) {
                    console.log(data[0]['message']);
                    status_userLoadDataAll();
                } else if (data[0]['status'] == 2) {
                    console.log(data[0]['message']);
                }
            }
        }).done(function() {
            $('.progress').hide();
        });
    }
});
$(document).on('submit', '.form-edit-status_user-1649460653564', function() {
    $.ajax({
        type: 'POST',
        url: 'status_user_api/load?act=update',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                status_userLoadDataAll();
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
$(document).on('submit', '.form-status_user-1649460653564', function() {
    $.ajax({
        type: 'POST',
        url: 'status_user_api/load?act=insert',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                status_userLoadDataAll();
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