"use strict";

window.addEventListener('DOMContentLoaded', () => {
    let result = document.querySelector('#result');
    let pageLoader = document.querySelector('#button');

    pageLoader.addEventListener('click', () => {
        let promise = fetch('pages/ajax-01.html');
        
        promise
            .then(response => {return response.text()})
            .then(text => {result.innerHTML = text});
    });

    /* Задача 3.2 для практики */
    const insertText = document.querySelectorAll('.zadacha_3-2');   

    insertText.forEach(but => {
        but.addEventListener('click', () => {
            let i = +but.textContent;
            let promise = fetch(`pages/zadacha_3-2/${i}.html`);
        
            promise
                .then(response => {return response.text()})
                .then(text => {document.querySelector('.loadText').innerHTML = text});
        });
    });

    /* Задача 3.5 для практики */
    // const showTime = document.querySelector('#checkTime');

    // showTime.addEventListener('click', () => {
    //     let time = new Date();
    //     document.querySelector('.timeSaver').innerHTML += `<li>${time}</li>`
    // });

    /* Задача 3.6 для практики */
    const showTime = document.querySelector('#checkTime');
        
    setTimeout(function run(){
        let time = new Date();
        document.querySelector('.timeSaver').innerHTML += `<li>${time}</li>`;
        setTimeout(run, 2000);
    }, 2000)

    /* Просто моя задача */
    document.querySelector('.viewTime').scrollTop = document.querySelector('.viewTime').scrollHeight;
});