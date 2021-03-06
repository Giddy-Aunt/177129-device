'use strict';

(function(){

  var feedbackLink = document.querySelector('.btn--feedback');
  var feedbackPopup = document.querySelector('.popup-feedback');
  var feedbackClose = feedbackPopup.querySelector('.close-btn');

  var feedbackForm = document.querySelector('.feedback-form');
  var feedbackName = document.getElementById('feedback-name');
  var feedbackEmail = document.getElementById('feedback-email');
  var feedbackMessage = document.getElementById('feedback-text');
  var storageFeedbackName = localStorage.getItem("userName");
  var storageFeedbackEmail = localStorage.getItem("userEmail");


  feedbackLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('show-feedback');

    if (storageFeedbackName) {
      feedbackName.value = storageFeedbackName;
      feedbackEmail.focus();
    } else {
      feedbackName.focus();
    }
  });

  feedbackClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove('show-feedback');
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains('show-feedback')) {
        feedbackPopup.classList.remove('show-feedback');
      }
    }
  });

  feedbackForm.addEventListener('submit', function(evt){
    if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
      evt.preventDefault();
      if (!feedbackName.value) {
        feedbackName.classList.add('feedback-form__input--invalid');
      }
      if (!feedbackEmail.value) {
        feedbackEmail.classList.add('feedback-form__input--invalid');
      }
      if (!feedbackMessage.value) {
        feedbackMessage.classList.add('feedback-form__input--invalid');
      }
    } else {
      localStorage.setItem("userName", feedbackName.value);
    }
  });

  feedbackName.addEventListener('input', function(evt){
    if (feedbackName.classList.contains('feedback-form__input--invalid')) {
      feedbackName.classList.remove('feedback-form__input--invalid')
    }
  });

  feedbackEmail.addEventListener('input', function(evt){
    if (feedbackEmail.classList.contains('feedback-form__input--invalid')) {
      feedbackEmail.classList.remove('feedback-form__input--invalid')
    }
  });

  feedbackMessage.addEventListener('input', function(evt){
    if (feedbackMessage.classList.contains('feedback-form__input--invalid')) {
      feedbackMessage.classList.remove('feedback-form__input--invalid')
    }
  });


  var mapLink = document.querySelector('.map-link');
  var mapPopup = document.querySelector('.popup-map');
  var mapClose = mapPopup.querySelector('.close-btn');

  mapLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.add('show-map');
  });

  mapClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove('show-map');
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('show-map')) {
        mapPopup.classList.remove('show-map');
      }
    }
  });

})();

