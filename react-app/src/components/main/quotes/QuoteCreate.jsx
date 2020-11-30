import React, {useLayoutEffect, useState} from 'react';
import {Form, Formik} from "formik"
import QuoteSendBtn from "./quoteitems/QuoteSendBtn"
import FastForwardIcon from "@material-ui/icons/FastForward"
import IconButton from "@material-ui/core/IconButton"
import OpenWith from "@material-ui/icons/OpenWith"
import QuoteFormikField from "./quoteitems/QuoteFormikField"
import QuoteFormikSelect from "./quoteitems/QuoteFormikSelect"
import "./QuoteCreate.scss"

import axios from "axios"

import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core"
import ReplayIcon from "@material-ui/icons/Replay"
import { makeStyles, createStyles } from "@material-ui/core/styles";

// import "./QuoteList.scss"

const useStyles = makeStyles((theme) =>
  createStyles({
    tableFrame: {
        marginTop: "10px",
        padding : "20px",
        width: "100%",
        minWidth : "400px",
      borderRadius: "12px",
    },
    iconStyle: {
        height: "20px"
    }
  })
);



const QuoteCreate = (quote) => {
    const classes = useStyles();
    const [quoteData, setQuoteData] = useState({});
    const [error, SetError] = useState({})

    useLayoutEffect(()=> {
        async function FetchQuotes() {
            try{
                const result = await axios.get('api/quotedata');
                setQuoteData({...result.data})
                // console.log("quoteData", result.data)
            }catch (err){
                SetError({...err})
            }

        }

        FetchQuotes()
    }, [])

    const handleSubmit = (values) => {
        axios.post("/api/quote", values).then((res) => {
          console.log("response recieved");
        });
      };

    // INIT VALUES
    const initialValues = {
        origin: null,
        destination: null,
        depart_date: "",
        return_date: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        transport_id: null,
        price: null,
        currency_id : 1
    }

    return (

        <TableContainer component={Paper} className={classes.tableFrame}>
            <div className="quote_list-header">
                {/* <ReplayIcon className="quote_create-header-icon" fontSize="large"/>
                <h1 className="quote_create-header-text">QUICK QUOTE</h1>
                <IconButton className="quote_create-header-btn" onClick={() => console.log("button pressed")}>
                    <OpenWith fontSize="large"/>
                </IconButton>    */}
                {/* <div className="quote_create-header"> */}
                <FastForwardIcon className="quote_create-header-icon" fontSize="large"/>
                <h1 className="quote_create-header-text">Quick Quote</h1>
                <IconButton className="quote_create-header-btn" onClick={() => console.log("button pressed")}>
                    <OpenWith fontSize="large"/>
                </IconButton>             
            {/* </div> */}
            </div>
            {/* <Table className="placeholder"> */}
            <div>
                        <Formik
                    initialValues={initialValues}
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
                                        <QuoteSendBtn />
                                    
                                </div>
                                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                            </Form>
                    )}

                </Formik>
            {/* </Table> */}
            </div>
      </TableContainer>





        // <div className="quote_create-container">





        
        // </div>
    );
};

export default QuoteCreate;