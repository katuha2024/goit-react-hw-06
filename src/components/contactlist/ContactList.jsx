import styles from './Contactlist.module.css';
import Contact from '../contact/Contact';
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {filteredContacts.length === 0 ? (
        <p>Dear Mentor, no such contact found, try again! )))</p>
      ) : (
        <ul className={styles.contactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={styles.listItem}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
