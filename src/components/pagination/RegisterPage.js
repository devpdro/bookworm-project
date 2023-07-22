import styles from "../../styles/pagination/RegisterPage.module.scss";

import Image from "../../assets/auth-bg.jpg";

import React, { useState } from "react";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Erro: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (user) {
    return (
      <div>
        <p>Cadastro feito: {user.user.email}</p>
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
                onChange={(e) => setName(e.target.value)}
                required
                minLength={4}
                maxLength={50}
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
                required
                minLength={5}
                maxLength={50}
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
                required
                minLength={3}
                maxLength={25}
              />
            </div>
            <input
              className={styles.login}
              type="submit"
              value="Cadastrar conta"
              onClick={() =>
                createUserWithEmailAndPassword(email, password, name)
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
