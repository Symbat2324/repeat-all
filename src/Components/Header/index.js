import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    style:{
      textAlign: "center",
      background: '#C4C2E1',
      color: '#4C212C',
      fontSize: '20px',
      paddingTop: '3%',
      paddingBottom: '0%',
      marginBottom: '5%'
    }
  }));
export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.style} >
            <h1>TODO LIST ON REACT</h1>
        </div>
    )
}

