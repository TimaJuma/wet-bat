import React from 'react';
import QuoteListItem from "./QuoteListItem"
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core"
import ReplayIcon from "@material-ui/icons/Replay"
import IconButton from "@material-ui/core/IconButton"
import SettingsOverscan from "@material-ui/icons/SettingsOverscan"
import { makeStyles, createStyles } from "@material-ui/core/styles";

import "./QuoteList.scss"
import "./QuoteCreate.scss"

const useStyles = makeStyles((theme) =>
  createStyles({
    tableContainer: {
      borderRadius: "12px",
      margin: "10px",
      marginBottom: "30px",
      padding : "20px",
      height: '435px',
      overflow: "auto"
    },
  })
);
  



const QuoteList = ({quotes, setSelectedQuoteId}) => {
    const classes = useStyles();

    
    
    const quoteList = quotes.map((quote, index)=> {
        return <QuoteListItem
        index={index}
        quote={quote}
        setSelectedQuoteId={setSelectedQuoteId}
        />
    })

    return (
        <div>
            <TableContainer component={Paper} className={classes.tableContainer}>
            <div className="quote_create-header">
                <div className="quote_create-header-left ">
                    <ReplayIcon className="quote_create-header-icon" fontSize="large"/>
                    <h1 className="quote_create-header-text">Pending Quotes</h1>
                </div>
                    <IconButton className="quote_create-header-btn" onClick={() => console.log("button pressed")}>
                        <SettingsOverscan className="quote_create-header-icon"  fontSize="large"/>
                    </IconButton>   
                </div>
                <Table className="quote_list-body">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID #</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>DESTINATION</TableCell>
                            <TableCell>PRICE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {quoteList}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <pre>{JSON.stringify(quotes, null, 2)}</pre> */}
        </div>
    );
};

export default QuoteList;