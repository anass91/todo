const inBtn = document.getElementById('input');
const addBtn = document.querySelector('.btn');
const newItem = document.querySelector('.new-list');

class item{
    constructor(itemName){
        this.creatDiv(itemName)
    }

    creatDiv(itemName){
        let input = document.createElement('input');
        input.classList.add('new-input');
        input.value = itemName;
        input.disabled = true;
        input.type = 'text';


        let itemBox = document.createElement('div');
        itemBox.classList.add('new-div');

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;
        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = `<ion-icon class ="icon-2" name="close-circle-outline"></ion-icon>`;
        removeBtn.classList.add('remove-btn');
        itemBox.appendChild(input);
        itemBox.appendChild(editBtn);
        itemBox.appendChild(removeBtn);

        newItem.appendChild(itemBox);

        editBtn.addEventListener('click', () =>{
            input.disabled = !true;
    
        })
        removeBtn.addEventListener('click', () =>{
            newItem.removeChild(itemBox);
        })

    }
}
function cheked(){
    if(inBtn.value !== ''){
       new item(inBtn.value);
       inBtn.value = '';
    }else{
        alert('Please ')
    }
    
}

addBtn.addEventListener('click', cheked)