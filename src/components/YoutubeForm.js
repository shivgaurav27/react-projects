import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    Channel: '',
    comments: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumber: ['', ''],
    phNumbers: [""]
}
const onSubmit = values => {
    console.log('form data', values)
}

const validate = values => {
    // values.name values.email values.channel
    // errors.name errors.email errors.channel
    let errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    if (!values.Channel) {
        errors.Channel = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }
    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email format').required('Required'),
    Channel: Yup.string().required('Required'),
    // comments:Yup.string().min(5,'Too Short').required('required')
})


const validateComments = value =>{
    let error;
    if(!value){
        error='Comments is mandatory!'
    }
    return error;
}


const YoutubeForm = () => {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            // validateOnChange={false} //it will not show the erorrs onchange
            // validateOnBlur={false} //it will not show error when blur event occur
        >
            <Form>

                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='text' name='name'
                    />
                    <ErrorMessage name='name' component={TextError} />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='email' id='email' name='email'
                    />
                    <ErrorMessage name='email' component={TextError} />
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Channel</label>
                    <Field type='text' id='Channel' name='Channel'
                    />
                    <ErrorMessage name='Channel' component={TextError} />
                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    <Field as='textarea' type='text' id='comments' name='comments'
                    validate={validateComments}
                    />
                 <ErrorMessage name='comments' component={TextError} />

                </div>
                <div className='form-control'>
                    <label htmlFor='facebook'>Facebok</label>
                    <Field type='text' id='facebook' name='social.facebook'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter</label>
                    <Field type='text' id='twitter' name='social.twitter'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='twitter'>Primary phone number</label>
                    <Field type='text' id='primaryPh' name='phoneNumber[0]'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='twitter'>Secondary phone number</label>
                    <Field type='text' id='secondaryPh' name='phoneNumber[1]'
                    />
                </div>
                <div className='form-control'>
                    <label>List of Numbers</label>
                    <FieldArray name='phNumbers'>
                        {
                            (fieldArrayProps) => {
                                console.log('fieldArrayProps', fieldArrayProps);
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { phNumbers } = values;
                                console.log('form errors',form.errors);
                                return <div>
                                    {
                                        phNumbers.map((phNumber, index) => (
                                            <div key={index}>
                                                <Field name={`phNumbers${index}`} />
                                                {
                                                    index > 0 &&
                                                    <button type='button' onClick={() => remove(index)}>-</button>

                                                }
                                                <button type='button' onClick={() => push('')}>+</button>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        }
                    </FieldArray>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
}

export default YoutubeForm;