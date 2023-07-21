import styles from "../../styles/layout/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Se você tiver alguma dúvida, sinta-se à vontade para perguntar aqui.
        </h2>
        <div className={styles.box_input}>
          <div>
            <label htmlFor="name1">Nome:</label>
            <input
              type="text"
              name="name"
              id="name1"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label htmlFor="email1">Email:</label>
            <input
              type="text"
              name="email"
              id="email1"
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <label htmlFor="email1">Dúvida:</label>
            <input
              type="text"
              name="email"
              id="email1"
              placeholder="Digite sua dúvida"
            />
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
