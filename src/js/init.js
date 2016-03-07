'use strict';

import parsePhrase from './requester';
import getTemplate from './itemTemplate';
import * as utils from './utils';

let appContainer = document.querySelector('#app');
let itemContaier = document.querySelector('#itemsContainer');
let searchInput  = document.querySelector('#searchInput');

/**
 * Displays items in the browser 
 */
function displayItem(data) {
    let response = utils.parseResponse(data);
    itemContaier.innerHTML += getTemplate(response);
    return response;
}

/**
 * Initializes app
 */
function initialize() {
    let items = utils.getFromLocalstorage();
    items.forEach(displayItem);
}

searchInput.addEventListener('keypress', event => {
    if (event.which == '13') {
        parsePhrase(event.target.value)
            .then(displayItem)
            .then(function(response) {
                utils.setToLocalstorage(response);
            })
            .then(function() {
                event.target.value = '';
            });
    }
});

initialize();