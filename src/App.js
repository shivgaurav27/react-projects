import React from 'react';
import {Card,CardContent,Checkbox,Typography,TextField} from '@material-ui/core/';
import {Field, Formik,Form} from 'formik';
import { CheckboxWithLabel  } from 'formik-material-ui';


import './App.css';

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
            <Form><div>
              <Field name='firstName' component={TextField} label='First Name'/>
              <Field name='firstName' component={TextField} label='First Name'/>
              <Field name='firstName' component={CheckboxWithLabel} Label={{label:'I am a millionaire'}} />
              </div>
              <div>
              <Field name='firstName' component={TextField} label='First Name'/>
              </div>
              <div>
              <Field name='firstName' component={TextField} label='First Name'/>
              </div>
              
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
