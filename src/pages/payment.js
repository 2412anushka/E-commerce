import React from 'react'
import { useState,useEffect } from 'react';

const Payment = () => {
    const [formData, setFormData] = useState({
        cardName: '',
          email: '',
          cardnum: '',
          expiry: '',
          cvv:''
      });
      useEffect(() => {
        const cvvInput = document.querySelector('#cvv');
        const cvvPattern = /^[0-9]{3}$/;
        const cvvError = document.getElementById('cvvError');
    
        const CVV=(cvvPattern,cvvError,cvvInput)=>{
          if (!cvvPattern.test(cvvInput.value)) {
            cvvError.textContent = 'CVV must be 3 digits';
            cvvError.style.color='red';
            cvvError.style.fontSize='13px';
            // return false;
            // event.preventDefault(); // Prevent form submission
        } else {
            cvvError.textContent = ''; // Clear any previous error message
            // return true;
        }
        }
        cvvInput.addEventListener('input',()=>{
          CVV(cvvPattern,cvvError,cvvInput);
        })
    
        // Cleanup function to remove event listener when component unmounts
        // return () => {
        //     cvvInput.removeEventListener('input', () => {
        //         CVV(cvvPattern, cvvError, cvvInput);
        //     });
        // };
    const emailInput = document.querySelector('#email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('emailError');

    const Email=(emailPattern,emailError,emailInput)=>{
      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Invalid email address';
        emailError.style.color='red';
        emailError.style.fontSize='13px';
        // return false;
        // event.preventDefault(); // Prevent form submission
    } else {
        emailError.textContent = ''; // Clear any previous error message
        // return true;
    }
    }
    emailInput.addEventListener('input',()=>{
      Email(emailPattern,emailError,emailInput);
    })

    const cardno=document.querySelector('#pin')
    // console.log(cardno.value);
    const cardError = document.getElementById('cardError');
    const cardPattern = /^[0-9]{16}$/;
    const CardNum=(cardno,cardError,cardPattern)=>{
      if (!cardPattern.test(cardno.value.split(" ").join(""))) {
        cardError.textContent = 'PIN must be of 16 digits';
        cardError.style.color='red';
        cardError.style.fontSize='13px';
        // return false;
        // event.preventDefault(); // Prevent form submission
    } else {
        cardError.textContent = ''; // Clear any previous error message
        // return true;
    }
    }

    cardno.addEventListener('input',()=>{
      CardNum(cardno,cardError,cardPattern);
    })


    const nameInput=document.querySelector('#fullname');
    const namePattern = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    const words = nameInput.value.trim().split(/\s+/);
    const nameError=document.getElementById('nameError');

    const Name = (namePattern,nameError,nameInput) =>{
      if (!namePattern.test(nameInput.value) && words.length !== 2) {
        nameError.textContent = 'Invalid Name';
        nameError.style.color='red';
        nameError.style.fontSize='13px';
        // e.preventDefault(); // Prevent form submission
        // return false;
    } else {
        nameError.textContent = ''; // Clear any previous error message
        // return true;
    }
    }

    nameInput.addEventListener('input',()=>{
      Name(namePattern,nameError,nameInput);
    })


    const exdateInput=document.querySelector('#expiry');
    const exdatePattern= /^\d{2}\/\d{2}$/;
    const exdateError=document.getElementById('exdateError');
    
    const Expiry=(exdatePattern,exdateError,exdateInput)=>{
      if (!exdatePattern.test(exdateInput.value)) {
        exdateError.textContent = 'Invalid Date';
        exdateError.style.color='red';
        exdateError.style.fontSize='13px';
        // e.preventDefault(); // Prevent form submission
        // return false;
    } else {
        exdateError.textContent = ''; // Clear any previous error message
        // return true;
    }
    }

    exdateInput.addEventListener('input',()=>{
      Expiry(exdatePattern,exdateError,exdateInput);
    }) 


    }, []);
      // Function to handle form input changes
      const handleInputChange = (event) => {
        
        const { name, value } = event.target;
        // console.log(name,value);
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      // Function to handle form submission
      const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform any action with the form data, such as sending it to a server
        
        console.log(formData);
        // Reset form after submission
        setFormData({
          cardName: '',
          email: '',
          cardnum: '',
          expiry: '',
          cvv:''
        });
      };
    return (
        <div className='pay'>
        <form onSubmit={handleSubmit}>
            <h2>Payment Gateway</h2>
          <div className="pay1">
          <label>
            Name on card:
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              id='fullname'
              required
            />
          </label>
          <span id="nameError"></span>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              id='email'
              required
            />
          </label>
          <span id="emailError"></span>
          <br />
          <label>
            Card number:
            <input
              type="text"
              name="cardnum"
              value={formData.cardnum}
              onChange={handleInputChange}
              id='pin'
              required
            />
          </label>
          <span id="cardError"></span>
          <br />
          <label>
            Date of Expiry:
            <input
            type='text'
              name="expiry"
              value={formData.expiry}
              onChange={handleInputChange}
              id='expiry'
              required
            />
          </label>
          <span id="exdateError"></span>
          <br />
          <label>
            CVV:
            <input
            type='password'
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              id='cvv'
              required
            />
          </label>
          <span id="cvvError"></span>
          <br />
          <div className="images">
          <img src="./—Pngtree—blue credit card_3424415.png" alt="" />
          <img src="./—Pngtree—paypal logo icon_3593258.png" alt="" />
          <img src="./—Pngtree—cirrus logo icon_3595071.png" alt="" />
          </div>
          </div>
          <button className="poppins-semibold" type="submit">Pay</button>
        </form>
        </div>
      );
}

export default Payment
