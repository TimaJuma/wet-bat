import React, {useLayoutEffect, useState} from 'react';
import {Form, Formik} from "formik"
import * as Yup from "yup";

import QuoteSendBtn from "./quoteitems/QuoteSendBtn"
import FastForwardIcon from "@material-ui/icons/FastForward"
import IconButton from "@material-ui/core/IconButton"
import SettingsOverscan from "@material-ui/icons/SettingsOverscan"
import QuoteFormikField from "./quoteitems/QuoteFormikField"
import QuoteFormikSelect from "./quoteitems/QuoteFormikSelect"
import "./QuoteCreate.scss"

import axios from "axios"

import {Paper,  TableContainer} from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) =>
  createStyles({
    tableFrame: {
        margin: "10px",
        marginBottom: "30px",
        padding : "20px",
        width: "100%",
        minWidth : "400px",
        height: "435px",
      borderRadius: "12px",
    },
    iconStyle: {
        height: "20px"
    }
  })
);



const QuoteCreate = ({setUpdateQuotes}) => {
    const classes = useStyles();
    const [quoteData, setQuoteData] = useState({});
    const [error, SetError] = useState({})

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

    const handleSubmit = (values) => {
        axios.post("/api/quote", values).then((res) => {
        setUpdateQuotes(prev => prev +1 )
          console.log("response recieved");
        });
      };


    // VALIDATION
    const defaultRequiredMessage = "This is a required field";

    const createQuoteValidator = Yup.object().shape({
      first_name: Yup.string().required(defaultRequiredMessage),
      last_name: Yup.string().required(defaultRequiredMessage),
      phone: Yup.string().required(defaultRequiredMessage),
      email: Yup.string().email().required(defaultRequiredMessage)
    });
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
            <div className="quote_create-header">
                <div className="quote_create-header-left ">
                    <FastForwardIcon className="quote_create-header-icon" fontSize="large"/>
                    <h1 className="quote_create-header-text">Quick Quote</h1>
                </div>
                <div>
                <IconButton className="quote_create-header-btn" onClick={() => console.log("button pressed")}>
                    <SettingsOverscan className="quote_create-header-icon" fontSize="large"/>
                </IconButton> 
                </div>            
            </div>
            <div>
                        <Formik
                    initialValues={initialValues}
                    validationSchema={createQuoteValidator}
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
                                        <QuoteSendBtn text="CREATE"/>
                                    
                                </div>
                            </Form>
                    )}

                </Formik>
            </div>
      </TableContainer>
    );
};

export default QuoteCreate;