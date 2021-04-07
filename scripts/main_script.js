"use strict";

window.addEventListener('DOMContentLoaded', () => {
    let result = document.querySelector('#result');
    let pageLoader = document.querySelector('#button');

    button.addEventListener('click', () => {
        let promise = fetch('pages/ajax-01.html');
        
        promise
            .then(response => {return response.text()})
            .then(text => {result.innerHTML = text});
    });
});