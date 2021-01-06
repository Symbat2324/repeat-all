import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import IconButton from '@material-ui/core/IconButton';
   

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input:{
        marginLeft:'13px',
    }

  }));

export default function Modal(props){
    const [val, setVal]=useState('')
    const classes = useStyles();

const saveEdit =()=>{
   props.save(props.id, val)
   props.setShowModal(false)
}


    return (
        <div 
        style={
            !props.showModal ?
            {display:'none'} :
            {
            position:'absolute',
            width:'50',
            left:'25%',
            backgroundColor:'white',
            height:'300px',
            textAlign:'center',
            top:'15%',
            boxShadow:'5px,5px,5px #000'
        }}>

        <h2>Edit</h2>
        <span onClick={()=>
          props.setShowModel(false)
        }
        >x</span>
        <h4>{props.name}</h4>

         <input className={classes.input}
         
             type="text"
             value={val}

             onChange={(event)=>{
                 setVal(event.target.value)
             }}
             
         /> 
          {/* <Button
            onClick={
                saveEdit
            }
         >Save</Button>   */}
         <IconButton>
            <SaveAltIcon  onClick={saveEdit}/>
         </IconButton> 
</div>      
 )
}
