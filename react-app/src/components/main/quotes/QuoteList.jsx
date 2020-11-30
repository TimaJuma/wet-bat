import React from 'react';
import QuoteListItem from "./QuoteListItem"
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core"
import ReplayIcon from "@material-ui/icons/Replay"
import IconButton from "@material-ui/core/IconButton"
import OpenWith from "@material-ui/icons/OpenWith"
import { makeStyles, createStyles } from "@material-ui/core/styles";

import "./QuoteList.scss"

const useStyles = makeStyles((theme) =>
  createStyles({
    tableContainer: {
      borderRadius: "12px",
      margin: "10px",
      padding : "20px"
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
                <div className="quote_list-header">
                    <ReplayIcon className="quote_create-header-icon" fontSize="large"/>
                    <h1 className="quote_create-header-text">Pending Quotes</h1>
                    <IconButton className="quote_create-header-btn" onClick={() => console.log("button pressed")}>
                        <OpenWith fontSize="large"/>
                    </IconButton>   
                </div>
                <Table className="placeholder">
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