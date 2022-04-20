$(document).ready(function() {
    tagsLoadDataAll();
});
$('.btn-new-data').click(function(){
    $('input:text').val('');
    let dataView = "";
    $('.data-table-rows-all').hide();
    let uniq_menu_insert = new Date().getTime();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    dataView += "<form action='#' class='form-tags-1649471000479'>"+
        "<input type='text' name='uniq_tags' class='uniq_tags' placeholder='tags' hidden value='"+ uniq_menu_insert +"'/>"+
        "<div class='form-group'>"+
            "<label>Title Tag</label>"+
            "<input type='text' name='title_tags' class='title_tags form-control' placeholder='title_tags' />"+
        "</div>"+
        "<div class='form-group'>"+
            "<label>Link</label>"+
            "<input type='text' name='link' class='link form-control' placeholder='link' />"+
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
function tagsLoadDataAll() {
    let tagsDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'tags_api/load?act=load',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            tagsDataResult += "<div class='row data-table-rows-all'>"+
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
                                        "<th>Title Tags</th>"+
                                        "<th>Link</th>"+
                                        "<th>act</th>"+
                                    "</tr>"+
                                "</thead>"+
                                "<tbody>";
                            let numberRows = 1;
                            for (var i = 0; i < data.length; i++) {
                                tagsDataResult += "<tr>"+
                                "<td>"+numberRows+++"</td>"+
                                "<td>"+ data[i]['title_tags'] +"</td>"+
                                "<td>"+ data[i]['link'] +"</td>"+
                                "<td><button type='button' data='" + data[i]['uniq_tags'] + "' class='btn-tags-form-edit btn btn-primary btn-edit-global'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button>"+
                                "<button type='button' data='" + data[i]['uniq_tags'] + "' class='btn-tags-form-delete btn btn-danger btn-delete-global'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></td>";
                            }
                        tagsDataResult +="</tbody>"+
                                    "</table>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
            $('.class-tags-view-data').html(tagsDataResult);
            btnact();
        }
    }).done(function() {
        $('.progress').hide();
    });
}
$(document).on('click', '.btn-tags-form-edit', function() {
    $('.data-table-rows-all').hide();
    $('.btn-new-data').hide();
    $('.form-input-class-all').show();
    btnact();
    let dataId = $(this).attr('data');
    let tagsEditDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'tags_api/load?act=load&where_parameter=1&uniq_tags=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            tagsEditDataResult += "<form action='#' class='form-edit-tags-1649471000479'>"+
                "<input type='text' name='uniq_tags' class='uniq_tags' placeholder='tags' hidden value='"+ data[0]['uniq_tags'] +"'/>"+
                "<div class='form-group'>"+
                    "<label>Title Tag</label>"+
                    "<input type='text' name='title_tags' class='title_tags form-control' placeholder='title_tags' value='" + data[0]['title_tags'] + "' />"+
                "</div>"+
                "<div class='form-group'>"+
                    "<label>Link</label>"+
                    "<input type='text' name='link' class='link form-control' placeholder='link' value='" + data[0]['link'] + "' />"+
                "</div>"+
                "<button type='submit' class='btn-menu-insert-class btn btn-primary'>Save</button>"+
                "<button type='button' class='btn-close-class btn btn-danger'>Close</button>"+
            "</form>";
            $('.class-form-input-card').html(tagsEditDataResult);
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('click', '.btn-tags-form-delete', function() {
    let dataId = $(this).attr('data');
    let tagsDeleteDataResult = '';
    $.ajax({
        type: 'POST',
        url: 'tags_api/load?act=delete&uniq_tags=' + dataId,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                tagsLoadDataAll();
            } else if (data[0]['status'] == 2) {
                console.log(data[0]['message']);
            }
        }
    }).done(function() {
        $('.progress').hide();
    });
});
$(document).on('submit', '.form-edit-tags-1649471000479', function() {
    $.ajax({
        type: 'POST',
        url: 'tags_api/load?act=update',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                tagsLoadDataAll();
            } else if (data[0]['status'] == 2) {
                console.log(data[0]['message']);
            }
            $('.btn-new-data').show();
            $('.form-input-class-all').hide();
            $('.data-table-rows-all').show();
            btnact();
        }
    }).done(function() {
        $('.progress').show();
    });
    return false;
});
$(document).on('submit', '.form-tags-1649471000479', function() {
    $.ajax({
        type: 'POST',
        url: 'tags_api/load?act=insert',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            if (data[0]['status'] == 1) {
                console.log(data[0]['message']);
                tagsLoadDataAll();
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