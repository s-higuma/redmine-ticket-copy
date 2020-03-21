const func = () => {
    const ticketNumber = document.getElementsByTagName('h2')[0].textContent.split(' ')[1];
    const ticketName = document.getElementsByClassName('subject')[0].children[0].children[0].textContent;
    const listener = (e) => {
        e.clipboardData.setData('text/plain', ticketNumber + ' ' + ticketName);
        e.preventDefault();
        document.removeEventListener('copy', listener);
    };
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    let m = document.getElementById('copiedMessage');
    m.className = 'after-copy';
};

let ticketTitleArea = document.createElement('div');

let title = document.getElementsByTagName('h2')[0];
title.className = 'ticket-title-area';
ticketTitleArea.appendChild(title);

let copyIconArea = document.createElement('div');
copyIconArea.className = 'ticket-title-area';
ticketTitleArea.appendChild(copyIconArea);

let copyIcon = document.createElement('img');
copyIcon.src = 'https://icongr.am/clarity/copy-to-clipboard.svg';
copyIcon.addEventListener('click', func, false);
copyIcon.className = 'copy-icon-area';
copyIconArea.appendChild(copyIcon);

let messageArea = document.createElement('span');
messageArea.className = 'copy-icon-area';
ticketTitleArea.appendChild(messageArea);
let message = document.createElement('p');
message.id = 'copiedMessage';
message.appendChild(document.createTextNode('copied!!'));
messageArea.appendChild(message);

document.getElementById('content').firstElementChild.insertAdjacentElement('afterend', ticketTitleArea);
