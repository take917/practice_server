import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState,useEffect } from 'react'
import React from 'react'
import axios from "axios"
import {TodoTitle} from "../components/TodoTitle"
import { TodoList } from '../components/TodoList'

const todoDataUrl = "http://localhost:3100/todos";

// TodoTitleコンポーネント
// const TodoTitle =({title,as})=>{
// if (as==="h1") return <h1>{title}</h1> 
// if(as==="h2") return <h2>{title}</h2>
// return <p>{title}</p>
// }

// TodoItemコンポーネント
// const TodoItem =({todo})=>{
//   return(
//     <li>
//       {todo.content}
//       <button className=" border-indigo-600 p-2 m-1  bg-blue-300 text-gray-50">
//         {todo.done?"未完了リストへ":"完了リストへ"}

//       </button>
//     <button className=" border-indigo-600 p-2 m-1  bg-blue-300 text-gray-50">削除</button>

//     </li>
  
//   )
// }

// TodoListコンポーネント



export default function Home() {
const [todoList,setTodoList] = useState([])

useEffect(()=>{
  const fetchData = async ()=>{
    const response = await axios.get(todoDataUrl);

    setTodoList(response.data);

  }
  fetchData()
},[])

console.log("TODOリスト:",todoList)


const inCompletedList = todoList.filter((todo)=>{
  return !todo.done;
})

console.log("未完了TODOリスト",inCompletedList);

const completedList = todoList.filter((todo)=>{
  return todo.done
})

console.log("完了リスト",completedList)

return (
<div>
  <TodoTitle title="Todo進捗管理" as="h1"/>
  

<textarea className='border border-indigo-600'/>
<button>+TODOを追加</button>

  <TodoList title="未完了TODOリスト" as="h2"/>

<ul>
  {inCompletedList.map((todo)=>(
    <li key={todo.id}>
      {todo.content}
      <button className=" border-indigo-600 p-2 m-1  bg-blue-300 text-gray-50">
        {todo.done?"未完了リストへ":"完了リストへ"}

      </button>
    <button className=" border-indigo-600 p-2 m-1  bg-blue-300 text-gray-50">削除</button>

    </li>

 ) )}
</ul>


<h2>完了TODOリスト</h2>
<ul className=''>
  {completedList.map((todo)=>(
  <li key={todo.id} className='p-2 m-1'>
{todo.content}

<button className=" border-indigo-600 p-2 m-1  bg-blue-300 text-gray-50">
  {todo.done?"未完了リストへ":"完了リストへ"}
</button>
<button className='border-indigo-600 p-2 m-1  bg-blue-300 text-gray-50' >削除</button>
  </li>
  ))}
</ul>


<h2>TODOリスト</h2>
<ul>
  {todoList.map((todo)=>(
    <li key={todo.id}>
      {todo.content}({todo.done?"完了":"未完了"})
    </li>
  ))}
</ul>
</div>
  )
}
