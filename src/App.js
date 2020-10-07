import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }


  responseGoogle = (response) =>{
    console.log(response);
    console.log(response.profile);
  }

  render() { 
    return (  
      <div className="App">
        <GoogleLogin  
        clientId="3194289824-vv1vnvtk8ukq35iapo8dv3tjmnb4slbf.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}
 
export default App;