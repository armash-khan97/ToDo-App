import React, { useState } from 'react';
import ToDoLists from './Components/todoList/ToDoLists';
import './App.css';

const App = () => {

const [inputList, setInputList] = useState("");
const[Items, setItems] =useState([])
 
const itemEvent =(e) => {
  setInputList(e.target.value);
} 

const listOfItem = () => {
  setItems((oldItems) =>{
    return [...oldItems, inputList ];
  })
  setInputList("");
};

 const deleteItem = (id) =>{
        console.log("deleted")
        setItems((oldItems) =>{
          return oldItems.filter((arrElem, index)=>{
              return index !== id;
          })
        })
    }
  return (
    <div className='main'>
    <div className='center'>
      <br/>
      <h1>ToDo list</h1>
      <br/>
      <input type='text' placeholder='Add a Items'
       value={inputList}
       onChange={itemEvent}/>
      <button onClick={listOfItem}>+</button>

      <ol>

        { Items.map((itemval, index) => {
          return <ToDoLists 
          key={index} 
          id={index}
          text={itemval}
           onSelect={deleteItem}
          />;
       })}
      </ol>

    </div>
      
    </div>
  )
}

export default App;

