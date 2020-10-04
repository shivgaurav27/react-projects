import React from 'react';
import {Formik,Form} from "formik";
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
    const initialValues={
        email:'',
        description:'',
    }
    const validationSchema = Yup.object({
        email:Yup.string().required('Required !!!'),
        description:Yup.string().required('required hai!!!')
    })
    const onSubmit = values =>console.log('Form data',values)
    return ( 
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik =>(
                    <Form>
                       <FormikControl
                        control='input'
                        type='email'
                        label='E-mail'
                        name='email'
                        />
                        <FormikControl 
                        control='textarea'
                        label='Description'
                        name='description'
                        />
                        <button type='submit'>submit</button>
                    </Form>
                )
            }
        </Formik>
     );
}
 
export default FormikContainer;