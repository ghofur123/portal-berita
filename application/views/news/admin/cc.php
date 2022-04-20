<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="form-select-data-level-user"></div><br>
    <div class="form-select-data-level-user2"></div>
    <script src="<?php base_url(); ?>../assets/jquery/jquery-3.4.1.js"></script>
    <script>
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
                    console.log(data);
                    dataValueGlobalFunction += "<option value='"+ data[i][valueName] +"'>"+ data[i][viewName] +"</option>";
                }
                dataValueGlobalFunction += "</select>";
                $(divValueDataGlo).html(dataValueGlobalFunction);
            }
        }).done(function() {});
    }
    function selectFormInputSelected(link, nameForm, valueName, viewName, divValueDataGlo, selectedDataGlo){
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
                    console.log(data);
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
    selectFormInput('status_user_api/load?act=load', 'level', 'uniq_status_user','nama_status', '.form-select-data-level-user');
    selectFormInputSelected('status_user_api/load?act=load', 'level', 'uniq_status_user','nama_status', '.form-select-data-level-user2', '1649466217192');
    </script>
</body>
</html>