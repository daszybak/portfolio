import React from 'react';
import {motion} from 'framer-motion';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import contactFormSchema from '../../validations/contact-form-validation';

import './contact.scss';

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
      >
        <Form className="contact__flex">
          <Field type="hidden" name="bot-field" />
          <Field type="hidden" name="contact" />

          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />

          <label htmlFor="subject">Subject</label>
          <Field type="text" name="subject" />
          <ErrorMessage name="subject" />
          <label htmlFor="message">Message</label>
          <Field
            as="textarea"
            type="text"
            name="message"
            className="input-message"
          />
          <ErrorMessage name="message" />
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
