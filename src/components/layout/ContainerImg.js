import styles from "../../styles/layout/ContainerImg.module.scss";

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}

export default Container;
