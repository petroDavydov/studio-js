"use strict";

const refs = {
  controls: document.querySelector("#tabs-1 [data-controls]"),
  panes: document.querySelector("#tabs-1 [data-panes]"),
};

refs.controls.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "A") {
    return;
  }

  const currentActiveContolItem = refs.controls.querySelector(
    ".controls__item--active"
  );

  if (currentActiveContolItem) {
    currentActiveContolItem.classList.remove("controls__item--active");
    const paneId = currentActiveContolItem.getAttribute("href").slice(1);
    const pane = refs.panes.querySelector(`#${paneId}`);
    pane.classList.remove("pane--active");
  }

  const controlItem = event.target;
  controlItem.classList.add("controls__item--active");

  const paneId = controlItem.getAttribute("href").slice(1);
  //   console.log(paneId);

  const pane = refs.panes.querySelector(`#${paneId}`);
  //   console.log(pane);
  pane.classList.add("pane--active");
});
