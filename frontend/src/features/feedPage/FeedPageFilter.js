import React from 'react';

const FeedPageFilter = () => {
    return (
        <section className="gamesFilters">
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
                        textAlign: 'left'
                    },
                    displayEmpty: true,
                    native: true
                }}
                required
            >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Male</option>
            </TextField>
        </section>
    )
}

export default FeedPageFilter;