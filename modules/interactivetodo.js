import TodoList from './todoclass.js';


const interacttodo=()=>{
    let checklist=document.querySelectorAll('.mycheck');
   for(let i=0; i<checklist.length;i+=1){
    checklist[i].addEventListener('change',(e)=>{
        let id=e.target.id
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        let search=todos.find(item=>item.index.toString() ===id)
        if(e.target.checked){
           if(search!==undefined){
            search.completed=!search.completed;
            search.index=id
           }
               document.location.reload();
            }
            
            localStorage.setItem('todos', JSON.stringify(todos));
          
    //         const refresh = new TodoList();
    // refresh.todosList();
    // document.location.reload();
            
    })
   
   }
 
}

export default interacttodo;