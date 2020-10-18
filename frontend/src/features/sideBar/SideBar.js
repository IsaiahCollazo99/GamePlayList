import { Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../css/sideBar/sideBar.css';
import { open_modal } from './createListSlice';

const SideBar = () => {
    const lists = useSelector(state => state.lists);
    const dispatch = useDispatch();

    const listsDisplay = lists.map(list => {
        return (
            <NavLink to={`/list/${list.id}`} key={list.id}>{list.list_name}</NavLink>
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