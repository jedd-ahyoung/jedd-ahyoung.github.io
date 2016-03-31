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
		var request = new XMLHttpRequest();
		var data = {
			name: name,
			_replyto: email,
			_gotcha: antispam,
			message: message
		};

		var formData = Object.keys(data)
			.map(function (key) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			})
			.join('&')
			.replace(/%20/g, '+');

		// Validate all values.
		if (!!(isNameValid(name, form['form-name'].parentNode, form['form-name']) &
			isEmailValid(email, form['form-email'].parentNode, form['form-email']) &
			isMessageValid(message, form['form-message'].parentNode, form['form-message'])))
		{
			document.getElementById('submit').setAttribute('disabled', true);

			// if valid, send the message.
			request.open('POST', endpoint, true);
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			request.setRequestHeader('Accept', 'application/json; charset=utf-8');

			request.onload = function (data) {
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
			};

			request.onerror = function (data) {
				var formerror = document.getElementById('form-error');
				formerror.classList.remove('completely-hidden');
				formerror.setAttribute('aria-hidden', false);
				document.getElementById('submit').setAttribute('disabled', false);
			};

			request.send(formData);
			return;
		}

		snabbt(document.getElementById('contact-form'), 'attention', {
			position: [50, 0, 0],
			springConstant: 2.4,
			springDeceleration: 0.9,
		});
	};

	window.validateAndSend = validateAndSend;

	document.addEventListener("DOMContentLoaded", function (event) {
		snabbt(document.querySelectorAll('.logo'), {
			fromOpacity: 0,
			opacity: .7,
			duration: 2000
		});

		snabbt(document.querySelectorAll('.jedd'), {
			fromPosition: [0, 0, 0],
			position: [0, 0, 0],
			fromOpacity: 0,
			opacity: 1,
			duration: 1000,
			easing: 'easeOut'
		});

		snabbt(document.querySelectorAll('.ahyoung'), {
			fromPosition: [70, 0, 0],
			position: [0, 0, 0],
			fromOpacity: 0,
			opacity: 1,
			duration: 1000,
			easing: 'easeOut'
		});

		snabbt(document.getElementById('content-wrapper'), {
			fromPosition: [0, 50, 0],
			position: [0, 0, 0],
			fromOpacity: 0,
			opacity: 1,
			duration: 1000,
			easing: 'easeOut'
		});
	});
})();
