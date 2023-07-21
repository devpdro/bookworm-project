import styles from "../styles/Books.module.scss"

import HeaderBooks from "../components/HeaderBooks";

function Books() {
    return (
        <main className={styles.container}>
            <HeaderBooks />
        </main>
    )
}

export default Books;