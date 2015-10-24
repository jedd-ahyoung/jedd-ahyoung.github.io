(function () {
	function isNameValid (value, node, input) {
		var valid = value && (typeof(value) === 'string');

		if (!valid) {
			node.classList.add('invalid');
			input.setAttribute('aria-invalid', true);
		} else {
			node.classList.remove('invalid');
			input.setAttribute('aria-invalid', false);
		}

		return valid;
	};

	function isEmailValid (value, node, input) {
		var valid = (value && typeof(value) === 'string');
		// Probably should use regex here as well, or at least modernizer.
		if (!valid) {
			node.classList.add('invalid');
			input.setAttribute('aria-invalid', true);
		} else {
			node.classList.remove('invalid');
			input.setAttribute('aria-invalid', false);
		}

		return valid;
	};

	function isMessageValid (value, node, input) {
		var valid = (value && typeof(value) === 'string');
		// Might be worth it to check length of message.
		if (!valid) {
			node.classList.add('invalid');
			input.setAttribute('aria-invalid', true);
		} else {
			node.classList.remove('invalid');
			input.setAttribute('aria-invalid', false);
		}

		return valid;
	};

	var submitted = false;
	var endpoint = '//formspree.io/jedd.ahyoung@gmail.com';

	var validateAndSend = function (form) {
		var name = form['form-name'].value;
		var email = form['form-email'].value;
		var message = form['form-message'].value;
		var antispam = form['form-antispam'].value;

		// Validate all values.
		if (!!(isNameValid(name, form['form-name'].parentNode, form['form-name']) &
			isEmailValid(email, form['form-email'].parentNode, form['form-email']) &
			isMessageValid(message, form['form-message'].parentNode, form['form-message'])))
		{
			var params = {
				method: 'POST',
				url: endpoint,
				data: {
					name: name,
					_replyto: email,
					_gotcha: antispam,
					message: message
				},
				datatype: 'json',
				headers: {
					Accept : "application/json; charset=utf-8",
				}
			};
			// if valid, send the message.
			document.getElementById('submit').setAttribute('disabled', true);

			$.ajax(params)
				.done(function (data) {
					var formerror = document.getElementById('form-error');
					// Reset form fields.
					form['form-name'].value = null;
					form['form-email'].value = null;
					form['form-message'].value = null;
					form['form-antispam'].value = null;

					// Display confirmation message.
					form.classList.add('completely-hidden');
					form.setAttribute('aria-hidden', true);
					formerror.classList.add('completely-hidden');
					formerror.setAttribute('aria-hidden', true);

					// Populate success message.
					var submitted = document.getElementById('form-submitted');
					document.querySelector('strong[data-attr="name"]').textContent = name;
					submitted.classList.remove('completely-hidden');
				})
				.fail(function (data) {
					var formerror = document.getElementById('form-error');
					formerror.classList.remove('completely-hidden');
					formerror.setAttribute('aria-hidden', false);
					document.getElementById('submit').setAttribute('disabled', false);
				});
		}
	};

	window.validateAndSend = validateAndSend;
})();
