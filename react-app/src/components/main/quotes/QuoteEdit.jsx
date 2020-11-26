import React from 'react';
import FastForwardIcon from "@material-ui/icons/FastForwardOutlined"
import IconButton from "@material-ui/core/IconButton"
import OpenWith from "@material-ui/icons/OpenWith"
import "./QuoteEdit.scss"

const QuoteEdit = (quote) => {
    return (
        <div className="quote_edit-container">
            <div className="quote_edit-header">
                <FastForwardIcon className="quote_edit-header-icon" fontSize="large"/>
                <h1 className="quote_edit-header-text">Quick Quote</h1>
                <IconButton className="quote_edit-header-btn" onClick={() => console.log("button pressed")}>
                    <OpenWith fontSize="large"/>
                </IconButton>             
            </div>
            <div className="quote_edit-body">
                <div>
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </div>
        </div>
    );
};

export default QuoteEdit;