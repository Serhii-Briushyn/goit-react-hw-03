import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

function ContactForm({ onAddContact }) {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    onAddContact({ id: nanoid(), ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={style.form}>
        <div className={style.wrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={style.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={style.message}
            name="name"
            component="span"
          />
        </div>
        <div className={style.wrapper}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={style.input}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={style.message}
            name="number"
            component="span"
          />
        </div>

        <button className={style.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
