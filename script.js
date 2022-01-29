window.onload = main;

function main() {
  console.clear();

  const elTextGrid = document.getElementById("text-grid");

  function splittingLite(el) {
    let characters = el.innerText
      .split("")
      .map((char, i) => `<span class="char">${char}</span>`);
    el.innerHTML = characters.join("");
    el.style.setProperty("--total", characters.length);
    return el.querySelectorAll(".char");
  }

  splittingLite(elTextGrid);

  document.getElementById("my-svg").style.rotate = "50deg";
}
