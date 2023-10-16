import { useState } from 'react'
import './App.css'
import Arrow from '../src/assets/icon-arrow-cf319c02.svg'
import exclamtionmark from '../src/assets/emailinvald.svg'
import Logo from '../src/assets/logo-760646a1.svg'


const isEmail = (email) =>
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

function App() {

     const [values, setValues] = useState({email: "" });
     const [errors, setErrors] = useState({});
     const [checkEmail, setCheckEmail] = useState(true);
     
  
     const validateAndSubmitForm = (e) => {
    e.preventDefault()
    const errors = {};
  
    if(!isEmail(values.email)){
      errors.email = "wrong email"
      setCheckEmail(false)
    }
  
    setErrors(errors)
  
    if(!Object.keys(errors).length){
      setCheckEmail(true)
    }
  };
  
 
  const setEmail = (e) => {
    setValues((values) => ({...values, email: e.target.value}))
  }
  
  
    const setEmailCheckSee = (e) => {
      setEmail(e.target.value)
    }

  return (
    <main>
<section className='container'>

        
           <header>
           <img src={Logo}></img>
            </header> 
          

<div className="image-content">
           </div>

         <div className='content'>
             
             <h1 className='content-h1'><span>we're</span> coming soon</h1>
             <p className='content-text'>Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with annoucments and our deals.</p>
            
           {
             checkEmail ?
              <form  
              style={{border: '1px solid #CE9898'}}
              onSubmit={validateAndSubmitForm}>
              <input
                type="text"
                id='userEmail'
                value={values.email}
                placeholder= 'Email Address'
                onChange={setEmail}
   
              />
            
              <button className='btn'><img src={Arrow}></img></button>
          </form> 
          : 
          <form 
          style={{border: '3px solid #F96464'}}
          onSubmit={validateAndSubmitForm}>
          <input
            type="text"
            id='userEmail'
            className='input errorInput'
            value={values.email}
            placeholder='Email Address'
            onChange={setEmail}
          />
          <img className='exImage' src={exclamtionmark}></img>
         <p className={checkEmail ? "disappear" : "errorMessage"}>Please enter a valid email</p>
          <button className='btn'><img src={Arrow}></img></button>
      </form>
           }
           
           </div>
           
</section>
           
    </main>
  )
}

export default App

