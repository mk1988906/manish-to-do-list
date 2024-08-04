"use client"
import { useState } from "react"
import React from "react"
const page=()=>{
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>{
    //console.log("kchh bhi")
    e.preventDefault()
    // console.log(title)
    // console.log(desc)
    setmainTask([...mainTask, {title,desc}]);
    // console.log(mainTask)
    settitle("")
    setdesc("")
  }
   const deleteHandler =(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
   }
  let renderTask=<h2>No Task Available</h2>
  
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between mb-5 w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-lg font-medium">{t.desc}</h6>
         </div>
         <button
         onClick={()=>{
          //directly call ho jayega nhi krenge to
          deleteHandler()
         }}
         className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
      )
    })
  } 



  return (
    <>
    <h1 className="bg-black text-white p-5 taxt text-5xl font-bold text-center" >
      Manish's To Do List</h1>
      <form onSubmit={submitHandler}>
        <input
         type="text" className=" text-2xl: border-zinc-800 border-2 m-5 px-4 py-2"
         placeholder="Enter Title here"
         value={title}
         onChange={(e)=>{
       //   console.log(e.target.value)
         settitle(e.target.value)
         }}
         />
      
        <input
         type="text" className=" text-2xl: border-zinc-800 border-2 m-5 px-4 py-2"
         placeholder="Enter Description here"
         value={desc}
         onChange={(e)=>{
       //   console.log(e.target.value)
         setdesc(e.target.value)
         }}
         />
         <button className="bg-black text-white px-4 py-3 text-1xl font-bold rounded m-5">Add Task</button>
      </form>
      <hr></hr>
      <div className="p-8 bg-slate-500">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}
export default page