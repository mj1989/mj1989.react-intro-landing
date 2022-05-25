import React, { Component } from 'react'
import FormErrors from './FormErrors';

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName:'',
       secondName:'',
       emailAdress:'',
       password:'',
       formErrors:{
         firstName:'',
         secondName:'',
         emailAdress:'',
         password:'',},
       firstNameValid: false,
       secondNameValid: false,
       emailAdressValid: false,
       passwordValid: false,
       formValid: false,
    }
  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]:value,})
  }


  validateForm(){
    //check validity of first name
    if(this.state.firstName.toString().length >= 2){
      this.setState({firstNameValid:true,})
      this.setState((state)=>{
        return{
          formErrors:{
            firstName:'',
            secondName:state.formErrors.secondName,
            emailAdress:state.formErrors.emailAdress,
            password:state.formErrors.password,},
        }
      })
    }
    else{
      
      this.setState((state)=>{
        return{
          formErrors:{
            firstName:'The First Name should have at least two letters.',
            secondName:state.formErrors.secondName,
            emailAdress:state.formErrors.emailAdress,
            password:state.formErrors.password,},
        }
      })
    }
    //check validity of second name
    if(this.state.secondName.toString().length >= 2){
      this.setState({secondNameValid:true,})
      this.setState((state)=>{
        return{
          formErrors:{
            firstName:state.formErrors.firstName,
            secondName:'',
            emailAdress:state.formErrors.emailAdress,
            password:state.formErrors.password,},
        }
      })
    }
    else{
      
      this.setState((state)=>{
        return{
          formErrors:{
            firstName:state.formErrors.firstName,
            secondName:'The Second Name should have at least two letters.',
            emailAdress:state.formErrors.emailAdress,
            password:state.formErrors.password,},
        }
      })
    }
    //check validity of password
    if(this.state.password.toString().length >= 8){
      this.setState({passwordValid:true,})
      this.setState((state)=>{
        return{
          formErrors:{
            firstName:state.formErrors.firstName,
            secondName:state.formErrors.secondName,
            emailAdress:state.formErrors.emailAdress,
            password:'',},
        }
      })
    }
    else{
      
      this.setState((state)=>{
        return{
          formErrors:{
            firstName:state.formErrors.firstName,
            secondName:state.formErrors.secondName,
            emailAdress:state.formErrors.emailAdress,
            password:'The password should have at least 8 charters.',},
        }
      })
    }
    //check if email is valid
    
    if(this.state.emailAdress.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
      this.setState({emailAdressValid:true,})
      this.setState((state)=>{
        return{
          formErrors:{
            firstName:state.formErrors.firstName,
            secondName:state.formErrors.secondName,
            emailAdress:'',
            password:state.formErrors.password,},
        }
      })
    }
    else{
      
      this.setState((state)=>{
        return{
          formErrors:{
            firstName:state.formErrors.firstName,
            secondName:state.formErrors.secondName,
            emailAdress:'You need to type e-mail like adress with @.',
            password:state.formErrors.password,},
        }
      })
    }
    //check validity of entire form
    if(this.state.firstName && 
      this.state.secondName && 
      this.state.emailAdress && 
      this.state.passwordValid){
      this.setState({formValid:true,})
      
    }

    
  }
  submitForm(){
    this.validateForm();
    
    if(this.state.formValid){
      console.log('Form ready to submit')
    }
    else{
      console.log('Form need correction')
    }
  }
  render() {
    return (
        <div className='form-section' id='form-1'>

          <div className='form-item'>
            <input type='text' placeholder="First Name" 
            name='firstName'
            value={this.state.firstName}
            onChange={(event) => this.handleUserInput(event)}>
            </input>
          </div>

          <div className='form-item'>
            <input type='text' placeholder="Second Name" 
            name="secondName"
            value={this.state.secondName}
            onChange={(event) => this.handleUserInput(event)}></input>
          </div>

          <div className='form-item'>
            <input type='text' placeholder="Email Adress" 
            name="emailAdress"
            value={this.state.emailAdress}
            onChange={(event) => this.handleUserInput(event)}></input>
          </div>

          <div className='form-item'>
            <input type='password' placeholder="Password" 
            name="password"
            value={this.state.password}
            onChange={(event) => this.handleUserInput(event)}></input>
          </div>

          <div className='formError'>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          
          <div className='form-item'>
            <button onClick={()=>this.submitForm()}>claim your free trail</button>
          </div>

          <div className='form-item'>
            <p>
            By clicking the button you agree to our <a href=' '>Terms and Services</a>
            </p>
          </div>
      </div>
    )
  }
}
