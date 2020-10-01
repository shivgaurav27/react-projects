import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    name: '',
    email: '',
    Channel: ''
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



const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('form Errors', formik.errors)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>

                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='text' name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {
                        formik.touched.name && formik.errors.name && <div className='error'>{formik.errors.name}</div>
                    }
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email' name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {
                        formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>
                    }
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Channel</label>
                    <input type='text' id='Channel' name='Channel'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Channel}
                    />
                    {
                        formik.touched.Channel && formik.errors.Channel && <div className='error'>{formik.errors.Channel}</div>
                    }
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default YoutubeForm;