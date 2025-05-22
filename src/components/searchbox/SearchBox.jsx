import styles from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filterValue = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value)); 
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="searchInput">Find contact by name</label>
      <input
        id="searchInput"
        className={styles.input}
        type="text"
        value={filterValue} 
        onChange={handleChange} 
      />
    </div>
  );
}
