"use strict";

window.addEventListener("DOMContentLoaded", () => {
  let searchDialog = document.querySelector(".search-dialog");

  // Do nothing here if search is not enabled.
  if (!searchDialog) return;

  new PagefindUI({
    element: ".search-dialog",
    autofocus: true,
    resetStyles: false,
    showSubResults: true,
  });

  let showSearch = () => searchDialog.showModal();
  let hideSearch = () => searchDialog.close();

  let toggleSearch = () => {
    if (!searchDialog.open) {
      showSearch();
    } else {
      hideSearch();
    }
  };

  let isClickOutside = (elem, clickEvt) => {
    const elemDims = elem.getBoundingClientRect();
    return (
      clickEvt.clientX < elemDims.left ||
      clickEvt.clientX > elemDims.right ||
      clickEvt.clientY < elemDims.top ||
      clickEvt.clientY > elemDims.bottom
    );
  };

  // Close the search dialog if user clicks outside of it when it is open.
  // This feels like functionality that should really be natively supported
  // by the dialog element already.
  // https://blog.webdevsimplified.com/2023-04/html-dialog/
  searchDialog.addEventListener("click", (evt) => {
    if (searchDialog.open && isClickOutside(searchDialog, evt)) {
      hideSearch();
    }
  });

  window.addEventListener("keydown", (evt) => {
    if (evt.key === "k" && (evt.ctrlKey || evt.metaKey)) {
      toggleSearch();
    }
  });


  document
    .querySelector(".search-button")
    .addEventListener("click", showSearch);
});
