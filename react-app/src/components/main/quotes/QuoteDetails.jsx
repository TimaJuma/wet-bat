import React, {useState, useEffect, useLayoutEffect} from 'react';

import {Form, Formik} from "formik"
import QuoteFormikField from "./quoteitems/QuoteFormikField"
import QuoteFormikSelect from "./quoteitems/QuoteFormikSelect"
import QuoteSendBtn from "./quoteitems/QuoteSendBtn"

import {Paper, TableContainer} from "@material-ui/core"
import ReplayIcon from "@material-ui/icons/Replay"
import IconButton from "@material-ui/core/IconButton"
import SettingsOverscan from "@material-ui/icons/SettingsOverscan"
import { makeStyles, createStyles } from "@material-ui/core/styles";

import axios from "axios"
import "./QuoteList.scss"
import "./QuoteCreate.scss"



const useStyles = makeStyles((theme) =>
  createStyles({
    tableFrame: {
        margin: "10px",
        padding : "20px",
        height: "435px",
        width: "100%",
        minWidth : "400px",
      borderRadius: "12px",
    },
  })
);


const QuoteDetails = ({quoteData, quote, setSelectedQuoteId, setUpdateQuotes}) => {
    const classes = useStyles();

    // const [selectedQuote, setSelectedQuote] = useState({})

    const handleSubmit = (values) => {
        axios.put(`/api/quote/${quote.id}`, values).then((res) => {
          console.log("response recieved");
          setUpdateQuotes(prev => prev +1 )
          setSelectedQuoteId(null)
        });
      };

    // INIT VALUES
    const dt = new Date();
    const currentDate =
    dt.getFullYear() +
    "-" +
    ("0" + (dt.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dt.getDate()).slice(-2);


    const initialValues = {
        id : quote.id,
        origin: quote.origin_id,
        destination: quote.dest_id,
        depart_date: currentDate,
        return_date: currentDate,
        passenger_id : quote.passenger_id,
        first_name: quote.first_name,
        last_name: quote.last_name,
        email: quote.email,
        phone: quote.phone,
        transport_id: quote.transport_id,
        price: quote.price/100,
        currency_id : 1
    }


    const headerText= "Quote Details"
    return (
        <div>
            <TableContainer component={Paper} className={classes.tableFrame}>
                <div className="quote_create-header">
                    <div className="quote_create-header-left ">
                        <ReplayIcon className="quote_create-header-icon" fontSize="large"/>
                        <h1 className="quote_create-header-text">{headerText}</h1>
                    </div>
                    <IconButton className="quote_create-header-btn" onClick={() => console.log("button pressed")}>
                        <SettingsOverscan className="quote_create-header-icon" fontSize="large"/>
                    </IconButton>   
                </div>
            <div>
                        <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    // validationSchema={FormDataStep2}
                    onSubmit={(values) => {
                        handleSubmit(values)
                        console.log("My values", values);
                    }}
                >
                    {({values})=> (
                            <Form autoComplete="off">
                                <div className="quote_create-body">
                                    <div className="quote_create-row">
                                        <QuoteFormikSelect name="origin" label="FROM" ranges={quoteData.citiesData}/>
                                        <QuoteFormikField name="depart_date" type="date" label="DEPART DATE" />
                                        <QuoteFormikField name="first_name" label="FIRST NAME" />
                                        <QuoteFormikField name="phone" label="PHONE" />
                                        
                                    </div>
                                    <div className="quote_create-row">
                                         <QuoteFormikSelect name="destination" label="DESTINATION" ranges={quoteData.citiesData}/>
                                        <QuoteFormikField name="return_date" type="date" label="RETURN DATE"/>
                                        <QuoteFormikField name="last_name" label="LAST NAME"/>
                                        <QuoteFormikField name="email" type ="email" label="EMAIL"/>
                                        
                                    </div>
                                    <div className="quote_create-row">
                                        <QuoteFormikSelect name="transport_id" label="TRANSPORT" ranges={quoteData.transportsData}/>
                                        <QuoteFormikField name="price" label="PRICE" type="number" />
                                        <QuoteFormikSelect name="currency_id" label="CURRENCY" ranges={quoteData.currencyData}/>
                                    </div>
                                        <QuoteSendBtn text="EDIT"/>
                                    
                                </div>
                                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                            </Form>
                    )}

                </Formik>
            </div>
            {/* </Table> */}
        </TableContainer>
        </div>
    );
};

export default QuoteDetails;