let expanselist = []
function handleformsubmit(event){
    event.preventDefault();
//     console.log(event.target.expensename)
 let  expanseName =  event.target.expensename.value
 let  expanseAmount =  event.target.expenseamount.value
 let  expanseType =  event.target.typeofexpense.value
let expanse = {expanseName:expanseName,expanseAmount:expanseAmount,expanseType:expanseType}
console.log(expanse);
let arr = JSON.parse(window.localStorage.getItem('expanse')) || [];
console.log(arr);

arr.push(expanse)
window.localStorage.setItem(`expanse`, JSON.stringify(arr))

let itemsToAppend = JSON.parse(window.localStorage.getItem('expanse')) || [];
let ulTag = document.getElementById('list')

let liTag = document.createElement('li'); 

console.log(ulTag.childNodes.length)
let spanTag1 = document.createElement('span') 
spanTag1.innerText=expanse.expanseName
spanTag1.setAttribute('id','expanseName')

let spanTag2 = document.createElement('span') 
spanTag2.innerText = expanse.expanseAmount
spanTag2.setAttribute('id','expanseAmount')

let spanTag3 = document.createElement('span') 
spanTag3.innerText = expanse.expanseType
spanTag3.setAttribute('id','expanseType')


let deleteButton=document.createElement('button')
deleteButton.innerText="Delete"
deleteButton.addEventListener('click', deleteExpanse)

let editButton=document.createElement('button')
editButton.innerText="Edit"
editButton.addEventListener('click', editExpanse)

let seprator1 = document.createElement('span')
seprator1.innerText="--"
let seprator2 = document.createElement('span')
seprator2.innerText="--"

liTag.appendChild(spanTag1)
liTag.appendChild(seprator1)
liTag.appendChild(spanTag2)
liTag.appendChild(seprator2)
liTag.appendChild(spanTag3)
liTag.appendChild(deleteButton)
liTag.appendChild(editButton)
ulTag.appendChild(liTag)
// itemsToAppend.map((item)=>{let liTag = document.createElement('li'); liTag.innerText='Hiiiiiiiii'; ulTag.appendChild(liTag)})
}

function deleteExpanse (event){
    console.log(event.target.parentElement)
    let liToremove=event.target.parentElement
    liToremove.remove()

}
function editExpanse(event){
let editToli=event.target.parentElement
let expanseName =editToli.querySelector('#expanseName').innerText
let expanseType =editToli.querySelector('#expanseType').innerText
let expanseAmout =editToli.querySelector('#expanseAmount').innerText


let myForm = document.getElementById('expense_traker')
let  expanseNameInput =  myForm.expensename
let  expanseAmountInput =  myForm.expenseamount
let  expanseTypeInput =  myForm.typeofexpense
console.log(expanseName);

 expanseAmountInput.value =expanseAmout
 expanseNameInput.value = expanseName
 expanseTypeInput.value = expanseType

}
