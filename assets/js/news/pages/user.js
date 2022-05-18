$(document).ready(function() {
    userLoadDataAll();
    formSelectLevel();
});
function formSelectLevel() {
    selectFormInput('status_user_api/load?act=load', 'level', 'uniq_status_user','nama_status', '.form-select-data-level-user');
}
$('.btn-new-data').click(function(){
    $('input:text').val('');
    let dataView = "";
    $('.data-table-rows-all').hide();
    let uniq_user_insert = new Date().getTime();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    formSelectLevel();
    dataView += "<form action='#' role='form' class='form-user-1649240366439'>"+
        "<input type='text' name='uniq_user' class='uniq_user' placeholder='user' hidden value='"+ uniq_user_insert +"'/>"+
        "<div class='form-group'>"+
            "<label>Nama</label>"+
            "<input type='text' name='nama_user' class='nama_user form-control' placeholder='nama_user' />"+
        "</div>"+
        "<div class='form-group'>"+
            "<label>Username</label>"+
            "<input type='text' name='username' class='username form-control' placeholder='username' />"+
        "</div>"+
        "<div class='form-group'>"+
            "<label>Password</label>"+
            "<input type='text' name='password' class='password form-control' placeholder='password' />"+
        "</div>"+
        "<div class='form-group'>"+
            "<label>Level</label>"+
            "<div class='form-select-data-level-user'></div>"+
        "</div>"+
        "<button type='submit' class='btn-user-insert-class btn btn-primary'>Save</button>"+
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
function userLoadDataAll() {
    $('.exampledttbl').hide();
    let userDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'user_api/load?act=load',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            userDataResult += "<div class='row data-table-rows-all'>"+
            "<div class='col-md-12'>"+
                "<div class='panel panel-default'>"+
                    "<div class='panel-heading'>"+
                        "User"+
                    "</div>"+
                    "<div class='panel-body'>"+
                        "<div class='table-responsive'>"+
                            "<table class='exampledttbl table table-hover'>"+
                                "<thead>"+
                                    "<tr>"+
                                        "<th>#</th>"+
                                        "<th>Nama</th>"+
                                        "<th>Username</th>"+
                                        "<th>Level</th>"+
                                        "<th>act</th>"+
                                    "</tr>"+
                                "</thead>"+
                                "<tbody>";
                                let numberRows = 1;
                                for (var i = 0; i < data.length; i++) {
                                    userDataResult +="<tr>"+
                                    "<td>"+numberRows+++"</td>"+
                                    "<td>"+data[i]['nama_user']+"</td>"+
                                    "<td>"+data[i]['username']+"</td>"+
                                    "<td>"+data[i]['nama_status']+"</td>"+
                                    "<td><button type='button' data='" + data[i]['uniq_user'] + "' class='btn-user-form-edit btn btn-primary btn-edit-global'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>"+
                                    "<button type='button' data='" + data[i]['uniq_user'] + "' class='btn-user-form-menu-access btn btn-success btn-edit-global'><span class='glyphicon glyphicon-stats' aria-hidden='true'></span></button>"+
                                    "<button type='button' data='" + data[i]['uniq_user'] + "' class='btn-user-form-delete btn btn-danger btn-delete-global'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td>"+
                                    "</tr>";
                                }
                                userDataResult +="</tbody>"+
                                    "</table>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
            setTimeout(function(){
                $('.class-user-view-data').html(userDataResult);
                $('.exampledttbl').DataTable();
                $('.progress').hide();
                $('.exampledttbl').show();
            }, 500);
            btnact();
        }
    }).done(function() {
        // $('.progress').hide();
    });
}
$(document).on('click', '.btn-user-form-edit', function() {
    $('.data-table-rows-all').hide();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    btnact();
    let dataId = $(this).attr('data');
    let userEditDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'user_api/load?act=load&where_parameter=1&uniq_user=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            fisledglo('status_user_api/load?act=load', 'level', 'uniq_status_user','nama_status', '.form-select-data-level-user-edit', data[0]['level']);

            userEditDataResult += "<form action='#' role='form' class='form-edit-user-1649240366439' >" + 
                "<input type='text' name='uniq_user' class='uniq_user' value='" + data[0]['uniq_user'] + "' hidden/>" + 
                "<div class='form-group'>"+
                "<label>Nama</label>"+
                    "<input type='text' name='nama_user' class='nama_user form-control' placeholder='nama_user' value='" + data[0]['nama_user'] + "' />" +
                "</div>"+
                "<div class='form-group'>"+
                "<label>Username</label>"+
                    "<input type='text' name='username' class='username form-control' placeholder='username' value='" + data[0]['username'] + "' />" + 
                "</div>"+
                "<div class='form-group'>"+
                "<label>Password</label>"+
                    "<input type='text' name='password' class='password form-control' placeholder='password' />" + 
                "</div>"+
                "<div class='form-group'>"+
                "<label>Username</label>"+
                    "<div class='form-select-data-level-user-edit'></div>" +
                "</div>"+
                "<button type='submit' class='btn-user-edit-class  btn btn-primary'>Simpan</button>" + 
                "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
            "</form>";
            $('.class-form-input-card').html(userEditDataResult);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('click', '.btn-user-form-delete', function() {
    if(confirm('akan di hapus permanen')){
        let dataId = $(this).attr('data');
        $.ajax({
            type: 'POST',
            url: 'user_api/load?act=delete&uniq_user=' + dataId,
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            data: '',
            beforeSend: function() {
                $('.progress').show();
            },
            success: function(data) {
                if (data[0]['status'] == 1) {
                    console.log(data[0]['message']);
                    userLoadDataAll();
                } else if (data[0]['status'] == 2) {
                    console.log(data[0]['message']);
                }
            }
        }).done(function() {
            $('.progress').hide();
        });
    }
});
$(document).on('submit', '.form-edit-user-1649240366439', function() {
    $.ajax({
        type: 'POST',
        url: 'user_api/load?act=update',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                userLoadDataAll();
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
$(document).on('submit', '.form-user-1649240366439', function() {
    $.ajax({
        type: 'POST',
        url: 'user_api/load?act=insert',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                userLoadDataAll();
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

// menu access
$(document).on('click', '.btn-user-form-menu-access', function(){
    let dataView = "";
    let userId = $(this).attr('data');
    $('.data-table-rows-all').hide();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    btnact();
    let menuDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'menu_api/load?act=load_menu_access&uniq_user='+userId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            dataView += "<form action='#' role='form' class='form-menu_access-1649233502984'>"+
            "<input type='text' name='user_id' class='user_id' value='"+ userId +"' hidden/>"+
            "<input type='text' name='length_data' value='"+ data.length +"' hidden/>";
            
            for (var i = 0; i < data.length; i++) {
                if(data[i]['uniq_menu_access'] == null || data[i]['uniq_menu_access'] == ""){
                    var uniq_access_insert = new Date().getTime()+i;
                    var metode_ins = 'insert';
                    var createData ='';
                    var readData = '';
                    var updateData = '';
                    var deleteData = '';
                    var createChecked = '';
                    var readChecked = '';
                    var updateChecked = '';
                    var deleteChecked = '';
                } else {
                    var uniq_access_insert = data[i]['uniq_menu_access'];
                    var metode_ins = 'update';
                    var createData = data[i]['create'];
                    var readData = data[i]['read'];
                    var updateData = data[i]['update'];
                    var deleteData = data[i]['delete'];
                    if(createData == 'y'){var createChecked = 'checked';}else{var createChecked = '';}
                    if(readData == 'y'){var readChecked = 'checked';}else{var readChecked = '';}
                    if(updateData == 'y'){var updateChecked = 'checked';}else{var updateChecked = '';}
                    if(deleteData == 'y'){var deleteChecked = 'checked';}else{var deleteChecked = '';}
                }
                dataView += "<input type='text' name='metode[]' class='metode' value='"+ metode_ins +"' hidden/>"+
                    "<input type='text' name='uniq_menu_access[]' class='uniq_menu_access' hidden value='"+ uniq_access_insert +"'/>"+

                    "<div class='form-group'>"+ 
                        "<label>Menu</label>"+
                        "<input type='text' name='menu_id[]' class='menu_id' value='"  + data[i]['uniq_menu'] + "' hidden/>"+
                        "<input type='text' class='form-control col-md-1' value='"+ data[i]['nama_menu'] +"' readonly/>"+
                    "</div>"+
                    "<div class='form-group'>"+ 
                        "<label>Create</label>"+
                        "<label>"+
                            "<input type='checkbox' "+ createChecked +" value='"  + data[i]['uniq_menu'] + "' data='1' class='check-box-class c-check-status-"  + data[i]['uniq_menu'] + "'>"+
                        "</label>"+
                        "<input type='text' name='create[]' class='create c-"+ data[i]['uniq_menu'] +"' placeholder='create' value='"+ createData +"' hidden/>"+

                        "<label>Read</label>"+
                        "<label>"+
                            "<input type='checkbox' "+ readChecked +" value='"  + data[i]['uniq_menu'] + "' data='2' class='check-box-class r-check-status-"  + data[i]['uniq_menu'] + "'>"+
                        "</label>"+
                        "<input type='text' name='read[]' class='read r-"+ data[i]['uniq_menu'] +"' placeholder='read' value='"+ readData +"' hidden/>"+

                        "<label>Update</label>"+
                            "<label>"+
                                "<input type='checkbox' "+ updateChecked +" value='"  + data[i]['uniq_menu'] + "' data='3' class='check-box-class u-check-status-"  + data[i]['uniq_menu'] + "'>"+
                            "</label>"+
                        "<input type='text' name='update[]' class='update u-"+ data[i]['uniq_menu'] +"' placeholder='update' value='"+ updateData +"' hidden/>"+

                        "<label>Delete</label>"+
                        "<label>"+
                            "<input type='checkbox' "+ deleteChecked +" value='"  + data[i]['uniq_menu'] + "' data='4' class='check-box-class d-check-status-"  + data[i]['uniq_menu'] + "'>"+
                        "</label>"+
                        "<input type='text' name='delete[]' class='delete d-"+ data[i]['uniq_menu'] +"' placeholder='delete' value='"+ deleteData +"' hidden/>"+
                        
                    "</div>";
            }
            dataView +="<button type='submit' class='btn-user-insert-class btn btn-primary'>Save</button>"+
                "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
                "</form><hr />";
            $(".class-form-input-card").html(dataView);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
// 
$(document).on('submit', '.form-menu_access-1649233502984', function(){
    $.ajax({
        type: 'POST',
        url: 'menu_access_api/load?act=insert_tes',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            $('.btn-new-data').show();
            $('.form-input-class-all').hide();
            $('.data-table-rows-all').show();
            btnact();
        }
    }).done(function() {
        $('.progress').hide();
    });
    return false;
})
$(document).on('click', '.check-box-class', function(){
    let uniqMenuVal = $(this).attr('value');
    let dataVal = $(this).attr('data');
    
    if(dataVal == 1){
        if ($('.c-check-status-'+ uniqMenuVal).is(':checked')) {
            $('.c-'+uniqMenuVal).val('y');
        } else {
            $('.c-'+uniqMenuVal).val('n');
        }
    } else if(dataVal == 2){
        if ($('.r-check-status-'+ uniqMenuVal).is(':checked')) {
            $('.r-'+uniqMenuVal).val('y');
        } else {
            $('.r-'+uniqMenuVal).val('n');
        }
    } else if(dataVal == 3){
        if ($('.u-check-status-'+ uniqMenuVal).is(':checked')) {
            $('.u-'+uniqMenuVal).val('y');
        } else {
            $('.u-'+uniqMenuVal).val('n');
        }
    } else if(dataVal == 4){
        if ($('.d-check-status-'+ uniqMenuVal).is(':checked')) {
            $('.d-'+uniqMenuVal).val('y');
        } else {
            $('.d-'+uniqMenuVal).val('n');
        }
    }
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