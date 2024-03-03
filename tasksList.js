import {localData} from "./localData.js";
import {deleteAllTasks} from "./deleteAllTasks.js";
const tasksList = document.createElement('ul');
tasksList.className = "list";
const header = document.createElement('h1');
header.textContent = 'Tasks lisT';
header.classList = "header";
const text = document.createElement('p');
fillTaskList();
export default function fillTaskList() {
if(localData.length !== 0) {
    for(let el of localData) {
        const task = document.createElement('li');
        task.textContent = el;
        tasksList.append(task);
        text.textContent = '"click click" task for edit';
        text.style = "font-size: 1.1rem; color: green";
    }
} else {
    text.textContent = 'your tasks list is empty';
    text.style = "font-size: 1.1rem; color: red";
}
}
document.body.prepend(header, text, tasksList, deleteAllTasks);
export {text, tasksList}