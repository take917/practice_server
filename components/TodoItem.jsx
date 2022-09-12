export const TodoItem =({todo})=>{
    return(
      <li>
        {todo.content}
        <button className=" border-indigo-600 p-2 m-1  bg-blue-300 text-gray-50">
          {todo.done?"未完了リストへ":"完了リストへ"}
  
        </button>
      <button className=" border-indigo-600 p-2 m-1  bg-blue-300 text-gray-50">削除</button>
  
      </li>
    
    )
  }