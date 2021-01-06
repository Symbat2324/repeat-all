import React, { useState } from 'react'
import Model from '../Model'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    iconbutton:{
        color:'white',
        width:'50px',
     }
}));
export default function List(props) {
    const [todo, setTodo] = useState('')
    const [id, setId] = useState()
    const [showModal, setShowModal] = useState(false)
    const classes = useStyles();

    const edit = (todo, id) => {
        setTodo(todo)
        setShowModal(true)
        setId(id)
    }
    return (
        <div>
            {props.data ?
                props.data.map(el => {
                    return (
                        <div key={el.id} style={el.status ?
                            { background: 'green' } :
                            { background: '#E18854' }}>
                            <h3>{el.todo}</h3>
                            {
                                el.status ? '' :
                                <IconButton className={classes.iconbutton}>
                                <CheckBoxIcon onClick={() => props.done(el.id)}/>
                                </IconButton>        
                            }
                            
                            <IconButton className={classes.iconbutton} aria-label="delete" onClick={() => props.delete(el.id)}>
                                <DeleteIcon />
                            </IconButton>

                            
                            <IconButton>
                                <EditAttributesIcon className={classes.iconbutton} onClick={() => edit(el.todo, el.id)}/>
                                </IconButton>  
                        </div>
                    )
                })
                : null

            }
            <Model
                name={todo}
                showModal={showModal}
                setShowModal={setShowModal}
                id={id}
                save={props.save}
            />
        </div>
    )
}
