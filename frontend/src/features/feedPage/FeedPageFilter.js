import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from '../../util/apiCalls/getRequests';
import { set_filters } from './feedPageSlice';

const FeedPageFilter = () => {
    const feedPage = useSelector(state => state.feedPage);
    const [ systems, setSystems ] = useState([]);
    const [ genres, setGenres ] = useState([]);
    const [ publishers, setPublishers ] = useState([]);
    const { system, genre, publisher } = feedPage.filters;
    const dispatch = useDispatch();

    const handleChange = ( e ) => {
        const newFilters = {...feedPage.filters};
        newFilters[e.target.name] = e.target.value;
        dispatch(set_filters(newFilters));
    }

    const getFilterLists = async () => {
        try { 
            const data = await getFilters();
            setSystems(data.systems);
            setGenres(data.genres);
            setPublishers(data.publishers);
        } catch ( error ) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFilterLists();
    }, [])

    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    const systemOptions = systems.map(system => {
        return (
            <option value={system.slug} key={system.id}>{system.name}</option>
        )
    })

    const genreOptions = genres.map(genre => {
        return (
            <option value={genre.slug} key={genre.id}>{genre.name}</option>
        )
    })

    const publisherOptions = publishers.map(publisher => {
        return (
            <option value={publisher.slug} key={publisher.id}>{publisher.name}</option>
        )
    })

    return (
        <section className="gamesFilters">
            <h2>GAME FILTERS</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    select
                    label="System"
                    InputLabelProps={{
                        shrink: true
                    }}
                    name="system"
                    value={system}
                    onChange={handleChange}
                    SelectProps={{
                        style: {
                            color: 'white',
                            textAlign: 'left',
                        },
                        displayEmpty: true,
                        native: true
                    }}
                    variant="outlined"
                    fullWidth
                >
                    <option value="" disabled>Select a system</option>
                    {systemOptions}
                </TextField>

                <TextField
                    select
                    label="Genre"
                    InputLabelProps={{
                        shrink: true
                    }}
                    name="genre"
                    value={genre}
                    onChange={handleChange}
                    SelectProps={{
                        style: {
                            color: 'white',
                            textAlign: 'left',
                        },
                        displayEmpty: true,
                        native: true
                    }}
                    variant="outlined"
                    fullWidth
                >
                    <option value="" disabled>Select a genre</option>
                    {genreOptions}
                </TextField>

                <TextField
                    select
                    label="Publisher"
                    InputLabelProps={{
                        shrink: true
                    }}
                    name="publisher"
                    value={publisher}
                    onChange={handleChange}
                    SelectProps={{
                        style: {
                            color: 'white',
                            textAlign: 'left',
                        },
                        displayEmpty: true,
                        native: true
                    }}
                    variant="outlined"
                    fullWidth
                >
                    <option value="" disabled>Select a publisher</option>
                    {publisherOptions}
                </TextField>

                <Button 
                    type="submit"
                    variant="contained"
                    color="secondary"
                >
                    Filter Games
                </Button>
            </form>
        </section>
    )
}

export default FeedPageFilter;