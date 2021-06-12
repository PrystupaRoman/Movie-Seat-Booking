'use strict';

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('const');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const tickerPrice = movieSelect.value;
console.log(tickerPrice);