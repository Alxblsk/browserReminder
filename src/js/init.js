'use strict';

import parsePhrase from './requester';

let appContainer = document.querySelector('#app');
const template = `$`; 

parsePhrase('Call a wife this evening')
    .then(function(data) {
        let response = JSON.parse(data);
        appContainer.innerHTML = `<span class="calendar-item">${response.hour}:${response.minute}</span><span>${response.body}</span>`;
    });