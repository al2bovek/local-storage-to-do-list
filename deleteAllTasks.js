import {text} from "./tasksList.js";
const deleteAllTasks = document.createElement('button');
deleteAllTasks.textContent = '"click click" for delete all tasks';
deleteAllTasks.classList = "delete-all";
deleteAllTasks.addEventListener('dblclick', () => {
    const localData = [];
    localStorage.setItem('input', JSON.stringify(localData));
    text.textContent = 'all tasks are deleted';
    text.style = "color: red";
    setInterval(() => location.reload(), 1000);
});
export {deleteAllTasks}