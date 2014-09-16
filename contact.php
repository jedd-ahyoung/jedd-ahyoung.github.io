<?

/* Respond to the AJAX POST. */

if ($_SERVER['REQUEST_METHOD'] == 'POST'
	&& !empty($_POST['name']))
	&& !empty($_POST['email']))
	&& !empty($_POST['message']))
{
	// If antispam passes, parse the data and send via email.
	if (empty($_POST['antispam']) {
		$to = 'jedd.ahyoung@gmail.com';
		$from = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
		$subject = str_replace(array("\r","\n"), array(" "," "), "Contact Form: Message from $_POST['name'] ($_POST['email']) ");
		$message = $_POST['message'];

		$headers = 'From: ' . $from;
	}

	echo json_encode(array('success: ', mail($to, $subject, $message, $headers));
}

?>