import React, {useEffect, useState} from 'react';
import QuoteCreate from "./QuoteCreate"
import axios from "axios"

const QuotesPage = () => {
    const [quotes, setQuotes] = useState([])
    const [error, SetError] = useState({})

    useEffect(()=> {
        async function FetchQuotes() {
            try{
                const result = await axios.get('api/quotes');
                setQuotes({...result.data})
                console.log("result", typeof result)
            }catch (err){
                SetError({...err})
            }

        }

        FetchQuotes()
    }, [])


    return (
        <>  
            <QuoteCreate/>
            {/* <p>{JSON.stringify(error, null, 2)}</p>
            <pre>{JSON.stringify(quotes, null, 2)}</pre> */}
        </>
    );
};

export default QuotesPage;