import {localData} from "./localData.js";
import {deleteAllTasks} from "./deleteAllTasks.js";
const tasksList = document.createElement('ul');
tasksList.className = "list";
const header = document.createElement('h1');
header.textContent = 'Tasks lisT';
header.classList = "header";
const text = document.createElement('p');
export default (function fillTaskList() {
    if(localData.length !== 0) {
        const toStart = [...localData].reverse();
        for(let el of toStart) {
            const task = document.createElement('li');
            task.textContent = el;
            tasksList.append(task);
            text.textContent = '"click click" task for edit';
            text.style = "color: green";
        }
    } else {
        text.textContent = 'your tasks list is empty';
        text.style = "color: gray";
    }
})();
document.body.prepend(header, text, tasksList, deleteAllTasks);
export {text, tasksList}