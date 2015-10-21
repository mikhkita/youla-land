<?
	$mrh_login = "YouLa.club";
	$mrh_pass1 = "5iqYT6K3";
	$inv_desc = "Семинар";
	$out_summ = 1000;
	$culture = "ru";
	$encoding = "utf-8";
	$crc = md5("$mrh_login:$out_summ:$mrh_pass1");
	header("Location: https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=$mrh_login&OutSum=$out_summ&InvDesc=$inv_desc&Culture=$culture&Encoding=$encoding&SignatureValue=$crc");
	// print "<html><script language=JavaScript ".
 //      "src='https://auth.robokassa.ru/Merchant/PaymentForm/FormMS.js?".
 //      "MerchantLogin=$mrh_login&OutSum=$out_summ".
 //      "&Description=$inv_desc&SignatureValue=$crc'></script></html>";
?>