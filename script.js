function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const codeIcon = document.querySelector("#code-icon");

  // substituir a imagem
  if (html.classList.contains("light")) {
    codeIcon.style.filter = "none";
  } else {
    codeIcon.style.filter = "invert(100%)";
  }
}
