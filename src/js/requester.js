'use strict';

import { API_KEY } from './apiKey';
const URL_TO_API = 'https://maciejgorny-reminderdrop-v1.p.mashape.com';

export default function parseReminder(phrase) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `${URL_TO_API}/${phrase}/GMT+03:00`, true);
    xhr.setRequestHeader('X-Mashape-Key', API_KEY);
    xhr.setRequestHeader('Accept', 'application/json');


    return new Promise(function(resolve, reject) {
        xhr.onreadystatechange = function(event) {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                     resolve(xhr.responseText);
                } else {
                    reject(xhr.statusText);
                }
            }
        };

        xhr.onerror = function(error) {
            console.log('onError', error);
            reject(error);
        };

        xhr.send(null);
    });

}