import React from 'react';
import {motion} from 'framer-motion';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import contactFormSchema from '../../validations/contact-form-validation';
import axios from 'axios';

import './contact.scss';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact = () => {
  return (
    <motion.div
      whileInView={{opacity: [0, 1]}}
      transition={{duration: 0.5}}
      viewport={{once: true}}
      className="app__contact app__mg12rem-top"
      id="contact"
    >
      <h2 className="head-text app__textalign-center" style={{color: 'white'}}>
        Get In Touch
      </h2>
      <a href="#contact" className="anchor">
        .
      </a>
      <Formik
        initialValues={{
          'bot-field': '',
          'form-name': 'contact',
          name: '',
          email: '',
          subject: '',
          message: '',
        }}
        validationSchema={contactFormSchema}
        onSubmit={async (values, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          try {
            await axios.post(
              '/',
              encode({
                'form-name': 'contact',
                ...values,
              }),
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              }
            );
          } catch (error) {
            alert(error);
          }

          setSubmitting(false);
          resetForm();
          alert(
            'Thank you for contacting me! I will get back to you as fast as I can!'
          );
        }}
      >
        <Form
          className="contact__flex"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
        >
          <Field type="hidden" name="bot-field" />
          <Field type="hidden" name="contact" />

          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage component="p" name="name" className="invalid" />
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage component="p" name="email" className="invalid" />

          <label htmlFor="subject">Subject</label>
          <Field type="text" name="subject" />
          <ErrorMessage component="p" name="subject" className="invalid" />
          <label htmlFor="message">Message</label>
          <Field
            as="textarea"
            type="text"
            name="message"
            className="input-message"
          />
          <ErrorMessage component="p" name="message" className="invalid" />
          <button type="submit" className="app__link-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Send Message
          </button>
        </Form>
      </Formik>
    </motion.div>
  );
};

export default Contact;
