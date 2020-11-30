import React from "react";
import { Field } from "formik";
import  {TextField} from "formik-material-ui";

import "../QuoteCreate.scss"

const QuoteFormikField =
  ({ name, label, type = "text", disabled = false}) => {
    return (
      <>
        <Field
              component={TextField}
              className="quote_create-field"
              type={type}
              name={name}
              label={label}
              margin="normal"
              InputLabelProps={{
                shrink: true,
                
              }}
            >
            </Field>
      </>
    );
  };

export default QuoteFormikField;