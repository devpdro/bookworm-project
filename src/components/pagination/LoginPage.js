import React, { useState, useEffect } from "react";

import styles from "../../styles/pagination/LoginPage.module.scss";

import Image from "../../assets/auth-bg.jpg";

import { useNavigate } from "react-router-dom";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

import Swal from "sweetalert2";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function handleLogin(event) {
    event.preventDefault();
  }

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Ops! Algo deu errado...",
      text: "senha/e-mail inválido",
      confirmButtonColor: "#ff6961",
      confirmButtonText: "OK",
    });
    return navigate("/Books");
  }

  if (loading) {
    <p className={styles.loading}>Carregando...</p>;
  }

  if (user) {
    return navigate("/");
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
          <form onSubmit={handleLogin}>
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
