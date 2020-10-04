import React from 'react';
import {Formik,Form} from "formik";
import * as Yup from 'yup';

const FormikContainer = () => {
    const initialValues={}
    const validationSchema = Yup.object({})
    const onSubmit = values =>console.log('Form data',values)
    return ( 
        <Formik>
            {
                formik =>(
                    <Form>
                        <button type='submit'>submit</button>
                    </Form>
                )
            }
        </Formik>
     );
}
 
export default FormikContainer;