let localData;
if(JSON.parse(localStorage.getItem('input'))) {
 localData = JSON.parse(localStorage.getItem('input'))
} else localData = [];
localStorage.setItem('input', JSON.stringify(localData));
export {localData}

