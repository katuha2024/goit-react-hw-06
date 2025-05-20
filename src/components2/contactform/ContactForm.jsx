import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from 'yup';

export default function ContactForm({ onSubmit, initValues }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    contactName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    contactPhone: Yup.string()
      .matches(/^[0-9\-+\s()]*$/, "Invalid phone number")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={styles.formContainer}>
          <label className={styles.Contactlabel} htmlFor={nameFieldId}>Name</label>
          <Field className={styles.contactInput} type="text" name="contactName" id={nameFieldId} />
          <ErrorMessage name="contactName" component="span" className={styles.errorMessage} />

          <label className={styles.Contactlabel} htmlFor={phoneFieldId}>Number</label>
          <Field className={styles.contactInput} type="tel" name="contactPhone" id={phoneFieldId} />
          <ErrorMessage name="contactPhone" component="span" className={styles.errorMessage} />

          <button className={styles.btnAddContact} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}