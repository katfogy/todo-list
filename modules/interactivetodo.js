import TodoList from './todoclass.js';


const interacttodo=()=>{
    let checklist=document.querySelectorAll('.mycheck');
   for(let i=0; i<checklist.length;i+=1){
    checklist[i].addEventListener('click',(e)=>{
        let id=e.target.id
        if(e.target.checked){
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
           let search=todos.find(item=>item.index.toString() ===id)
           if(search!==undefined){
            search.completed=true;
            search.index=id
           }
           localStorage.setItem('todos', JSON.stringify(todos));
           
        }else{
                let todos = JSON.parse(localStorage.getItem('todos')) || [];
               let search=todos.find(item=>item.index.toString() ===id)
               if(search!==undefined){
                search.completed=false;
                search.index=id
                
               }
               localStorage.setItem('todos', JSON.stringify(todos));
            }
            
    })
   }
}

export default interacttodo;