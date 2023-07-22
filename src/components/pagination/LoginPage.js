import styles from "../../styles/pagination/LoginPage.module.scss";

import Image from "../../assets/auth-bg.jpg";

import React, { useState } from "react";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

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
        <p>Login efetuado: {user.user.email}</p>
      </div>
    );
  }

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
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={3}
                maxLength={25}
              />
            </div>
            <input
              onClick={() => signInWithEmailAndPassword(email, password)}
              className={styles.login}
              type="submit"
              value="Fazer login"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
