$(document).ready(function() {
    loadDatalogo();
});
$(document).on('click', '.btn-close-class', function(){
    $('.btn-new-data').show();
    $('.form-input-class-all').hide();
    $('.data-table-rows-all').show();
    btnact();
});
function loadDatalogo(){
    $('.exampledttbl').hide();
    let beritaDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'logo_api/load_data',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            let numberRows = 1;
            beritaDataResult += ""+
            "<div class='row data-table-rows-all'>"+
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
                                        "<th>Status</th>"+
                                        "<th>Gambar</th>"+
                                        "<th>act</th>"+
                                    "</tr>"+
                                "</thead>"+
                                "<tbody>";
                                for (var i = 0; i < data['data'].length; i++) {
                                    beritaDataResult += ""+
                                    "<tr>"+
                                        "<td>"+ numberRows++ +"</td>"+
                                        "<td>"+ data['data'][i]['title'] +"</td>"+
                                        "<td>"+ data['data'][i]['status'] +"</td>"+
                                        "<td><img src='../uploads/logo/"+ data['data'][i]['gambar'] +"' width='100' /></td>"+
                                        "<td><button type='button' data='" + data['data'][i]['uniq_logo'] + "' class='btn-logo-form-edit btn btn-primary'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>"+
                                        "<button type='button' data='" + data['data'][i]['uniq_logo'] + "' class='btn-logo-form-delete btn btn-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td>"+
                                    "</tr>";
                                }
                                beritaDataResult += ""+
                                    "</tbody>"+
                                "</table>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
            setTimeout(function(){
                $('.class-logo-view-data').html(beritaDataResult);
                $('.exampledttbl').DataTable();
                $('.exampledttbl').show();
            }, 500);
            btnact();
        }
    }).done(function() {
        $('.progress').hide();
    });
}
$('.btn-new-data').click(function(){
    $('.progress').show();
    $('.data-table-rows-all').hide();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    setTimeout(
        function(){
            $('.uniq_logo').val(new Date().getTime());
        }, 550
    );
    $('input:text').val('');
    let dataView = "";
    
    
    dataView += "<form action='#' class='form-logo-123434'>"+
        "<div class='form-group col-md-4'>"+
            "<label>title</label>"+
            "<input type='text' name='title' class='title form-control' placeholder='title' />"+
            "<input type='text' name='uniq_logo' class='uniq_logo' hidden/>"+
        "</div>"+
        "<div class='form-group col-md-4'>"+
            "<label>Status</label>"+
            "<select name='status'  class='status form-control'>"+
                "<option>Pilih Status</option></option>"+
                "<option value='aktif'>aktif</option>"+
                "<option value='tidak aktif'>tidak aktif</option>"+
            "</select>"+
        "</div>"+
        "<div class='form-group col-md-4'>"+
            "<label>Gambar</label>"+
            "<input type='file' name='gambar' class='gambar form-control' placeholder='deskripsi' />"+
        "</div>"+
        "<div class='form-group col-md-6'>"+
            "<button type='submit' class='btn-menu-insert-class btn btn-primary'>Save</button>"+
            "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
        "</div>"+
    "</form>";
    setTimeout(function(){
        $(".class-form-input-card").html(dataView);
        $('.progress').hide();
    }, 500);
    
});
$(document).on('submit', '.form-logo-123434', function(){
    var formData = new FormData();

    let uniq_logoText = $('input[name=uniq_logo]').val();
    formData.append('uniq_logo', uniq_logoText);

    let titleText = $('input[name=title]').val();
    formData.append('title', titleText);

    let statusText = $('select[name=status]').val();
    formData.append('status', statusText);

    let gambarFile = $('input[name=gambar]');
    let gambarFileToUpload = gambarFile[0].files[0];
    formData.append('gambar', gambarFileToUpload);
    $.ajax({
        type: 'POST',
        url: 'logo_api/insert?act=insert',
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        dataType: 'json',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            $('.data-table-rows-all').show();
            $('.btn-new-data').show();
            $('.form-input-class-all').hide();
            btnact();
            loadDatalogo();
        }
    }).done(function() {
        $('.progress').hide();
    });
    return false;
});

$(document).on('click', '.btn-logo-form-edit', function() {
    $('.btn-new-data').hide();
    $('.data-table-rows-all').hide();
    $('.form-input-class-all').show();

    let dataId = $(this).attr('data');
    let dataView = "";

    $.ajax({
        type: 'POST',
        url: 'logo_api/load_data_edit/'+ dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            dataView += "<form action='#' class='form-edit-logo-123434'>"+
                "<div class='form-group col-md-6'>"+
                    "<label>title</label>"+
                    "<input type='text' name='title_edit' class='title form-control' placeholder='title' value='"+ data['data'][0]['title']+"' />"+
                    "<input type='text' name='uniq_logo_edit' class='uniq_logo' hidden value='"+ data['data'][0]['uniq_logo']+"'/>"+
                "</div>"+
                "<div class='form-group col-md-6'>"+
                    "<label>Status</label>"+
                    "<select name='status_edit'  class='status form-control'>"+
                        "<option>Pilih Status</option></option>";
                        if(data['data'][0]['status'] == 'aktif'){
                           dataView += "<option selected  value='aktif'>aktif</option>";
                           dataView += "<option value='tidak aktif'>tidak aktif</option>";
                        } else if(data['data'][0]['status'] == 'tidak aktif'){
                            dataView += "<option  value='aktif'>aktif</option>";
                            dataView += "<option selected value='tidak aktif'>tidak aktif</option>";
                        } else {
                            dataView += "<option value='aktif'>aktif</option>"+
                            "<option value='tidak aktif'>tidak aktif</option>";
                        }
                    dataView +="</select>"+
                "</div>"+
                "<div class='form-group col-md-6'>"+
                    "<input type='text' name='gambar_hidden' value='"+ data['data'][0]['gambar']+"' hidden/>"+
                    "<img src='../uploads/logo/"+ data['data'][0]['gambar']+"' width='100' height='100'/>"+
                "</div>"+
                "<div class='form-group col-md-6'>"+
                    "<label>Gambar</label>"+
                    "<input type='file' name='gambar_edit' class='gambar form-control' placeholder='deskripsi' />"+
                "</div>"+
                "<div class='form-group col-md-6'>"+
                    "<button type='submit' class='btn-menu-update-class btn btn-primary'>update</button>"+
                    "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
                "</div>"+
            "</form>";
            $(".class-form-input-card").html(dataView);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('submit', '.form-edit-logo-123434', function(){
    var formData = new FormData();

    let uniq_logoText = $('input[name=uniq_logo_edit]').val();
    formData.append('uniq_logo', uniq_logoText);

    let titleText = $('input[name=title_edit]').val();
    formData.append('title', titleText);

    let statusText = $('select[name=status_edit]').val();
    formData.append('status', statusText);

    let gambar_hiddenText = $('input[name=gambar_hidden]').val();
    formData.append('gambar_hidden', gambar_hiddenText);
    
    let gambarFile = $('input[name=gambar_edit]');
    let gambarFileToUpload = gambarFile[0].files[0];
    formData.append('gambar', gambarFileToUpload);
    console.log(gambar_hiddenText);
    $.ajax({
        type: 'POST',
        url: 'logo_api/update',
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        dataType: 'json',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            $('.data-table-rows-all').show();
            $('.btn-new-data').show();
            $('.form-input-class-all').hide();
            btnact();
            loadDatalogo();
        }
    }).done(function() {
        $('.progress').hide();
    });
    return false;
});
$(document).on('click', '.btn-logo-form-delete', function(){
    let dataId = $(this).attr('data');
    if(confirm('Hapus logo..??')){
        $.ajax({
            type: 'POST',
            url: 'logo_api/delete/' + dataId,
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            data: '',
            beforeSend: function() {
                $('.progress').show();
            },
            success: function(data) {
                if (data[0]['status'] == 1) {
                    console.log(data[0]['message']);
                    $('.btn-new-data').show();
                    $('.form-input-class-all').hide();
                    $('.data-table-rows-all').show();
                    btnact();
                    loadDatalogo();
                } else if (data[0]['status'] == 2) {
                    console.log(data[0]['message']);
                }
            }
        }).done(function() {
            $('.progress').hide();
        });
    }
});
