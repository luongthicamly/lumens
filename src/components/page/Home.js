import React from 'react';
import Banner from '../includes/Banner';
import BlockFood from '../includes/BlockFood';
import BlockPetrol from '../includes/BlockPetrol';
import BlockRental from '../includes/BlockRental';

function Home(props) {
    return (
        <>
            <Banner />
            <BlockPetrol/>
            <BlockRental/>
            <BlockFood/>
        </>
    );
}

export default Home;