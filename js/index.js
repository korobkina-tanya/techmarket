"use strict";
//DOMContentLoaded

function onServiceItemClicked() {
  let seletedClass = 'services-selector-item-selected';
  let selectedItem = document.querySelector('.' + seletedClass);

  if (selectedItem.id !== this.id) {
    // hide old selected item
    selectedItem.classList.remove(seletedClass);
    
    // hide service-info
    let selectedServiceInfoId = selectedItem.id.replace('item-', '');
    document.querySelector('#' + selectedServiceInfoId).classList.toggle('visually-hidden');

    // add selected-class to clicked item
    this.classList.toggle(seletedClass);
    let newServiceInfoId = this.id.replace('item-', '');
    document.querySelector('#' + newServiceInfoId).classList.toggle('visually-hidden');
  }
};

// init service items
let elems = document.querySelectorAll('.services-selector-item');
for (let cur_elem of elems) {
  cur_elem.onclick = onServiceItemClicked;
};


//-----------------------------------------------------
// login popup window

let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", function(evt) {
  let popup = document.querySelector(".modal-login");
  popup.classList.remove("visually-hidden");
});

//-----------------------------------------------------

let btnClose = document.querySelector(".btn-popup-close");
btnClose.addEventListener("click", function() {
  let loginWindow = document.querySelector(".modal-login");
  loginWindow.classList.add("visually-hidden");
});


//-----------------------------------------------------
// map popup window

let contacts = document.querySelector(".btn-contacts");
contacts.addEventListener("click", function(evt) 
{
  let popup = document.querySelector(".modal-map");
  popup.classList.remove("visually-hidden");
});


//-----------------------------------------------------

let btnCloseMap = document.querySelector(".btn-popup-close-map");
btnCloseMap.addEventListener("click", function() {
  let mapWindow = document.querySelector(".modal-map");
  mapWindow.classList.add("visually-hidden");
});

//-----------------------------------------------------

/*
let popup = document.querySelector(".modal-login");

let form = document.querySelector(".form");
let login = document.querySelector("[name=login]");
let password = document.querySelector("[name=password]");


  let isStorageSupport = true;
  let storage = "";

  try {
    storage = localStorage.getItem("login");
  }

  catch (err) {
    isStorageSupport = false;
  }



  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }

  else {
  if (isStorageSupport) {
    localStorage.setItem("login", login.value);
}
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popul.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});


// */

//-----------------------------------------------------

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    //type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});