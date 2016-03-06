'use strict';

import parsePhrase from './requester';
import getTemplate from './itemTemplate';

let appContainer = document.querySelector('#app .br-wrapper-container');

parsePhrase('Call a wife this evening')
    .then(function(data) {
        let response = JSON.parse(data);
        appContainer.innerHTML = getTemplate(response);
    });