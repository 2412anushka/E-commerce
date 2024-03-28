import React,{useState} from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
    
      // Function to handle form input changes
      const handleInputChange = (event) => {
        const { name, value } = event.target;
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
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        });
      };
    return (
        <div className='container'>
        <form className="peppyform" onSubmit={handleSubmit}>
            <h2>SignUp</h2>
          <div className="contents">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
            type='password'
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          </div>
          <br />
          <button className='poppins-semibold' type="submit">Submit</button>
        </form>
        </div>
      );
    }


export default Login
