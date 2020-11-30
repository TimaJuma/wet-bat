import React, {useEffect, useState} from 'react';
import QuoteCreate from "./QuoteCreate"
import QuoteList from "./QuoteList"
import QuoteDetails from "./QuoteDetails"
import axios from "axios"

const QuotesPage = () => {
    const [quotes, setQuotes] = useState([])
    const [selectedQuoteId, setSelectedQuoteId] = useState(1)
    const [error, SetError] = useState({})
    
    useEffect(()=> {
        async function FetchQuotes() {
            try{
                const result = await axios.get('api/quotes');
                setQuotes([...result.data])
                console.log("result", typeof result.data)
            }catch (err){
                SetError({...err})
            }

        }

        FetchQuotes()
    }, [])


    return (
        <>  
            <div>
                <QuoteList quotes={quotes} setSelectedQuoteId={setSelectedQuoteId}/>
             <QuoteDetails quotes={quotes} selectedQuoteId={selectedQuoteId}/>
            </div>
            <QuoteCreate/>
            {/* <p>{JSON.stringify(error, null, 2)}</p>
            <pre>{JSON.stringify(quotes, null, 2)}</pre> */}
        </>
    );
};

export default QuotesPage;