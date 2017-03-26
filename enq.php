<?php
require('connect.php');
if($_POST['Send'])
{
	$username=$_POST['name'];
	$contact=$_POST['contact'];
	$email=$_POST['emailid'];
	$companyname=$_POST['companyname'];
	$address=$_POST['address'];
	$pincode=$_POST['pincode'];
	$productname=$_POST['productname'];
	$quantity=$_POST['productquantity'];
	$description=$_POST['query'];
		
	
		$write=mysqli_query($connect,"INSERT INTO table3 VALUES ('$username','$contact','$email','$companyname','$address','$pincode','$productname','$quantity','$description')")or die("<br>sql can't be connected");
		
			
		
			echo "<br>Successfully Submitted!!";
}
		else
			echo "Wrong!";
	

?>
	