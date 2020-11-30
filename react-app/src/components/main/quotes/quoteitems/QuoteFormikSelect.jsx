import React from "react";
import { Field } from "formik";
import  {TextField} from "formik-material-ui";
import MenuItem from "@material-ui/core/MenuItem"

import "../QuoteCreate.scss"

const QuoteFormikSelect =
  ({ name, label, type = "text", disabled = false, ranges}) => {
    return (
      < >
        <Field
              component={TextField}
              className="quote_create-field"
              type={type}
              name={name}
              label={label}
              select
              // value={value}
              variant="standard"
              helperText="Please select"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {ranges ? ranges.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.t_type && `${option.t_type}`}
                  {option.city && `(${option.code}) ${option.city}`}
                  {option.code && `(${option.code})`}
                </MenuItem>
              )): null}
            </Field>
      </>
    );
  };

export default QuoteFormikSelect;