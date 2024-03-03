import fillTaskList from "./tasksList.js";
import {text, tasksList} from "./tasksList.js";
const inputDialog = document.createElement('dialog');
const inputOpen = document.createElement('button');
inputOpen.classList = "input";
inputOpen.textContent = 'create new task';
inputOpen.addEventListener('click', () =>{inputDialog.open = true; {once: true}});
const inputData = document.createElement('input');
inputData.placeholder = "input task";
const inputAdd = document.createElement('button');
inputAdd.textContent = 'save and exit';
inputAdd.addEventListener('click', () => {
    if(inputData.value) {
        const task = document.createElement('li');
        text.textContent = '"click click" task for edit';
        text.style = "font-size: 1.1rem; color: green";
        task.textContent = inputData.value;
        tasksList.append(task);
        const localData = JSON.parse(localStorage.getItem('input'));
        localData.push(inputData.value);
        localStorage.setItem('input', JSON.stringify(localData));
        inputData.value = '';
        inputDialog.open = false;
        location.reload();
    } else {text.textContent = '"click click" task for edit';}
});
const inputClear = document.createElement('button');
inputClear.textContent = 'clear';
inputClear.addEventListener('click', () => {inputData.value = ''; text.textContent = 'click task for edit';});
const inputClose = document.createElement('button');
inputClose.addEventListener('click', () => { inputDialog.open = false; inputData.value = ''; text.textContent = '"click click" task for edit'});
inputClose.textContent = 'exit';
inputDialog.append(inputData, inputAdd, inputClear, inputClose);
document.body.prepend(inputDialog, inputOpen);
export {inputDialog}
