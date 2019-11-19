<html>
<head>
</head>
<body>
<?php
      
include 'db_connection.php';
$conn = OpenCon();

$sql = "SELECT name,address,postal,phone,email,vehicle,model,year FROM details";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		if($row["name"] != "")
		{
        echo "name: " . $row["name"]. " - address: " . $row["address"]. " postal: " . $row["postal"]. " phone: " . $row["phone"]. " email: " . $row["email"]. "vehicle: " . $row["vehicle"]. " model: " . $row["model"]. " year: " . $row["year"].  "<br>";
		echo "<a href=\"http://www.jdpower.com/cars/". $row["vehicle"]. "/". $row["model"]. "/". $row["year"]. "\">http://www.jdpower.com/cars/" . $row["vehicle"]. "/". $row["model"]. "/". $row["year"]. "</a><br>";
		}
    }
} else {
    echo "0 results";
}
echo "<br><br><a href=\"index.html\"> Home </a>";
CloseCon($conn);
?>


</body>
</html>