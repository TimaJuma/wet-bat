import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core"
import ReplayIcon from "@material-ui/icons/Replay"
import IconButton from "@material-ui/core/IconButton"
import OpenWith from "@material-ui/icons/OpenWith"
import { makeStyles, createStyles } from "@material-ui/core/styles";

import "./QuoteList.scss"
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) =>
  createStyles({
    tableFrame: {
        marginTop: "10px",
        width: "100%",
        minWidth : "400px",
      borderRadius: "12px",
    },
  })
);


const QuoteDetails = ({quotes, selectedQuoteId}) => {
    const classes = useStyles();

    const [selectedQuote, setSelectedQuote] = useState({})


    useEffect(async()=> {
        console.log("quote details quoteID", selectedQuoteId)
        const [selected] = await quotes.filter(quote => quote.id === 1);
        console.log("quote details quoteItself", selected)
        setSelectedQuote({...selected})
    }, selectedQuoteId)

    const headerText= "Quote Details"
    return (
        <div>
            <TableContainer component={Paper} className={classes.tableFrame}>
                <div className="quote_list-header">
                    <ReplayIcon className="quote_create-header-icon" fontSize="large"/>
                    <h1 className="quote_create-header-text">{headerText}</h1>
                    <IconButton className="quote_create-header-btn" onClick={() => console.log("button pressed")}>
                        <OpenWith fontSize="large"/>
                    </IconButton>   
                </div>
            <Table className="placeholder">
    <h1>{selectedQuoteId}</h1>
    <pre>{JSON.stringify(selectedQuote, null, 2)}</pre>
            </Table>
        </TableContainer>
        </div>
    );
};

export default QuoteDetails;