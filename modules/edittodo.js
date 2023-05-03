import TodoList from './todoclass.js';

const alltodos = document.getElementById('to-do-list');

const edittodo = () => {
    let allselected=document.querySelectorAll('.text-todo');
     for(let i=0; i<allselected.length; i++){
      allselected[i].addEventListener('click',(e)=>{
        let input=document.createElement('input');
        e.target.innerHTML=input
      })
     }


};

export default edittodo;