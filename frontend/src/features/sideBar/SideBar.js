import React from 'react';
import { useSelector } from 'react-redux';

const SideBar = () => {
    const lists = useSelector(state => state.lists);
    console.log(lists);
    return (
        <aside className="sideBar">

        </aside>
    )
}

export default SideBar;