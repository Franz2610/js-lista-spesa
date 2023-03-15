const listaSpesa = ["pane", "riso", "pasta", "carne", "uova"];

let i = 0;
let listItem = "";
while (listaSpesa[i]) {
  listItem += listaSpesa[i] + "<br>";
  i++;
}

document.querySelector('ul').innerHTML = listItem;