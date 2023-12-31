import { useState, useEffect, useRef } from "react";

import styles from "../styles/PaymentForm.module.scss";

function PaymentForm() {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let paypalRef = useRef();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const calculateTotalPrice = (cart) => {
    return cart.reduce(
      (total, book) => total + book.price * book.quantidade,
      0
    );
  };

  const total = calculateTotalPrice(cart);

  const product = {
    price: `${total}`,
    description: "Comprar livro(s)",
  };

  useEffect(() => {
    const script = document.createElement("script");
    const id =
      "ASqWCKKsqniIlMaJpko8tzg-p0GQnjykXquJEBX5BDzxghhuZRy8EQbIvs1oG_sXIAtQM1QCEkheAQq0";
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`;
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (loaded) {
      function loadButtonsAndLogicAboutPayment() {
        setTimeout(() => {
          window.paypal
            .Buttons({
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: product.description,
                      amount: {
                        currency_code: "BRL",
                        value: product.price,
                      },
                    },
                  ],
                });
              },
              onApprove: async (_, actions) => {
                const order = await actions.order.capture();
                setPaid(true);
                console.log(order);
              },
            })
            .render(paypalRef);
        });
      }
      loadButtonsAndLogicAboutPayment();
    }
  });

  return (
    <div className={styles.container}>
      {paid ? (
        <div>
          <h1>Parabens pela compra!</h1>
        </div>
      ) : (
        <>
          <div className={styles.button} ref={(v) => (paypalRef = v)} />
        </>
      )}
    </div>
  );
}

export default PaymentForm;
