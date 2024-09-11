import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={style.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
