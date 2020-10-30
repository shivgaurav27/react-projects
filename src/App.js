import React from 'react';
import {Card,CardContent,Checkbox,Typography} from '@material-ui/core/';
import {Field, Formik,Form} from 'formik';


import './App.css';
import { TextField } from '@material-ui/core';

function App() {
  const initialValues={
    firstName:'',
    lastName:'',
    millionaire:false,
    money:0,
    descripton:''
  }
  return (
    <div className="App">
      <Card>
        <CardContent>
          <Formik
          initialValues={initialValues }
          onSubmit={()=>{}}
          >
            <Form>
              <Field name='firstName' component={TextField} label='First Name'/>
              <Field name='firstName' component={TextField} label='First Name'/>
              <Field name='firstName' component={CheckboxWithLabel} label='I am a millionaire'/>
              <Field name='firstName' component={TextField} label='First Name'/>
              <Field name='firstName' component={TextField} label='First Name'/>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
