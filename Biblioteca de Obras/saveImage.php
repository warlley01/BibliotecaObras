<?php

$targetPath = 'imagens/' . basename($_FILES["imageInput"]["name"]);
move_uploaded_file($_FILES["imageInput"]["tmp_name"], $targetPath);