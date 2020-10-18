import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getList } from '../../util/apiCalls/getRequests';

const ListDisplay = () => {
    const { id: listId } = useParams();
    const [ list, setList ] = useState({});

    const getListCall = async () => {
        try { 
            const data = await getList(listId);
            console.log(data);
            setList(data.list);
        } catch ( error ) {
            console.log(error);
        }
    }

    useEffect(() => {
        getListCall();
    }, [listId]);

    return (
        <section className="listDisplayContainer">
            {list.name}
        </section>
    )
}

export default ListDisplay;