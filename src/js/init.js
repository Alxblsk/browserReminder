'use strict';

import parsePhrase from './requester';
import getTemplate from './itemTemplate';

let appContainer = document.querySelector('#app');
let itemContaier = document.querySelector('#itemsContainer');
let searchInput  = document.querySelector('#searchInput');

searchInput.addEventListener('keypress', event => {
    if (event.which == '13') {
        parsePhrase(event.target.value)
            .then(function(data) {
            let response = JSON.parse(data);
            itemContaier.innerHTML += getTemplate(response);
            
            event.target.value = '';
        });
    }
})