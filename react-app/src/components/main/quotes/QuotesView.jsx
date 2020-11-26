import React, {useEffect, useState} from 'react';
import axios from "axios"

const QuotesView = () => {
    const [quotes, setQuotes] = useState({})
    const [error, SetError] = useState({})

    useEffect(()=> {
        async function FetchQuotes() {
            try{
                const result = await axios.get('api/quotes');
                setQuotes({...result})
                console.log("result", typeof result)
            }catch (err){
                SetError({...err})
            }

        }

        FetchQuotes()
    }, [])


    return (
        <>
            <p>{JSON.stringify(error, null, 2)}</p>
            <pre>{JSON.stringify(quotes, null, 2)}</pre>
        </>
    );
};

export default QuotesView;