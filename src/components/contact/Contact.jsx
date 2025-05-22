import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id)); 
  };

  return (
    <div className={styles.contactbox}>
      <div className={styles.contactWrapper}>
        <FaUserLarge />
        <p className={styles.contactDescript}>{name}</p>
      </div>
      <div className={styles.contactWrapper}>
        <FaPhone />
        <p className={styles.contactDescript}>{number}</p>
      </div>
      <button onClick={handleClick} className={styles.contactDeleteBtn} type="button">
        Delete
      </button>
    </div>
  );
}
