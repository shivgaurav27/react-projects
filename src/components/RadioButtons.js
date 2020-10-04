import React, { Fragment } from 'react';
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';
const RadioButtons = (props) => {
    const { label, name, options, ...rest } = props;
    return (
        <div className='form-control'>
            <label >{label}</label>
            <Field  >
                {
                    ({ field }) => {
                        console.log("field",field);
                        return options.map(option => {
                                return (
                                    <Fragment key={option.key}>
                                        <input type='radio' 
                                        id={option.value} 
                                         {...field} 
                                         {...rest}
                                         value={option.value}
                                         checked={field.value === option.value}
                                        />
                                         <label htmlFor={option.value}>{option.key}</label>
                                    </Fragment>
                                )
                            })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}

export default RadioButtons;