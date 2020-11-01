import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useContext, useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../providers/AuthContext';
import { createList } from '../../util/apiCalls/postRequests';
import { add_list } from '../gameCard/listsSlice';
import { close_modal } from '../sideBar/createListSlice';

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
    }
}));

const CreateListForm = forwardRef(({ handleClose }, ref) => {
    const classes = useStyles();
    const [ listName, setListName ] = useState("");
    const [ visibility, setVisibility ] = useState("public");
    const { currentUser } = useContext(AuthContext);

    const dispatch = useDispatch();

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        const data = await createList(listName, currentUser.id, visibility);
        dispatch(add_list(data));
        dispatch(close_modal());
    }

    return (
        <form onSubmit={handleSubmit} className={`${classes.paper} createListModal`} ref={ref}>
            <h1>Create A List</h1>
            <TextField
                type="text"
                label="List Name"
                name="listName"
                value={listName}
                variant="filled"
                InputLabelProps={{
                    shrink: true
                }}
                onChange={(e) => setListName(e.target.value)}
                InputProps={{
                    style: {
                        color: 'white'
                    }
                }}
                placeholder="Enter a list name"
                required
                className={classes.input}
            />

            <TextField 
                select
                label="Visiblity"
                InputLabelProps={{
                    shrink: true
                }}
                name="visibility"
                value={visibility}
                variant="filled"
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
})

export default CreateListForm;