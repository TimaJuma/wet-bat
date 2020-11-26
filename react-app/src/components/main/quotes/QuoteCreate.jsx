import React, {useEffect, useLayoutEffect, useState} from 'react';
import FastForwardIcon from "@material-ui/icons/FastForwardOutlined"
import {Form, Formik} from "formik"
import IconButton from "@material-ui/core/IconButton"
import OpenWith from "@material-ui/icons/OpenWith"
import QuoteFormikField from "./quoteitems/QuoteFormikField"
import "./QuoteCreate.scss"

import axios from "axios"

const QuoteCreate = (quote) => {
    const [quoteData, setQuoteData] = useState({});
    const [error, SetError] = useState({})

    useLayoutEffect(()=> {
        async function FetchQuotes() {
            try{
                const result = await axios.get('api/quotedata');
                setQuoteData({...result.data})
                console.log("quoteData", result.data)
            }catch (err){
                SetError({...err})
            }

        }

        FetchQuotes()
    }, [])

    // INIT VALUES
    const initialValues = {
        passenger_id : null,
        city_id : null
    }

    return (
        <div className="quote_create-container">
            <div className="quote_create-header">
                <FastForwardIcon className="quote_create-header-icon" fontSize="large"/>
                <h1 className="quote_create-header-text">Quick Quote</h1>
                <IconButton className="quote_create-header-btn" onClick={() => console.log("button pressed")}>
                    <OpenWith fontSize="large"/>
                </IconButton>             
            </div>


            <Formik
        initialValues={initialValues}
        // validationSchema={FormDataStep2}
        onSubmit={(values) => {
          console.log("My values", values);
        }}
      >
        {({values})=> (
                <Form>
                    <div className="quote_create-body">
                        <div>
                            <QuoteFormikField name="passenger_id" label="PEOPLE" ranges={quoteData.passengerData}/>
                            <QuoteFormikField name="city_id" label="CITIES" ranges={quoteData.citiesData}/>
                        </div>
                    </div>
                </Form>
        )}

      </Formik>

        <pre>{JSON.stringify(quoteData, null, 2)}</pre>
        </div>
    );
};

export default QuoteCreate;