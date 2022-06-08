var addBtn = document.getElementById("meuBtn");

function addItemToList() {
  var listaAntiga = document.getElementById("minhaLista");
  var novoItem = document.getElementById("meuInput");
  if (novoItem.value != "") {
    listaNova =
      listaAntiga.innerHTML +
      '<li><input type="checkbox" id="cb' +
      novoItem.value.replace(/ /g, "") +
      '" onchange="riscarItem(lb' +
      novoItem.value.replace(/ /g, "") +
      ')" id="' +
      novoItem.value.replace(/ /g, "") +
      '"><label for = "cb' +
      novoItem.value.replace(/ /g, "") +
      '" id="lb' +
      novoItem.value.replace(/ /g, "") +
      '">' +
      novoItem.value +
      "</label></li>";
    listaAntiga.innerHTML = listaNova;
  }
  //console.log("novoItem:" + novoItem);
  //console.log("listaNova:" + listaNova);
  //console.log("listaAntiga:" + listaAntiga.innerHTML);
}
function riscarItem(item) {
  //console.log("item: " + item);

  //console.log("meuItem: " + item);
  //console.log("td:" + meuItem.style.textDecoration);
  if (item.style.textDecoration != "line-through") {
    item.style.textDecoration = "line-through";
  } else {
    item.style.textDecoration = "none";
  }

  // console.log("meuItem:" + meuItem);
}
addBtn.addEventListener("click", addItemToList);
