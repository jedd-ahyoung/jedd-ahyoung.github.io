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

	var submitted = false;
	var endpoint = 'myurl';

	var validateAndSend = function (form) {
		var name = form['form-name'].value;
		var email = form['form-email'].value;
		var message = form['form-message'].value;
		var antispam = form['form-antispam'].value || '';

		// Validate all values.
		if (!!(antispam === '' &
			isNameValid(name, form['form-name'].parentNode) &
			isEmailValid(email, form['form-email'].parentNode) &
			isMessageValid(message, form['form-message'].parentNode)))
		{
			var params = {
				type: 'POST',
				url: endpoint,
				data: {
					name: name,
					email: email,
					message: message
				}
			};
			// if valid, send the message.
			$.ajax(params)
				.done(function (data) {
					// Reset form fields.
					form['form-name'].value = null;
					form['form-email'].value = null;
					form['form-message'].value = null;

					// Display confirmation message.
					$(form).addClass('completely-hidden');
				})
				.fail(function (data) {

				});
		}
	};

	window.validateAndSend = validateAndSend;
})();