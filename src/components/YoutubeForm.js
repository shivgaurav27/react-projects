import React from 'react';
import { Formik , Form , Field , ErrorMessage} from 'formik';
import * as Yup from 'yup' ;
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    Channel: '',
    comments:''
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

const validationSchema  = Yup.object({
    name : Yup.string().required('Required'),
    email:Yup.string().email('Invalid Email format').required('Required'),
    Channel : Yup.string().required('Required')
})

const YoutubeForm = () => {

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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
                   <ErrorMessage name='email' component={TextError}/>
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Channel</label>
                    <Field type='text' id='Channel' name='Channel'
                    />
                    <ErrorMessage name='Channel' component={TextError}/>
                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    <Field  as='textarea' type='text' id='comments' name='comments '
                    />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
}

export default YoutubeForm;