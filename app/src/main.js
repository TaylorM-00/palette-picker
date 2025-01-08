import "./style.css";
import { v4 as generateUUID } from "uuid";

// Ordinarily, you'd add these elements to index.html
const uuidButton = document.createElement("button");
const uuidText = document.createElement("p");
document.body.append(uuidButton, uuidText);

uuidButton.textContent = "Generate UUID";

uuidButton.addEventListener("click", () => {
  const newUUID = generateUUID();
  uuidText.textContent = `your new uuid is: ${newUUID}`;
});

const choose = document.getElementById("option2").defaultChecked;

//
const handleToDoFormSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const newTodo = {
    title: form.todoTitle.value,
  };
  addToDoToList(newTodo);
  form.reset();
};
handleToDoFormSubmit();
