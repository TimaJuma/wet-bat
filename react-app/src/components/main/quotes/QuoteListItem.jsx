import React from 'react';
import {TableCell, TableRow} from "@material-ui/core"
import "./QuoteList.scss"

const QuoteListItem = ({quote, index, setSelectedQuoteId}) => {
    return (
            <TableRow key={index} className="" hover onClick={() => setSelectedQuoteId(quote.id)}>
                <TableCell>{quote.id}</TableCell>
                <TableCell>{`${quote.first_name} ${quote.last_name}`}</TableCell>
                <TableCell>{quote.dest_city}</TableCell>
                <TableCell>$ {quote.price/100}.00</TableCell>
            </TableRow>
    );
};

export default QuoteListItem;