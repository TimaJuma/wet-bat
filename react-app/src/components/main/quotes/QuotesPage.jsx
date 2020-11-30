import React, {useEffect, useLayoutEffect, useState} from 'react';
import QuoteCreate from "./QuoteCreate"
import QuoteList from "./QuoteList"
import QuoteDetails from "./QuoteDetails"
import axios from "axios"

const QuotesPage = () => {
    const [quotes, setQuotes] = useState([])
    const [updateQuotes, setUpdateQuotes] = useState(0)
    const [quoteData, setQuoteData] = useState({});
    const [selectedQuoteId, setSelectedQuoteId] = useState(null)
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
    }, [updateQuotes])

    useLayoutEffect(()=> {
        async function FetchQuotes() {
            try{
                const result = await axios.get('api/quotedata');
                setQuoteData({...result.data})
            }catch (err){
                SetError({...err})
            }

        }

        FetchQuotes()
    }, [])


    const [selectedQuote, setSelectedQuote] = useState({})
    useEffect(()=> {
        const [selected] =  quotes.filter(quote => quote.id === selectedQuoteId);
        console.log("quote details quoteItself", selected)
        setSelectedQuote({...selected})
    }, [selectedQuoteId])

    return (
        <>  
            <div>
                <QuoteCreate setUpdateQuotes={setUpdateQuotes}/>
                <QuoteList quotes={quotes} setSelectedQuoteId={setSelectedQuoteId}/>
                {selectedQuoteId ? <QuoteDetails  
                quoteData={quoteData} 
                selectedQuoteId={selectedQuoteId} 
                quote={selectedQuote} 
                setSelectedQuoteId={setSelectedQuoteId} 
                setUpdateQuotes={setUpdateQuotes}/> : null}
            </div>
        </>
    );
};

export default QuotesPage;