import React from 'react';
import ListComponent from './ListComponent'

const todolist = [
    {
        done: false,
        text: 'Learn react' 
    },
    {
        done: true,
        text: 'Learn algorithm'
    }
]

function addToDo(text, status){
    todolist.push({done: status, text: text})
}

function updateToDo(index, status){
    todolist[index].done = status;
    console.log(`Actualie el todo ${todolist[index].text} ahora el estado es ${todolist[index].done}`)
}


const ListContainer = () => {
    return <ListComponent list={todolist} ChangeItemStatus={updateToDo}/>
}


export default ListContainer;