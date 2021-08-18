"use strict";
//DOMContentLoaded


// map popup window

let itemAdded = document.querySelector(".btn-buy");
itemAdded.addEventListener("click", function(evt) 
{
  let popup = document.querySelector(".modal-item-in-cart");
  evt.preventDefault();
  popup.classList.remove("visually-hidden");
});

//-----------------------------------------------------


let btnCloseCart = document.querySelector(".btn-popup-close-cart");
btnCloseCart.addEventListener("click", function() {
  let cartWindow = document.querySelector(".modal-item-in-cart");
  cartWindow.classList.add("visually-hidden");
});