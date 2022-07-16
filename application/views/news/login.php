<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">



<head>

    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>indonesia mengabari - login</title>



    <!-- BOOTSTRAP STYLES-->

    <link href="<?php base_url(); ?>../assets/css/bootstrap.css" rel="stylesheet" />

    <!-- FONTAWESOME STYLES-->

    <link href="<?php base_url(); ?>../assets/css/font-awesome.css" rel="stylesheet" />

    <!-- GOOGLE FONTS-->

    <link href="<?php base_url(); ?>../assets/css/style.css" rel="stylesheet" />

    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />



</head>

<body style="background-color: #E2E2E2;">

    <div class="container">

        <div class="row text-center " style="padding-top:100px;">

            <div class="col-md-12">

                <h1>indonesiamengabari.com</h1>

            </div>

        </div>

        <div class='progress'>

            <div class='progress-bar progress-bar-danger progress-bar-striped active'  role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width: 100%'>

                <span class='sr-only'>proses</span>

            </div>

        </div>

        <div class="row ">

            <div class="alert alert-danger alert-dismissable alert-information">

                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>

                <div class="message-login"></div>

            </div>

            

            <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 row-login-pages">

                

                <div class="panel-body">

                    <form role="form" id="form-login-pages">

                        <h5>Enter Details to Login</h5>

                        <br />

                        <div class="form-group input-group">

                            <span class="input-group-addon"><i class="fa fa-tag"></i></span>

                            <input type="text" name="username" class="form-control" placeholder="Your Username " />

                        </div>

                        <div class="form-group input-group">

                            <span class="input-group-addon"><i class="fa fa-lock"></i></span>

                        <input type="password" name="password" class="form-control" placeholder="Your Password" />

                        </div>

                        <button type="submit" class="btn btn-primary">Login</button>

                    </form>

                </div>



            </div>

        </div>

    </div>

    <script src="<?php base_url(); ?>../assets/jquery/jquery-3.4.1.js"></script>

    <script src="../assets/js/news/login.js"></script>

</body>

</html>