import { BsSearch } from "react-icons/bs"
import styles from './home.module.css'


export function Home(){
    return (
        <main className={styles.container}>
            <form className={styles.form}>
                <input
                    type="text"
                    placeholder="Digite o nome da moeda... EX bitcoin"
                />
                <button type="submit">
                    <BsSearch size={30} color="#FFF" />
                </button>
            </form>
        </main>
    )
}