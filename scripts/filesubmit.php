<!doctype html>
<?php
    // Assign REQUEST variables using ternary operators and IF statement
 
 
if ($_GET['Id']) {
        $contactId = $_GET['Id'];
    } else {
        $contactId = ($_GET['contactId']) ? $_GET['contactId'] : '';
    }
 
 
?>

<html>
    <head>
        <title>FileBox Upload</title>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
<link type="text/css" rel="stylesheet" href="../css/scripts-style.css" media="screen,projection" />
    </head>
     <body>
    
            <div class="container wrapper">
                <div class="row">
                    <img class="logo" src="../css/images/DVM-logo.jpg" />
                </div>
                <div class="row">
                    
                    <h3>Use this form to upload customer's files</h3>
                </div>
        <div id="TAG-filebox-form forma" class="row">
            <form action="cb_upload_files.php" method="POST" enctype="multipart/form-data">
                <input type="hidden" name="contactId" value="<?php echo $contactId ?>" />
                
                    <div class="row">
                        <label for="file-upload" class="custom-file-upload">
                        <i class="glyphicon glyphicon-upload"></i> Please, select your files here
                        <input class="choose-files" id="file-upload" type="file" name="files[]" multiple />
                        </label>
                    </div>
               
                <div style="margin-top: 10px;">
                    <button type="submit" class="btn boton btn-lg">Upload</button>
                </div>
            </form>
        </div>
    </div>

    </body>
</html>

