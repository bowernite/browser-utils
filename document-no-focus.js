/**
 * @file - Adds styling to the document when it doesn't have focus
 */

const className = "___bja-no-focus";
window.addEventListener("DOMContentLoaded", () => {
  const style = document.head.appendChild(document.createElement("style"));
  style.innerHTML = `
  .${className}::before {
    content: "";
    height: 7px;
    width: 100vw;
    position: fixed;
    z-index: 99999999999;
    background: linear-gradient(to bottom, red, rgba(255, 0, 0, 0));
    top: 0;
  }
  /* .${className} {
    border: 1px solid red;
    box-sizing: border-box
  } */
  `;
});
window.setInterval(() => {
  if (document.hasFocus()) {
    document.body.classList.remove(className);
  } else {
    document.body?.classList.add(className);
  }
}, 50);