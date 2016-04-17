'use strict';

import parsePhrase from './requester';
import getTemplate from './itemTemplate';
import * as utils from './utils';

let appContainer = document.querySelector('#app');
let itemContaier = document.querySelector('#itemsContainer');
let searchInput  = document.querySelector('#searchInput');


/**
 * Initializes app
 */
function initialize() {
    let items = utils.getFromLocalstorage();
    let response = utils.sortResponse(items);
    
    displayAllItems(response);
}

/**
 * Iterate trhu each item
 */
function displayAllItems(allItems) {
    itemContaier.innerHTML = '';
    allItems.forEach(displayItem);
}

/**
 * Displays items in the browser 
 */
function displayItem(response) {
    itemContaier.innerHTML += getTemplate(response);
    return response;
}

searchInput.addEventListener('keypress', event => {
    if (event.which == '13') {
        parsePhrase(event.target.value)
            .then(utils.parseResponse)
            .then(utils.setToLocalstorage)
            .then(utils.sortResponse)
            .then(displayAllItems)
            .then(function() {
                event.target.value = '';
            });
    }
});

initialize();