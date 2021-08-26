"use strict";

const refs = {
  controls: document.querySelector("#tabs-1 [data-controls]"),
  panes: document.querySelector("#tabs-1 [data-panes]"),
};

refs.controls.addEventListener("click", onControlsClick);

function onControlsClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "A") {
    return;
  }

  const currentActiveContolItem = refs.controls.querySelector(
    ".controls__item--active"
  );

  if (currentActiveContolItem) {
    currentActiveContolItem.classList.remove("controls__item--active");
    const paneId = getPanedId(currentActiveContolItem);
    const pane = getPanedId(paneId);
    pane.classList.remove("pane--active");
  }

  const controlItem = event.target;
  controlItem.classList.add("controls__item--active");

  const paneId = getPanedId(controlItem);
  //   console.log(paneId);

  const pane = getPanedId(paneId);
  //   console.log(pane);
  pane.classList.add("pane--active");
}
function getPanedId(control) {
  return control.getAttribute("href").slice(1);
}

function getPanedId(id) {
  return refs.panes.querySelector(`#${id}`);
}
