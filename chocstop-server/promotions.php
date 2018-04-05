<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//PDO is a extension which  defines a lightweight, consistent interface for accessing databases in PHP.  
$db=new PDO('mysql:dbname=chocstop;host=localhost:3306;','root','');  
//here prepare the query for analyzing, prepared statements use less resources and thus run faster  
$row=$db->prepare('select * from promotions where active = "1"');  
  
$row->execute();//execute the query  
$json_data=array();//create the array  
foreach($row as $rec)//foreach loop  
{  
$json_array['promoId']=$rec['ID'];  
    $json_array['promoTitle']=$rec['title'];  
    $json_array['promoDesc']=$rec['description'];  
    $json_array['promoSdate']=$rec['s_date']; 
    $json_array['promoEdate']=$rec['e_date']; 
    $json_array['promoImage']=$rec['imag']; 
    $json_array['promoActive']=$rec['active'];  
//here pushing the values in to an array  
    array_push($json_data,$json_array);  
  
}  
  
$json_data ='{"records":'.json_encode($json_data).'}';
//built in PHP function to encode the data in to JSON format  
echo ($json_data);  
  
?>  