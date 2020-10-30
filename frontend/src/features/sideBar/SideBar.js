import { Button } from '@material-ui/core';
import { AddCircleOutline, Close } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../css/sideBar/sideBar.css';
import { open_modal } from './createListSlice';

const SideBar = () => {
    const lists = useSelector(state => state.lists);
    const dispatch = useDispatch();

    const deleteList = async ( e ) => {
        let list_id = e.target.getAttribute('value');
        while(!list_id) {
            list_id = e.target.parentNode.getAttribute('value');
        }
        console.log(list_id);
    }

    const listsDisplay = lists.map(list => {
        return (
            <NavLink to={`/list/${list.id}`} key={list.id} className="listLink">
                {list.list_name}
                <Close className="deleteList" onClick={deleteList} value={list.id} />
            </NavLink>
        )
    })

    const openModal = () => {
        dispatch(open_modal());
    }

    return (
        <aside className="sideBar">
            <h1>GPL</h1>
            <section className="allUserLists">
                <h2>Lists</h2>
                <Button 
                    variant="contained" 
                    color="secondary"
                    startIcon={<AddCircleOutline />}
                    onClick={openModal}
                >
                    Create a New List
                </Button>
                
                {listsDisplay}
            </section>
        </aside>
    )
}

export default SideBar;