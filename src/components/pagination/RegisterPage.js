import React, { useState, useEffect } from "react";

import styles from "../../styles/pagination/RegisterPage.module.scss";

import Image from "../../assets/auth-bg.jpg";

import { useNavigate } from "react-router-dom";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

import Swal from "sweetalert2";

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

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
      confirmButtonColor: "#ff6961  ",
      confirmButtonText: "OK",
    });
    return navigate("/Books");
  }

  if (loading) {
    return <p className={styles.loading}>Carregando...</p>;
  }

  if (user) {
    return navigate("/");
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
          <form onSubmit={handleLogin}>
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
