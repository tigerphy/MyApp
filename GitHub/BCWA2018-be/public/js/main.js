'use strict';

const frm = document.querySelector('#mediaform');
const img = document.querySelector('#image');
const aud = document.querySelector('#aud');
const vid = document.querySelector('#vid');

const sendForm = (evt) => {
  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };

  fetch('/upload', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    if (json.mimeType.includes('image')) {
      img.src = json.url;
    } else if (json.mimeType.includes('audio')) {
      aud.src = json.url;
    } else {
      vid.src = json.url;
    }
  });
};

frm.addEventListener('submit', sendForm);
