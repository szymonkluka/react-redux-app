import Container from "../Container/Container";
import styles from "./NavBar.module.scss"

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.navigation}>
                    <a href="/"><i className="fa fa-tasks" /></a>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/favorite">Favorite</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}
export default NavBar;