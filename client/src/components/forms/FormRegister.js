// dependencies
//import { useEffect, useState } from 'react';
//import { useNavigate, Link } from "react-router-dom";
import { Form, InputGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

// styles
import './FormRegister.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormRegister = (props) => {
    const { handleSubmit, handleChange, values, errors } = props;

    return(
      <div className='FormRegister'>
        <Form onSubmit={ handleSubmit }>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name='name'
            type='text'
            placeholder='Enter Name here'
            value={values.name}
            onChange={handleChange}
          />
          {
            errors.name &&
            <p className='error'>{errors.name}</p>
          }
          <br/>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name='email'
            type='text'
            placeholder='Enter Email here'
            value={values.email}
            onChange={handleChange}
          />
          {
            errors.email &&
            <p className='error'>{errors.email}</p>
          }
          <br/>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Enter Password here'
            value={values.password}
            onChange={handleChange}
          />
          {
            errors.password &&
            <p className='error'>{errors.password}</p>
          }
          <br/>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name='password2'
            type='password'
            placeholder='Enter Password here'
            value={values.password2}
            onChange={handleChange}
          />
          {
            errors.password2 &&
            <p className='error'>{errors.password2}</p>
          }
          <br/>
          <Form.Label>Phone Number (optional)</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">+1</InputGroup.Text>
            <Form.Control
              name='phoneNumber'
              type="tel"
              placeholder="Enter Phone Number here"
              value={values.phoneNumber}
              onChange={handleChange}
            />
          </InputGroup>
          {
            errors.phoneNumber &&
            <p className='error'>{errors.phoneNumber}</p>
          }
          <br/>
          <Form.Label>Birthdate</Form.Label>
          <Form.Control
            name='birthDate'
            type='date'
            value={values.birthDate}
            onChange={handleChange}
          />
          {
            errors.birthDate &&
            <p className='error'>{errors.birthDate}</p>
          }
          <br/>
          <br/>
          <Form.Control 
            value="Register"
            type="submit"
          />
        </Form>
        <br/>
        <br/>
        <div id="login">
          <Link to='/login'>
            Already have an account? Login
          </Link>
        </div>
      </div>
    )
}

export default FormRegister;