import styles from "@/styles/styleComponents/Navbar.module.css"
import Link from "next/link"
Link

const Navbar = () => {
  return (
    <nav className={styles.nav_container}>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/register'>Cadastrar</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar