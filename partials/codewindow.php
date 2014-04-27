<html>
<head>

<title></title>

<link href="../css/prettify.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../js/google-code-prettify/prettify.js"></script>

</head>
<body onload="prettyPrint()">
<div class="codewrapper">
<code>
<pre class="prettyprint linenums">
<?php

	if (!isset($rootdir))
		$rootdir = $_SERVER['DOCUMENT_ROOT'];

	if (isset($_GET['filepath']))
		include($rootdir.$_GET['filepath']);
	else
		include($rootdir."/include/default.php");
?>
</pre>
</code>
</div>
</body>
</html>
