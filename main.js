const canvas = document.querySelector("#canvas");

const rect = canvas.parentNode.getBoundingClientRect();
canvas.width = rect.width;
canvas.height = rect.height;
