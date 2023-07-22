import styles from "../../styles/pagination/RegisterPage.module.scss";

import Image from "../../assets/auth-bg.jpg";

import React, { useState } from "react";

import { auth } from "../../services/firebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.img_box}>
        <img src={Image} alt="Capa de fundo" />
      </div>
      <div className={styles.container_box_text}>
        <div className={styles.text_box}>
          <h2>Cadastrar-se</h2>
          <p>Crie uma nova conta com e-mail e senha</p>
          <form>
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password1">Senha: </label>
              <input
                type="password"
                name="password"
                id="password1"
                placeholder="Entre com sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              className={styles.login}
              type="submit"
              value="Cadastrar conta"
              onClick={() => createUserWithEmailAndPassword(email, password)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
