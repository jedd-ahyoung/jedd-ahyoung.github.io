(function () {
	function isNameValid (value) {
		return (value && typeof(value) === 'string');
	};

	function isEmailValid (value) {
		return (value && typeof(value) === 'string');
		// Probably should use regex here as well, or at least modernizer.
	};

	function isMessageValid (value) {
		return (value && typeof(value) === 'string');
		// Might be worth it to check length of message.
	};

	var validateAndSend = function (form) {
		var name = form['form-name'].value;
		var email = form['form-email'].value;
		var message = form['form-message'].value;

		// Validate all values.
		form['form-name'].parentNode.className = form['form-name'].parentNode.className + isNameValid(name) ? '' : ' invalid';
		form['form-email'].parentNode.className = form['form-email'].parentNode.className + isEmailValid(email) ? '' : ' invalid';
		form['form-message'].parentNode.className = form['form-message'].parentNode.className + isMessageValid(message) ? '' : ' invalid';
		// if valid, send the message.
	};

	window.validateAndSend = validateAndSend;
})();