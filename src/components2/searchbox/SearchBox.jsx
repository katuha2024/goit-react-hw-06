import styles from "./SearchBox.module.css";


export default function SearchBox({ value, onChange }) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="searchInput">Find contact by name</label>
      <input
        id="searchInput"
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}