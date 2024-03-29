import {tasksList} from "./tasksList.js";
import {localData} from "./localData.js";
let goal, count;
const editDialog = document.createElement('dialog');
tasksList.addEventListener('dblclick', ev => {
    editDialog.open = true;
    editInput.value = ev.target.textContent;
    goal = ev.target;
    count = localData.indexOf(goal.textContent);
    editInput.focus();
});
const editInput = document.createElement('input');
const saveEdit = document.createElement('button');
saveEdit.textContent = 'save and exit';
saveEdit.addEventListener('click', () => {if(editInput.value) {editDialog.open = false; goal.textContent = editInput.value; const localData = JSON.parse(localStorage.getItem('input')).fill(editInput.value, count, count + 1); localStorage.setItem('input', JSON.stringify(localData)); location.reload()} else editInput.focus()});
editInput.addEventListener('keypress', ev => {if(ev.key === "Enter") saveEdit.click()});
const clearEdit = document.createElement('button');
clearEdit.textContent = 'clear';
clearEdit.addEventListener('click', () => {editInput.value = ''; editInput.placeholder = 'input task'; editInput.focus()});
const closeEdit = document.createElement('button');
closeEdit.textContent = 'close';
closeEdit.addEventListener('click', () => editDialog.open = false);
const deleteTask = document.createElement('button');
deleteTask.textContent = 'delete';
deleteTask.addEventListener('click', () => {editDialog.open = false; goal.textContent = 'task was deleted'; goal.style = "color: red"; const localData = JSON.parse(localStorage.getItem('input')); localData.splice(count, 1); localStorage.setItem('input', JSON.stringify(localData)); setInterval(() => location.reload(), 1000)});
editDialog.append(deleteTask, editInput, saveEdit, clearEdit, closeEdit);
export {editDialog}
