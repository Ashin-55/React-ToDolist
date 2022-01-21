import './App.css';
import { useState } from 'react'

function App() {

  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event) => setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now() , text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => setToDos(toDos.filter(obj2 => {
                    console.log(obj2)
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                      console.log(obj2.status)
                    }
                    return obj2
                  }))} value={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>{
                    setToDos(
                    toDos.filter(obj3=>{
                      let temp;
                      if(obj3.id!==obj.id){
                       temp=obj3
                      }
                      return temp
                    }))
                  }} className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        <div className='activplans'>Active Plans</div>
        {
          toDos.map((obj)=>{
            if(obj.status){
              return(
                <ul className='activplans list'>
                  <li>{obj.text}</li>
                </ul>
               
              )
              return null
            }
          })
        }
      </div>
    </div>
  );
}

export default App;
