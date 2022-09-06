import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState,useEffect } from 'react'
import React from 'react'
import axios from "axios"

const todoDataUrl = "http://localhost:3100/todos";

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

return (
<div>
  
  <h1>TODO進捗管理</h1>

<textarea />
<button>+TODOを追加</button>
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
