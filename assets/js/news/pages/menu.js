$(document).ready(function() {
    menuLoadDataAll();
    // dttblload();
});
$('.btn-new-data').click(function(){
    $('input:text').val('');
    let dataView = "";
    $('.data-table-rows-all').hide();
    let uniq_menu_insert = new Date().getTime();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    dataView += "<form action='#' role='form' class='form-menu-1649169535719'>"+
        "<input type='text' name='uniq_menu' class='uniq_menu' placeholder='menu' value='"+ uniq_menu_insert +"' hidden />"+
        "<div class='form-group col-md-4'>"+
            "<label>Judul</label>"+
            "<input type='text' name='nama_menu' class='nama_menu form-control' placeholder='nama_menu' />"+
        "</div>"+
        "<div class='form-group col-md-4'>"+
            "<label>Status Menu</label>"+
            "<select name='status' class='status form-control select-status-menu'>"+
                "<option value=''>Pilih Status</option>"+
                "<option value='1'>Menu Utama</option>"+
                "<option value='2'>Sub Menu</option>"+
            "</select>"+
        "</div>"+
        "<div class='form-group col-md-4'>"+
            "<label>Menu Utama</label>"+
            "<div class='sub-menu-class'></div>"+
        "</div>"+
        "<hr />"+
        "<div class='form-group col-md-12'>"+
            "<label>link</label>"+
            "<input type='text' name='link' class='link form-control' placeholder='link' />"+
        "</div>"+
        "<div class='form-group'>"+
            "<label>Status</label>"+
            "<select name='status_aktif' class='status form-control'>"+
                "<option value=''>Pilih Status</option>"+
                "<option value='aktif'>Aktif</option>"+
                "<option value='tidak aktif'>Tidak Aktif</option>"+
            "</select name='status' class='status form-control'>"+
        "</div>"+
        "<div class='form-group col-md-12'>"+
            "<button type='submit' class='btn-menu-insert-class btn btn-primary'>Save</button>"+
            "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
        "</div>"+
    "</form>";
    $(".class-form-input-card").html(dataView);
});
$(document).on('change', '.select-status-menu', function(){
    let dataVlCg = $(this).val();
    console.log(dataVlCg);
    if(dataVlCg == 2){
        $('.sub-menu-class').show();
        sfdApi('menu_api/load?act=load&where_status=1', 'menu_utama_id', 'uniq_menu', 'nama_menu', '.sub-menu-class');
    } else {
        $('.sub-menu-class').hide();
    }
})
$(document).on('click', '.btn-close-class', function(){
    $('.btn-new-data').show();
    $('.form-input-class-all').hide();
    $('.data-table-rows-all').show();
    btnact();
});
function menuLoadDataAll() {
    $('.exampledttbl').hide();
    if(localStorage.getItem('keyupdata') == null){
        var whereLike = '';
    } else {
        var whereLike = '&where_like='+localStorage.getItem('keyupdata');
    }
    let menuDataResult = '';
    let pagingValue = '';
    $.ajax({
        type: 'POST',
        url: 'menu_api/load?act=load'+whereLike,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            let numberRows = 1;

            menuDataResult += ""+
            "<table class='exampledttbl table-data-class table table-hover display' style='width:100%'>"+
                "<thead>"+
                    "<tr>"+
                        "<th>#</th>"+
                        "<th>Menu</th>"+
                        "<th>status menu</th>"+
                        "<th>link</th>"+
                        "<th>status</th>"+
                        "<th>act</th>"+
                    "</tr>"+
                "</thead>"+
                "<tbody>";
            for (var i = 0; i < data['data'].length; i++) {
                if(data['data'][i]['status'] == 1){var statusMn = 'Menu Utama';}else if(data['data'][i]['status'] == 2){var statusMn = 'Submenu';}
                menuDataResult += ""+
                "<tr>"+
                    "<td>"+numberRows+++"</td>"+
                    "<td>"+ data['data'][i]['nama_menu'] +"</td>"+
                    "<td>"+ statusMn +"</td>"+
                    "<td>"+ data['data'][i]['link'] +"</td>"+
                    "<td>"+ data['data'][i]['status_aktif'] +"</td>"+
                    "<td><button type='button' data='" + data['data'][i]['uniq_menu'] + "' class='btn-menu-form-edit btn btn-primary btn-edit-global'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>"+
                    "<button type='button' data='" + data['data'][i]['uniq_menu'] + "' class='btn-menu-form-delete btn btn-danger btn-delete-global'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td>"+
                "</tr>";
            }
            menuDataResult += ""+
                "</tbody>";
            "</table>";
            setTimeout(function(){
                $('.class-menu-view-data').html(menuDataResult);
                $('.exampledttbl').DataTable();
                $('.exampledttbl').show();
                $('.progress').hide();
            }, 500);
        }
    }).done(function() {
    });
}
$(document).on('click', '.btn-menu-form-edit', function() {
    $('.data-table-rows-all').hide();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    btnact();
    let dataId = $(this).attr('data');
    let menuEditDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'menu_api/load?act=load&where_parameter=1&uniq_menu=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {},
        success: function(data) {
            fisledgloDT('menu_api/load?act=load&where_status=1', 'menu_utama_id', 'uniq_menu', 'nama_menu', '.sub-menu-edit-class', data['data'][0]['menu_utama_id']);
            menuEditDataResult += "<form action='#' class='form-edit-menu-1649169535719' >" + 
                "<input type='text' name='uniq_menu' class='uniq_menu' value='" + data['data'][0]['uniq_menu'] + "' hidden/>" + 
                "<div class='form-group'>"+
                    "<label>Nama</label>"+
                    "<input type='text' name='nama_menu' class='nama_menu form-control' placeholder='nama_menu' value='" + data['data'][0]['nama_menu'] + "' />" +
                "</div>"+
                "<div class='form-group'>"+
                    "<label>Status</label>"+
                        "<select name='status' class='status form-control select-status-menu'>"+
                        "<option value=''>Pilih Status</option>";
                        if(data['data'][0]['status'] == 1){
                            menuEditDataResult += "<option selected value='1'>Menu Utama</option>"+
                            "<option value='2'>Sub Menu</option>";
                        } else if(data['data'][0]['status'] == 2){
                            menuEditDataResult += "<option value='1'>Menu Utama</option>"+
                            "<option selected value='2'>Sub Menu</option>";
                        }
                        menuEditDataResult +="</select>"+                
                "</div>"+
                "<div class='form-group'>"+
                    "<label>Status</label>"+
                    "<div class='sub-menu-edit-class'>" + 
                "</div>"+
                "<div class='form-group'>"+
                    "<label>link</label>"+
                    "<input type='text' name='link' class='link form-control' placeholder='link' value='" + data['data'][0]['link'] + "' />" + 
                "</div>"+
                "<div class='form-group'>"+
                    "<label>Status</label>"+
                    "<select name='status_aktif' class='status form-control'>"+
                        "<option value=''>Pilih Status</option>";
                        if(data['data'][0]['status_aktif'] == 'aktif'){
                            menuEditDataResult += "<option selected value='aktif'>Aktif</option>"+
                            "<option value='tidak aktif'>Tidak Aktif</option>";
                        }else {
                            menuEditDataResult += "<option value='aktif'>Aktif</option>"+
                            "<option value='tidak aktif'>Tidak Aktif</option>";
                        }
                        menuEditDataResult += "</select>"+
                "</div>"+
                "<button type='submit' class='btn-menu-edit-class btn btn-primary'>Simpan</button>" +
                "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
            "</form>";
            $('.class-form-input-card').html(menuEditDataResult);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('click', '.btn-menu-form-delete', function() {
    if(confirm('akan di hapus permanen')){
        let dataId = $(this).attr('data');
        let menuDeleteDataResult = '';
        $.ajax({
            type: 'POST',
            url: 'menu_api/load?act=delete&uniq_menu=' + dataId,
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            data: '',
            beforeSend: function() {
                $('.progress').show();
            },
            success: function(data) {
                if (data[0]['status'] == 1) {
                    console.log(data[0]['message']);
                    menuLoadDataAll();
                } else if (data[0]['status'] == 2) {
                    console.log(data[0]['message']);
                }
            }
        }).done(function() {
            // $('.progress').hide();
        });
    }
});
$(document).on('submit', '.form-edit-menu-1649169535719', function() {
    $.ajax({
        type: 'POST',
        url: 'menu_api/load?act=update',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                menuLoadDataAll();
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
$(document).on('submit', '.form-menu-1649169535719',function() {
    $.ajax({
        type: 'POST',
        url: 'menu_api/load?act=insert',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            // console.log(data);
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                menuLoadDataAll();
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
            console.log(data);
            dataValueGlobalFunction += "<select name='"+ nameForm +"' id='id-"+ nameForm +"-select' class='class-"+ nameForm +"-select form-control'>";
            dataValueGlobalFunction += "<option value='#'>-Pilih "+ nameForm +"-</option>";
            for (var i = 0; i < data.length; i++) {
                dataValueGlobalFunction += "<option value='"+ data[i][valueName] +"'>"+ data[i][viewName] +"</option>";
            }
            dataValueGlobalFunction += "</select>";
            $(divValueDataGlo).html(dataValueGlobalFunction);
        }
    }).done(function() {});
}function sfdApi(link, nameForm, valueName, viewName, divValueDataGlo){
    let dataValueGlobalFunction = '';
    $.ajax({
        type: 'POST',
        url: link,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {},
        success: function(data) {
            console.log(data);
            dataValueGlobalFunction += "<select name='"+ nameForm +"' id='id-"+ nameForm +"-select' class='class-"+ nameForm +"-select form-control'>";
            dataValueGlobalFunction += "<option value='#'>-Pilih "+ nameForm +"-</option>";
            for (var i = 0; i < data['data'].length; i++) {
                dataValueGlobalFunction += "<option value='"+ data['data'][i][valueName] +"'>"+ data['data'][i][viewName] +"</option>";
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
function fisledgloDT(link, nameForm, valueName, viewName, divValueDataGlo, selectedDataGlo){
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
            for (var i = 0; i < data['data'].length; i++) {
                if(data['data'][i][valueName] == selectedDataGlo){
                    dataValueGlobalFunction += "<option selected value='"+ data['data'][i][valueName] +"'>"+ data['data'][i][viewName] +"</option>";
                } else {
                    dataValueGlobalFunction += "<option value='"+ data['data'][i][valueName] +"'>"+ data['data'][i][viewName] +"</option>";
                }
            }
            dataValueGlobalFunction += "</select>";
            $(divValueDataGlo).html(dataValueGlobalFunction);
        }
    }).done(function() {});
}