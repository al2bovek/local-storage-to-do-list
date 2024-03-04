const deleteAllTasks = document.createElement('button');
deleteAllTasks.textContent = '"click click" for delete all tasks';
deleteAllTasks.classList = "delete-all";
deleteAllTasks.addEventListener('dblclick', () => {
    const localData = [];
    localStorage.setItem('input', JSON.stringify(localData));
    location.reload();
});
export {deleteAllTasks}