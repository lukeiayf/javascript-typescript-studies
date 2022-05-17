//eventos
const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();
//arquivos e promises
const {readFile} = require('fs').promises;

const file = await readFile('./hello.txt', 'utf-8');
//express
const myModule = require('./my-module');
const express = require('express');

eventEmitter.on('lunch', () => {
  console.log('Lunch time');
})

eventEmitter.emit('lunch');0

