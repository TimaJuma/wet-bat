import React from "react";
import { Field } from "formik";
import  {TextField} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem"

const QuoteFormikField =
  ({ name, label, type = "text", disabled = false, ranges}) => {
    return (
      <div className="FormikSelect">
        <Field
              component={TextField}
              type={type}
              name={name}
              label={label}
              select
              variant="standard"
            //   helperText="Please select"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {ranges.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.first_name && `${option.first_name} ${option.last_name}`}
                  {option.city && `(${option.code}) ${option.city}`}
                </MenuItem>
              ))}
            </Field>
      </div>
    );
  };

export default QuoteFormikField;