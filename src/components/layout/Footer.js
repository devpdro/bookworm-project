import styles from "../../styles/layout/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>If you have any queries feel free to ask here.</h2>
        </div>
        <div className={styles.box_input}>
          <div>
            <label htmlFor="name1">Name:</label>
            <input type="text" name="name" id="name1" />
          </div>
          <div>
            <label htmlFor="email1">Email:</label>
            <input type="text" name="email" id="email1" />
          </div>
        </div>
        <div className={styles.submit}>
          <input type="submit" value="Enviar" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
