$(document).ready(function() {
    $('.uniq_menu_access').val(new Date().getTime());
    usersLoadDataAll();
});
$('.btn-new-data').click(function(){
    let dataView = "";
    $('.data-table-rows-all').hide();
    let uniq_access_insert = new Date().getTime();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();

    dataView += "<form action='#' role='form' class='form-menu_access-1649233502984'>"+
        "<input type='text' name='uniq_menu_access' class='uniq_menu_access' placeholder='menu_access' hidden value='"+ uniq_access_insert +"'/>"+
        "<div class='form-group'>"+ 
            "<label>User</label>"+
            "<input type='text' name='user_id' class='user_id' placeholder='user_id' />"+
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
            "<input type='text' name='level' class='level form-control' placeholder='level' />"+
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
});
function menu_accessLoadDataAll() {
    let menu_accessDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'menu_access_api/load?act=load',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                menu_accessDataResult += data[i]['user_id'];
                menu_accessDataResult += data[i]['menu_id'];
                menu_accessDataResult += data[i]['create'];
                menu_accessDataResult += data[i]['read'];
                menu_accessDataResult += data[i]['update'];
                menu_accessDataResult += data[i]['delete'];
                menu_accessDataResult += "<button type='button' data='" + data[i]['uniq_menu_access'] + "' class='btn-menu_access-form-edit'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>"
                menu_accessDataResult += "<button type='button' data='" + data[i]['uniq_menu_access'] + "' class='btn-menu_access-form-delete'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span>"
            }
            $('.class-menu_access-view-data').html(menu_accessDataResult);
        }
    }).done(function() {
        $('.progress').hide();
    });
}
$(document).on('click', '.btn-menu_access-form-edit', function() {
    let dataId = $(this).attr('data');
    let menu_accessEditDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'menu_access/load?act=load&where_parameter=1&uniq_menu_access=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            menu_accessEditDataResult += "<form action='#' class='form-edit-menu_access-1649233502984' >" + "<input type='text' name='uniq_menu_access' class='uniq_menu_access' value='" + data[0]['uniq_menu_access'] + "' />" + "<input type='text' name='user_id' class='user_id' placeholder='user_id' value='" + data[0]['user_id'] + "' />" + "<input type='text' name='menu_id' class='menu_id' placeholder='menu_id' value='" + data[0]['menu_id'] + "' />" + "<input type='text' name='create' class='create' placeholder='create' value='" + data[0]['create'] + "' />" + "<input type='text' name='read' class='read' placeholder='read' value='" + data[0]['read'] + "' />" + "<input type='text' name='update' class='update' placeholder='update' value='" + data[0]['update'] + "' />" + "<input type='text' name='delete' class='delete' placeholder='delete' value='" + data[0]['delete'] + "' />" + "<button type='submit' class='btn-menu_access-edit-class'>Simpan</button>" + "</form>";
            $('.class-menu_access-view-edit-data').html(menu_accessEditDataResult);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('click', '.btn-menu_access-form-delete', function() {
    let dataId = $(this).attr('data');
    let menu_accessDeleteDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'menu_access_api/load?act=delete&uniq_menu_access=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                menu_accessLoadDataAll();
            } else if (data[0]['status'] == 2) {
                console.log(data[0]['message']);
            }
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('submit', '.form-edit-menu_access-1649233502984', function() {
    $.ajax({
        type: 'POST',
        url: 'menu_access_api/load?act=update',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                menu_accessLoadDataAll();
            } else if (data[0]['status'] == 2) {
                console.log(data[0]['message']);
            }
        }
    }).done(function() {
        $('.progress').hide();
    });
    return false;
});
$('.form-menu_access-1649233502984').submit(function() {
    $.ajax({
        type: 'POST',
        url: 'menu_access_api/load?act=insert',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                menu_accessLoadDataAll();
            } else if (data[0]['status'] == 2) {
                console.log(data[0]['message']);
            }
        }
    }).done(function() {
        $('.progress').hide();
    });
    return false;
});