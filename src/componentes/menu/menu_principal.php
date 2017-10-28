<?php
header("access-control-allow-origin: *");

$sql = "
      SELECT *
        FROM menu_principal
    ORDER BY directorio desc, href, nombre
";

$mysqli = new mysqli('localhost','root','123123123','universal');
    $myArray = array();
    if ($result = $mysqli->query($sql)) {
        $tempArray = array();
        while($row = $result->fetch_object()) {
                $tempArray = $row;
                array_push($myArray, $tempArray);
            }
        echo json_encode($myArray);
    }

    $result->close();
    $mysqli->close();
?>
