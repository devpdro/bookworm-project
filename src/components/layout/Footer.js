import React from "react";

import styles from "../../styles/layout/Footer.module.scss";

import emailjs from "emailjs-com";

import Swal from "sweetalert2";

function Footer() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmailMessage",
        "template_k4czhcf",
        e.target,
        "UGePz7_F43900sa5V"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Email enviado com sucesso.",
            timer: 2000,
            showConfirmButton: false,
          });
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }
  return (
    <footer className={styles.background_color}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Se você tiver alguma dúvida, sinta-se à vontade para perguntar aqui.
        </h2>
        <form onSubmit={sendEmail}>
          <div className={styles.box_input}>
            <div>
              <label htmlFor="name1">Nome:</label>
              <input
                type="text"
                name="name"
                id="name1"
                required
                placeholder="Digite seu nome"
                minLength={4}
              />
            </div>
            <div>
              <label htmlFor="email1">Email:</label>
              <input
                type="text"
                name="email"
                id="email1"
                placeholder="Digite seu email"
                required
                minLength={6}
              />
            </div>
            <div>
              <label htmlFor="doubt1">Dúvida:</label>
              <input
                type="text"
                name="doubt"
                id="doubt1"
                placeholder="Digite sua dúvida"
                required
                minLength={8}
              />
            </div>
          </div>
          <div className={styles.submit}>
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
