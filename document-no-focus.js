/**
 * @file - Adds styling to the document when it doesn't have focus
 */

const className = "___bja-no-focus";
window.addEventListener("DOMContentLoaded", () => {
  const style = document.head.appendChild(document.createElement("style"));
  style.innerHTML = `
  .${className}::before {
    content: "";
    height: 4px;
    width: 100vw;
    position: fixed;
    z-index: 99999999999;

    /* Purple -> teal -> yellow -> white */
    background: linear-gradient(to bottom, rgba(96, 255, 246, .6) 25%, rgba(249, 255, 100, .6) 75%, rgba(255, 0, 0, 0) 100%);
    /* Yellow: rgba(249, 255, 100, .6) */
    /* Purple: rgba(152, 0, 253, .6) */

    top: 0;
  }

  /* .${className} {
    border: 1px solid red;
    box-sizing: border-box
  } */
  `;
});
window.setInterval(() => {
  if (!document) return;

  if (document.hasFocus()) {
    document.body?.classList.remove(className);
  } else {
    document.body?.classList.add(className);
  }
}, 50);
