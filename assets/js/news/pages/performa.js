$(document).ready(function () {
    selectStatus();
});
function selectStatus(){
    let selectUser = '';
    $.ajax({
        type: 'POST',
        url: 'Performa_user_api/status_user',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            selectUser += "<option value=''>Pilih Status User</option>";
            for(let i = 0; i < data['status_users'].length; i++){
                selectUser += "<option value='" + data['status_users'][i]['uniq_status_user'] + "'>" + data['status_users'][i]['nama_status'] + "</option>";
            }
            $('.select-status-cls').html(selectUser);
        }
    }).done(function() {
        $('.progress').hide();
    });
}
var dataPointsView = [];
var dataPointsAct = [];
$(document).on('change', '.select-status-cls', function(){
    dataPointsView.length = 0;
    dataPointsAct.length = 0;


    $('.aktifitas-class').hide();
    $('.select-users-cls').html('');
    let uniqData = $(this).val();
    let selectUserT = '';
    $.ajax({
        type: 'POST',
        url: 'Performa_user_api/select_user/'+ uniqData,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            selectUserT += "<option value=''>Pilih User</option>";
            for(let i = 0; i < data['users'].length; i++){
                selectUserT += "<option value='" + data['users'][i]['uniq_user'] + "'>" + data['users'][i]['nama_user'] + "</option>";
            }
            $('.select-users-cls').html(selectUserT);
        }
    }).done(function() {
        $('.progress').hide();
    });
});

$(document).on('change', '.select-users-cls', function(){
    let uniqUser = $(this).val();
    dataPointsView.length = 0;
    dataPointsAct.length = 0;
    $.ajax({
        type: 'POST',
        url: 'Performa_user_api/actifitas_berita/'+ uniqUser,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            dataPointsAct.push(
                {
                    label: "Aktitas Uploads",
                    y: Number(data['data']['aktitas_uploads'])
                }, 
                {
                    label: "kontributor",
                    y: Number(data['data']['kontributor'])
                },
                {
                    label: "editor",
                    y: Number(data['data']['editor'])
                }
            );
            $("#chartContainer22").CanvasJSChart(optionsAct);
            if(data['data']['status_view'] == "True"){
                for (var i = 0; i < data['data']['actifitas_view'].length; i++) {
                    dataPointsView.push(
                        {
                            label: data['data']['actifitas_view'][i]['title'],
                            y: Number(data['data']['actifitas_view'][i]['jumlah'])
                        }
                    );
                }
                $("#chartViewUsers").CanvasJSChart(optionsView);
            } else {}
        }
    }).done(function() {
        $('.progress').hide();
    });
    $('.aktifitas-class').show();
});

var optionsAct = {
    animationEnabled: true,
    title: {
        text: "Aktifitas Berita"
    },
    axisY: {
        title: "Aktifitas Berita",
        suffix: ""
    },
    axisX: {
        title: "Komponen"
    },
    data: [{
        type: "column",
        yValueFormatString: "#,##0.0#"%"",
        dataPoints: dataPointsAct
    }]
};


var optionsView = {
    animationEnabled: true,
    title: {
        text: "View Berita"
    },
    axisY: {
        title: "Jumlah View",
        suffix: ""
    },
    axisX: {
        title: "Judul"
    },
    data: [{
        type: "column",
        yValueFormatString: "#,##0.0#"%"",
        dataPoints: dataPointsView
    }]
};