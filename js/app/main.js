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
	var endpoint = '//formspree.io/jedd.ahyoung@gmail.com';

	var validateAndSend = function (form) {
		var name = form['form-name'].value;
		var email = form['form-email'].value;
		var message = form['form-message'].value;
		var antispam = form['form-antispam'].value;

		// Validate all values.
		if (!!(isNameValid(name, form['form-name'].parentNode) &
			isEmailValid(email, form['form-email'].parentNode) &
			isMessageValid(message, form['form-message'].parentNode)))
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
				// contentType: 'application/json; charset=UTF-8',
				headers: {          
					Accept : "application/json; charset=utf-8",         
				}
			};
			// if valid, send the message.
			$('button[type="submit"]', form).prop('disabled', true);

			$.ajax(params)
				.done(function (data) {
					// Reset form fields.
					console.log("DATA:", data);
					form['form-name'].value = null;
					form['form-email'].value = null;
					form['form-message'].value = null;
					form['form-antispam'].value = null;

					// Display confirmation message.
					$(form).addClass('completely-hidden');
					$('#form-error').addClass('completely-hidden');

					// Populate success message.
					var submitted = $('#form-submitted');
					$('strong[data-attr="name"]', submitted).text(name);
					submitted.removeClass('completely-hidden');
				})
				.fail(function (data) {
					$('#form-error').removeClass('completely-hidden');
					$('button[type="submit"]', form).prop('disabled', false);
				});
		}
	};

	window.validateAndSend = validateAndSend;
})();
