import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border-style: solid red;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-style: solid red;
  /* padding-bottom: 100px; */
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #437dcb;
  font-weight: bold;
`;

const Input = styled.input.attrs((props) => ({
  // Use the ID prop to conditionally apply background color
  style: {
    backgroundColor:
      props.id === 'name' || props.id === 'email' ? '#fafafa' : '#f0f0f0',
    border:
      props.id === 'name' || props.id === 'email'
        ? 'solid 5px #977323'
        : '1px solid #ccc',
  },
}))`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 5px solid #977323;
  border-radius: 4px;
  background-color: #fafafa;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  font-weight: 16px;
  padding: 10px;
  padding-left: 150px;
  padding-right: 150px;
  background-color: #437dcb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  margin-left: 35px;
  margin-top: 20px;

  &:hover {
    background-color: #d78c30;
  }
`;

function ContactUs() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botField: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    // Check if the honeypot field is filled, indicating potential bot activity
    if (formData.botField) {
      // Handle the bot activity, e.g., log it or prevent form submission
      console.log('Bot activity detected!');
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactForm', ...formData }),
    })
      .then(() => {
        // On successful submission, navigate to the success page
        navigate('/success');
        // alert("succes!!")
      })
      .catch((error) => alert(error));
    e.preventDefault();

    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
      botField: '',
    });
  };

  return (
    <FormContainer>
      <Form name='contactform' method='POST' onSubmit={handleSubmit}>
        <Label htmlFor='name'>Name:</Label>
        <Input
          type='text'
          id='name'
          name='name'
          placeholder="Enter your name:"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Label htmlFor='email'>Email:</Label>
        <Input
          type='email'
          id='email'
          name='email'
          placeholder="Enter your email:"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor='message'>Message:</Label>
        <TextArea
          id='message'
          name='message'
          placeholder="Enter your message:"
          value={formData.message}
          onChange={handleChange}
          required
          rows='8'
        />
        <input
          type='text'
          name='botField'
          value={formData.botField}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        <input
          type='text'
          name='botField'
          value={formData.botField}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </FormContainer>
  );
}

export default ContactUs;
