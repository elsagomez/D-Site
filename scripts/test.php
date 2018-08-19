<?php
echo "Hello World! <br/>";
require_once("isdk.php");
$app = new iSDK;
// Test Connnection
if ($app->cfgCon("lp379"))
{
echo "Yabba Dabba Doo! You Are Connected To Infusionsoft ...";
}
else
{
echo "Not Connected...";
}
?>