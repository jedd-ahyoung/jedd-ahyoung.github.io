<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
     "/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>

	<title>Jedd-Ahyoung.com</title>

<meta name="google-site-verification" content="zauak8H6wn4eGysKYBX4b4vpq1LNGTmFcfpxgyuZSdQ" />

<link rel="stylesheet" type="text/css" href="css/test2style.css" />
<link href="css/prettify.css" type="text/css" rel="stylesheet" />

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>

<script type="text/javascript" src="./portfolio/flash/GDF-22/bin-release/swfobject.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/swfobject/2.1/swfobject.js"></script>

<script type="text/javascript" src="./js/highslide/highslide-full.js"></script>
<script type="text/javascript" src="./js/highslide/highslide.config.js" charset="utf-8"></script>

<script type="text/javascript" src="./js/google-code-prettify/prettify.js"></script>

<link rel="stylesheet" type="text/css" href="./js/highslide/highslide.css" />
<!--[if lt IE 7]>
<link rel="stylesheet" type="text/css" href="./js/highslide/highslide-ie6.css" />
<![endif]-->

<script type="text/javascript">

$(document).ready(function () {
	prettyPrint();
});

</script>

</head>
<body>

<?php
	// $rootdir = getenv("DOCUMENT_ROOT");
	$rootdir = ".";

	if ($_SERVER['REQUEST_METHOD'] == "GET")
	{
		$page = $_GET["page"];
	}

?>

<div id="content">
<div id="wrapper">
	<div id="header">
		<?php include($rootdir."/include/header.php"); ?>
	</div>
	<div id="nav">
		<?php include($rootdir."/include/nav.php"); ?>
	</div>
	<div id="body">
		<div id="main">
			<?php
				if (isset($page))
					include($rootdir."/include/".$page.".php");
				else
					include($rootdir."/include/my_work.php");
			?>
		</div>
<!--
		<div id="sidebar">
			&nbsp;
		</div>
-->
	</div>
	<div id="footer">
		<?php include($rootdir."/include/footer.php"); ?>
	</div>
</div>
</div>
</body>
</html>
