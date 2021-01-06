import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import List from './Components/List'
import PostAddIcon from '@material-ui/icons/PostAdd';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';






const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
save:{
  position:'absolute',
  height:'35px',
  margin:'20px',
  marginTop:'18px'
},
  textfield: {
    marginLeft:'500px',
  }
}));

export default function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [value, setVal] = useState('')
  

  const updateTodo = allTodos =>{
    setData(allTodos)
  }
  const updateLocalstorage = todoList =>{
    localStorage.setItem('todos', JSON.stringify(todoList))
  }
  const classes = useStyles();

  const addTodo=(event)=>{
    event.preventDefault()
  

 

    let todo = {
      // id:data.length+1,
      id: data.length ? data [data.length-1].id +1 : 1,
      todo:value,
      status:false
    }


    let arr = [...data, todo]
    updateTodo(arr)
    updateLocalstorage(arr)
    setVal('')
  }

  const doneTodo=(id)=>{
    let todos = data
    let todo = todos.findIndex(item=>item.id === id)
    todos[todo].status=true
    updateTodo(todos)
    updateLocalstorage(todos)

  }

  const deleteTodo=(id)=>{
    let todos = data.filter(todos=>todos.id !==id)
    let todo = todos.findIndex(item=>item.id === id)
    updateTodo(todos)
    updateLocalstorage(todos)
  } 
 
  const save = (id, val)=>{
    let todos = data
    let todo = data.findIndex(item=>item.id === id)
    todos[todo].todo=val
    updateTodo(todos)
    updateLocalstorage(todos)
  }

  return (
    <div>
    <Header/>
     <form  onSubmit={addTodo}>
     <TextField id="standard-basic" label="Text" className={classes.textfield}  onChange={(event)=>{
        setVal(event.target.value)
      }}/>
      <button className={classes.save}> <PostAddIcon/></button>
     
     </form>

     <List
       data={data}
       done={doneTodo}
       delete={deleteTodo}
       save={save}
     />
    </div>
  )
}

