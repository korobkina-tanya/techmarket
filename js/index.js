"use strict";
//DOMContentLoaded

function onServiceItemClicked() {
  let seletedClass = 'services-selector-item-selected';
  let selectedItem = document.querySelector('.' + seletedClass);

  if (selectedItem.id !== this.id) {
    // hide old selected item
    selectedItem.classList.toggle(seletedClass);
    
    // hide service-info
    let selectedServiceInfoId = selectedItem.id.replace('item-', '');
    document.querySelector('#' + selectedServiceInfoId).classList.toggle('visually-hidden');

    // add selected-class to clicked item
    this.classList.toggle(seletedClass);
    let newServiceInfoId = this.id.replace('item-', '');
    document.querySelector('#' + newServiceInfoId).classList.toggle('visually-hidden');
  }
};

// init
let elems = document.querySelectorAll('.services-selector-item');
for (let cur_elem of elems) {
  cur_elem.onclick = onServiceItemClicked;
}
