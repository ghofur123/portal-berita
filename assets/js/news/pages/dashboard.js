$(document).ready(function () {
    dashdata();
});
function dashdata(){
    $.ajax({
        type: 'POST',
        url: 'dashboard/dashboard_data_api',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            
            var pieChartValues = [{
                y: data['data']['berita'],
                exploded: true,
                indexLabel: "berita = " + data['data']['berita'],
                color: "#1f77b4"
                }, {
                y: data['data']['kategori'],
                indexLabel: "kategori = " + data['data']['kategori'],
                color: "#ff7f0e"
                }, {
                y: data['data']['fokus_berita'],
                indexLabel: "fokus berita = " + data['data']['fokus_berita'],
                color: " #ffbb78"
                }, {
                y: data['data']['user'],
                indexLabel: "user = " + data['data']['user'],
                color: "#d62728"
                }];
                renderPieChart(pieChartValues);

                function renderPieChart(values) {

                var chart = new CanvasJS.Chart("pieChart", {
                    backgroundColor: "white",
                    colorSet: "colorSet2",

                    title: {
                    text: "Database",
                    fontFamily: "Verdana",
                    fontSize: 25,
                    fontWeight: "normal",
                    },
                    animationEnabled: true,
                    data: [{
                    indexLabelFontSize: 15,
                    indexLabelFontFamily: "Monospace",
                    indexLabelFontColor: "darkgrey",
                    indexLabelLineColor: "darkgrey",
                    indexLabelPlacement: "outside",
                    type: "pie",
                    showInLegend: false,
                    toolTipContent: "<strong>#percent%</strong>",
                    dataPoints: values
                    }]
                });
                chart.render();
                }
        }
    }).done(function() {
        $('.progress').hide();
    });
}
