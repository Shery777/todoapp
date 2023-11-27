import React from 'react'

const Todolist = ({todos, setTodos, setEditTodo}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map(
                (item) =>{
                    if(item.id === todo.id){
                        return{...item, completed: !item.completed}
                    }
                    return item;
                }
            )
        )
    }
    const handleDelete =({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleEdit =({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      {todos.map((todo) =>
        (
            <li className='list-item' key={todo.id}>
                <input 
                type="text" 
                value={todo.title} 
                className={`list ${todo.completed ? "completed" : ""}`} 
                onChange={(event) => event.preventDefault()}                
                />
                <div>
                    <button className='.button-complete task-button' onClick={()=> handleComplete(todo)}>
                    <i class="fa-solid fa-circle-check"></i>
                    </button>
                    <button className='.button-edit task-button' onClick={()=> handleEdit(todo)}>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className='.button-delete task-button' onClick={()=> handleDelete(todo)}>
                    <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </li>
        )
      )}
    </div>
  )
}

export default Todolist
