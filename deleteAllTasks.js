import {tasksList} from "./tasksList.js";
const deleteAllTasks = document.createElement('button');
deleteAllTasks.textContent = '"click click" for delete all tasks';
deleteAllTasks.classList = "delete-all";
deleteAllTasks.addEventListener('dblclick', () => {
    tasksList.innerHTML = [];
    const localData = [];
    localStorage.setItem('input', JSON.stringify(localData));
});
export {deleteAllTasks}