export default {
	action(e) {
		let pSize = e.target.querySelector('.listItem--text');
		let message = e.target.querySelector('.listItem--message');

		e.target.classList.add('action');
		pSize.style.display = 'none';
		message.style.display = 'block';
		e.target.blur();

		setTimeout(() => {
			pSize.style.display = 'block';
			message.style.display = 'none';
		}, 2000);
	}
}
