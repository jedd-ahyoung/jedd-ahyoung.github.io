<?

/* Respond to the AJAX POST. */

if ($_SERVER['REQUEST_METHOD'] == 'POST'
	&& !empty($_POST['name'])
	&& !empty($_POST['email'])
	&& !empty($_POST['message']))
{
	// If antispam passes, parse the data and send via email.
	if (empty($_POST['antispam'])) {
		// Send the message to my email address.
		$to = 'jedd.ahyoung@gmail.com';
		$from = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
		$subject = str_replace(array("\r","\n"), array(" "," "), 'Contact Form: Message from ' . $_POST['name'] . ' (' . $_POST['email'] . ') ');
		$message = $_POST['message'];

		$headers = 'From: ' . 'confirmation@jedd-ahyoung.com';

		// Send the confirmation email to the recipient's email address.
		$confirm_to = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
		$confirm_from = filter_var('confirmation@jedd-ahyoung.com', FILTER_VALIDATE_EMAIL);
		$confirm_subject = 'Thanks for reaching out, ' . $_POST['name'] . '!';
		$confirm_message = 'Nothing here yet.';

		$confirm_headers = 'From: ' . $confirm_from;

		mail($confirm_to, $confirm_subject, $confirm_message, $confirm_headers);

		header('Content-Type: application/json');
		echo json_encode(array('success' => mail($to, $subject, $message, $headers)));
	}
}

?>
