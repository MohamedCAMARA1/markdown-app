import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {sampleText} from './sampleText' //on importe la variable en destructuring
import marked from 'marked'

class App extends Component {

  state ={
    text: sampleText

  }

  handleChange = (event) => {
    const text = event.target.value
    this.setState({text})

  }

  renderText = (text) => {
    const __html = marked(text, {sanitize: true})
    return {__html} // equivalent à return( __html : __html )

  }


  render() {
  return (
  
    <div className ='container'>
      <div className="row">

        <div className="col-sm-6">
          <div className="form-group">            
            <textarea 
            onChange= {this.handleChange}
            value = {this.state.text}
              rows="35"
              className='form-control'>
            </textarea>
          </div> 
        </div>

          <div className="col-sm-6">
            {//ici on utilkise dangerouslySetInnerHTML pour sécuriser le code sachant que ça ne sera pas le 
            // le programmeur qui saisira ce que contiendra la variable
            }
            
            <div dangerouslySetInnerHTML = {this.renderText(this.state.text)} />        
          </div> 


        
      </div>

    </div>


  );
  }
}

export default App;
