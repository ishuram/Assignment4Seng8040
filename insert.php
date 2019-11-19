<html>
<head>
</head>
<body>
<?php
      
include 'db_connection.php';
$conn = OpenCon();
echo "Connected Successfully";

$n=$_GET["name"];
$a=$_GET["address"];
$p=$_GET["postal"];
$ph=$_GET["phone"];
$e=$_GET["email"];
$v=$_GET["vehicle"];
$m=$_GET["model"];
$y=$_GET["year"];




$sql = "INSERT INTO details (name, address, postal, phone, email, vehicle, model, year)
VALUES ('$n','$a','$p','$ph','$e','$v','$m','$y')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
CloseCon($conn);
?>


</body>
</html>