import styles from "../../styles/pagination/RegisterPage.module.scss";

import Image from "../../assets/auth-bg.jpg";

import React, { useEffect } from "react";

function RegisterPage() {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.img_box}>
        <img src={Image} alt="Capa de fundo" />
      </div>
      <div className={styles.container_box_text}>
        <div className={styles.text_box}>
          <h2>Cadastrar-se</h2>
          <p>Crie uma nova conta com e-mail e senha</p>
          <form action="">
            <div>
              <label htmlFor="username1">Nome de usuário:</label>
              <input
                type="text"
                name="username"
                id="username1"
                placeholder="Entre com seu nome de usuário"
              />
            </div>
            <div>
              <label htmlFor="password1">Email: </label>
              <input
                type="email"
                name="email"
                id="email2"
                placeholder="Entre com seu email"
              />
            </div>
            <div>
              <label htmlFor="password1">Senha: </label>
              <input
                type="password"
                name="password"
                id="password1"
                placeholder="Entre com sua senha"
              />
            </div>
            <input
              className={styles.login}
              type="submit"
              value="Cadastrar conta"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
