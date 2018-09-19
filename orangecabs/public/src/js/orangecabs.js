var deferredPrompt;
if(!window.Promise) {
  window.Promise = Promise;
}
if ('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/sw.js') //, {scope: '/'} specify the registration of service worker
    .then (function() {
        console.log('service worker registed !');
    }).catch(function(err) {
      console.log(err);
    });
    
}
window.addEventListener('beforeinstallprompt', function(event){
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

// setTimeout(function() {
//   console.log('This is executed once the timer is done!');

// }, 3000);
// console.log('This is executed right after setTimeout()');

//promise
var promise = new Promise(function(resolve, reject){

  setTimeout(function() {
    reject({code: 500, message: 'An error occured !'})
    // resolve('This is executed once the timer is done!');
    //   console.log('This is executed once the timer is done!');
  }, 3000);
});

// you can not use xmlhttprequest in service worker only you must use fetch
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://httpbin.org/ip');
// xhr.responseType = 'json';

// xhr.onload = function() {
//   console.log(xhr.response);
// };
// xhr.onerror = function(){
//   console.log('Error!');
// };

// xhr.send();


fetch('https://httpbin.org/ip')
  .then(function(response){
    console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  }).catch(function(err){
    console.log(err);
  });

fetch('https://httpbin.org/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  mode: 'cors',
  body: JSON.stringify({message: 'Does this work?'})
})
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });



// promise.then(function(text){
// // console.log(text);
// return text;
// }, function(err) {
//   console.log(err.code, err.message);
// }).then(function(newText) {
//   console.log(newText);
// });

promise.then(function(text){
// console.log(text);
return text;
}).then(function(newText) {
  console.log(newText);
})
.catch(function(err){
  console.log(err.code, err.message);
});
console.log('This is executed right after setTimeout()');





