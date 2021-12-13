const ul = document.getElementById("listContainer");

ul.addEventListener("click", function (ev) {
  ev.target.classList.toggle("checked");
});

function newItem() {
  const item = document.getElementById("input").value;
  console.log("inside item"); //check to see if input field works
  console.log(item);

  const ul = document.getElementById("listContainer");
  const li = document.createElement("li");

  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);

  document.getElementById("input").value = "";
  console.log("Task Added!");
  li.ondblclick = removeItem;
  if (item === "") alert("You didnt write anything!");
}

document.body.onkeyup = function (e) {
  if (e.keyCode === 13) {
    console.log("You hit Enter!"); //Checking to see if enter-key function works.
    newItem();
  }
};

const addbtn = document.getElementById("button");

addbtn.onclick = newItem;

function removeItem(e) {
  e.target.remove();
  console.log("Task Removed!");
}
