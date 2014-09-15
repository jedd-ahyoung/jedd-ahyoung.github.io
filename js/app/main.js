(function () {
	function isNameValid (value, node) {
		var valid = value && (typeof(value) === 'string');

		if (!valid) {
			node.classList.add('invalid');
		} else {
			node.classList.remove('invalid');
		}

		return valid;
	};

	function isEmailValid (value, node) {
		var valid = (value && typeof(value) === 'string');
		// Probably should use regex here as well, or at least modernizer.
		if (!valid) {
			node.classList.add('invalid');
		} else {
			node.classList.remove('invalid');
		}

		return valid;
	};

	function isMessageValid (value, node) {
		var valid = (value && typeof(value) === 'string');
		// Might be worth it to check length of message.
		if (!valid) {
			node.classList.add('invalid');
		} else {
			node.classList.remove('invalid');
		}

		return valid;
	};

	var validateAndSend = function (form) {
		var name = form['form-name'].value;
		var email = form['form-email'].value;
		var message = form['form-message'].value;

		// Validate all values.
		if (!!(isNameValid(name, form['form-name'].parentNode) &
			isEmailValid(email, form['form-email'].parentNode) &
			isMessageValid(message, form['form-message'].parentNode)))
		{
			// if valid, send the message.
			form['form-name'].value = null;
			form['form-email'].value = null;
			form['form-message'].value = null;
		}
	};

	window.validateAndSend = validateAndSend;
})();