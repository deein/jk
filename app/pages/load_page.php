<?php
	//Dynamic Loading
	$d = "pages/";
				
	if(isset($_GET['do'])){
		$p	= strtolower($_GET['do']);
		if(preg_match("/[a-z0-9\-]+$/",$p) && file_exists($d.$p.".php")){
			include $d.$p.".php";	
		}else{
			include $d."404.php";	
		}
	}
	if($_SERVER['REQUEST_URI'] == '/'){
		include $d."duel-of-champions.php";	
	}
?>