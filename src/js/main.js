"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// place your code below
const btnAdd = document.querySelector('.button--add--js');
const btnRemove = document.querySelector('.button--remove--js');
let spanCounter = document.querySelector('.counter');
let counter = 0;

const key = new Date().toISOString().slice(0, 10);
let isStart = false;

btnAdd.addEventListener('click', () => {
    if (localStorage.getItem(key) && !isStart) {
        spanCounter.innerHTML = localStorage.getItem(key);
        counter = localStorage.getItem(key);
        isStart = true;
    } else {
        counter++;
        spanCounter.innerHTML = counter;
        localStorage.setItem(key, counter);
    }
});

btnRemove.addEventListener('click', () => {
    if (localStorage.getItem(key) && !isStart) {
        spanCounter.innerHTML = localStorage.getItem(key);
        counter = localStorage.getItem(key);
        isStart = true;
    } else {
        if (counter > 0) {
            counter--;
            spanCounter.innerHTML = counter;
        }

        localStorage.setItem(key, counter);
    }
});