import styles from "@/styles/styleComponents/Input.module.css";

const Input = ({
  name,
  onChange,
  placeholder,
  value,
  type,
  label,
  defaultValue,
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default Input;
