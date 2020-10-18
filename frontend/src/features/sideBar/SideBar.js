import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../css/sideBar/sideBar.css';

const SideBar = () => {
    const lists = useSelector(state => state.lists);
    console.log(lists);

    const listsDisplay = lists.map(list => {
        return (
            <NavLink to={`/list/${list.id}`} key={list.id}>{list.list_name}</NavLink>
        )
    })

    return (
        <aside className="sideBar">
            <h1>GPL</h1>
            <section className="allUserLists">
                <h2>Lists</h2>
                {listsDisplay}
            </section>
        </aside>
    )
}

export default SideBar;