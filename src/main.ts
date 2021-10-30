function formatRelative(date: Date): string | null {
	const diff = (Date.now() - date.getTime()) / 1000;
	if (diff < 60) {
		return 'Just a few seconds ago';
	}
	else if (diff < 3600) {
		return 'Within the last hour';
	}
	else if (diff < (60 * 60 * 24)) {
		return 'In the last day';
	}
	else if (diff < (60 * 60 * 48)) {
		return 'Yesterday';
	}
	else if (diff < (60 * 60 * (24 * 6))) {
		return [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		][date.getDay()];
	}
	return null;
}

function formatDate(date: Date): string {
	const month = [
		'January',
		'Febrary',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	][date.getMonth()];

	return `${month} ${date.getDate()}, ${date.getFullYear()}`;
}

function convertToFriendlyTimestamp(element: Element) {
	const text = element.textContent;
	console.log(text);
	const date = new Date(text.trim());
	element.textContent = formatRelative(date) ?? formatDate(date);
}

function main() {
	const timestamps = document.querySelectorAll('.timestamp');
	timestamps.forEach(convertToFriendlyTimestamp);
}

window.addEventListener('DOMContentLoaded', main);
