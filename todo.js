
const subButton = document.getElementById("butt");

let list = document.getElementById('list');

let loop = list.childNodes

loop.forEach((item) => item.addEventListener('click', (e) => (e.target.style.setProperty("text-decoration", "line-through"))))

loop.forEach((item) => item.addEventListener('click', (e) => setTimeout(function () {
  (e.target.style.display = "none")
}, 1000)));


subButton.addEventListener("click", function () {
  var txtInput = document.getElementById("txtVal"),
    txtVal = txtInput.value,
    listNode = document.getElementById("list"),
    liNode = document.createElement("LI");
  listNode.addEventListener('click', (e) => {
    e.target.style.setProperty("text-decoration", "line-through")
  });
  listNode.addEventListener('click', (e) => setTimeout(function () {
    (e.target.style.display = "none")
  }, 1000));
  txtNode = document.createTextNode(txtVal);


  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
  document.getElementById("txtVal").value = null;
});

const listItem = document.getElementById('li');



