import styles from "./Contact.module.css"
import { FaPhone } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

export default function Contact({ people, onClickDelete }) {
  const handleClick = () => {
    onClickDelete(people.id);
  };

  return (
    <div className={styles.contactbox}>
      <div className={styles.contactWrapper}>
        <FaUserLarge />
        <p className={styles.contactDescript}>{people.name}</p>
      </div>
      <div className={styles.contactWrapper}>
        <FaPhone />
        <p className={styles.contactDescript}>{people.number}</p>
      </div>
      <button onClick={handleClick} className={styles.contactDeleteBtn} type="button">
        Delete
      </button>
    </div>
  );
}