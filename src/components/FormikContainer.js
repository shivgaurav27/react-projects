import React from 'react';
import {Formik,Form} from "formik";
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
    const dropDownOptions=[
        {key:'select an option',value:""},
        {key:'option 1' , value:"option-1"},
        {key:'option 2' , value:"option-2"},
        {key:'option 3' , value:"option-3"},
        {key:'option 4' , value:"option-4"},
        {key:'option 5' , value:"option-5"}
    ]
    const radioOptions=[
        {key:'Male' , value:"male"},
        {key:'Female' , value:"female"},
    ]
    
    const initialValues={
        email:'',
        description:'',
        selectOption:'',
        radioOption:''

    }
    const validationSchema = Yup.object({
        email:Yup.string().required('Required !!!'),
        description:Yup.string().required('required hai!!!'),
        selectOption:Yup.string().required('select required hai!!!'),
        radioOption:Yup.string().required('radio !!')
        
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
                        <FormikControl
                        control='radio'
                        label='Radio Topic'
                        name='radioOption' 
                        options={radioOptions}                        
                        />
                        
                        <button type='submit'>submit</button>
                    </Form>
                )
            }
        </Formik>
     );
}
 
export default FormikContainer;