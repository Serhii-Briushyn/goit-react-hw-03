import { FaPhone, FaUser } from "react-icons/fa6";
import style from "./Contact.module.css";

function Contact({ contact, onDeleteContact }) {
  return (
    <li className={style.item}>
      <div className={style.wrapper}>
        <p className={style.text}>
          <FaUser />
          {contact.name}
        </p>
        <p className={style.text}>
          <FaPhone />
          {contact.number}
        </p>
      </div>

      <button
        className={style.button}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
