import React from 'react';
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send"
import {makeStyles} from "@material-ui/core/styles";
const useStyle = makeStyles(theme => ({
  button: {
    margin: "auto",
    padding: "auto",
    height: "40px",
    color: "white",
    fontWeight: "bold",
    background : "#5bbfba",
    borderRadius: "20px"
  }
}))



const CreateQuote = ({onClick}) => {
    const classes = useStyle();
    return (
        <>
            <Button className={classes.button} type="submit" variant="contained" endIcon={<SendIcon/>} onClick={onClick}>Create a Quote</Button>
        </>
    );
}

export default CreateQuote;