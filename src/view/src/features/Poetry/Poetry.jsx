import React, {createContext, useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import Prompt from "./Prompt";
import Poem from "./Poem";
import axios from "../../axios";

export const PoetryContext = createContext([])

const fetchPoemsApi = () => {
    return new Promise(async (resolve, reject) => {
        await axios.get('/poem/all')
            .then(async res => resolve(await res.data))
            .catch(error => reject(error))
    })
}

const fetchAuthorsApi = () => {
    return new Promise(async (resolve, reject) => {
        await axios.get('/author/all')
            .then(async res => resolve(await res.data))
            .catch(error => reject(error))
    })
}

const Poetry = () => {
    const [poetry, setPoetry] = useState([]);
    const [authors, setAuthors] = useState([]);


    useEffect(() => {
        fetchPoemsApi().then(data => setPoetry(data))
        fetchAuthorsApi().then(data => setAuthors(data))
    }, [])

    return (
        <PoetryContext.Provider
            value={{
                poetry: [poetry, setPoetry],
                authors: [authors, setAuthors]
            }}
        >
            <Grid
                container
                direction='column'
                spacing={5}
            >
                <Grid item>
                    <Prompt />
                </Grid>
                { poetry?.map( (poem, i) => [
                    <Grid
                        item
                        key={i}
                    >
                        <Poem poem={poem} />
                    </Grid>
                ])}
            </Grid>
        </PoetryContext.Provider>
    );
};

export default Poetry;
