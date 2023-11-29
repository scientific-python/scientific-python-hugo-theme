// copy-code-blocks.js

// This file implements a button attached to code blocks which copies
// the code to the clipboard.

// This selector should match the PRE elements, each of which may
// itself contain the text to be copied, or may contain a CODE element
// which contains the text to be copied.
const pre_selector = "div.highlight pre";

document.querySelectorAll(pre_selector).forEach(add_button_to);

function add_button_to(element) {
  div = document.createElement("div");
  button = document.createElement("button");
  div.classList.add("copy-button");
  button.addEventListener("click", copy_content_of);
  div.append(button);
  element.prepend(div);
}

function copy_content_of(event) {
  content = this.parentElement.parentElement.textContent + "\n";
  navigator.clipboard.writeText(content).then(() => update_button(this));
}

function update_button(button, clicked_class = "clicked", timeout_ms = 2000) {
  button.classList.add(clicked_class);
  setTimeout(() => button.classList.remove(clicked_class), timeout_ms);
}

// copy-code-blocks.js ends.
