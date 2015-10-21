<?
	$mrh_login = "YouLa.club";
	$mrh_pass1 = "qw123456";
	$inv_desc = "Семинар";
	$out_summ = 1000;
	$culture = "ru";
	$encoding = "utf-8";
	$crc = md5("$mrh_login:$out_summ:$mrh_pass1");
	header("Location: https://auth.robokassa.ru/Merchant/Index.aspx?MrchLogin=$mrh_login&OutSum=$out_summ&Desc=$inv_desc&Culture=$culture&Encoding=$encoding&SignatureValue=$crc&IsTest=1");

?>