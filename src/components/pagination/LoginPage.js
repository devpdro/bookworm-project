import styles from "../../styles/pagination/LoginPage.module.scss";

import Image from "../../assets/auth-bg.jpg";

import React, { useEffect } from "react";

function LoginPage() {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.img_box}>
        <img
          className={styles.img_background}
          src={Image}
          alt="Capa de fundo"
        />
      </div>
      <div className={styles.container_box_text}>
        <div className={styles.text_box}>
          <h2>Conecte-se</h2>
          <p>Entrar com e-mail e senha</p>
          <form action="">
            <div>
              <label htmlFor="email2">Email:</label>
              <input
                type="email"
                name="email"
                id="email2"
                placeholder="Digite seu email"
              />
            </div>
            <div>
              <label htmlFor="password1">Senha: </label>
              <input
                type="password"
                name="password"
                id="password1"
                placeholder="Digite sua senha"
              />
            </div>
            <input className={styles.login} type="submit" value="Fazer login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
