const socket = io.connect();

const render = data => {
	const html = data
		.map(message => {
			return `
				<div id='chat-message-container'>
					<strong>${message.author}</strong>:
					<em>${message.text}</em>
				</div>`;
		})
		.join(' ');
	document.getElementById('chat-messages').innerHTML = html;
};

const addMessage = () => {
	const message = {
		author: document.getElementById('username').value,
		text: document.getElementById('chat-message').value
	};
	socket.emit('new-message', message);
	return false;
};

socket.on('messages', data => render(data));
