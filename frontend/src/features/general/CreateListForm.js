import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '25%',
      backgroundColor: "#24426f",
      padding: theme.spacing(4, 4, 4),
      top: '27.5%',
      left: '37.5%',
      borderRadius: '25px',
      outline: 'none',
      height: '35vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
}));

const CreateListForm = () => {
    const classes = useStyles();
    const [ listName, setListName ] = useState("");
    const [ visibility, setVisibility ] = useState("public");

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log({listName, visibility});
    }

    return (
        <form onSubmit={handleSubmit} className={`${classes.paper} createListModal`}>
            <h1>Create A List</h1>
            <TextField
                type="text"
                label="List Name"
                name="listName"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                InputProps={{
                    style: {
                        color: 'white'
                    }
                }}
                required
            />

            <TextField 
                select
                label="Visiblity"
                InputLabelProps={{
                    shrink: true
                }}
                name="visibility"
                value={visibility}
                onChange={(e) => setVisibility(e.target.value)}
                SelectProps={{
                    style: {
                        color: 'white',
                        textAlign: 'left'
                    },
                    native: true
                }}
                required
            >
                <option value="public">Public</option>
                <option value="private">Private</option>
            </TextField>

            <Button variant="contained" type="submit" color="primary">Create List</Button>
        </form>
    )
}

export default CreateListForm;