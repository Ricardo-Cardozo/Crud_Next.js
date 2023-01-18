import styles from "@/styles/stylesLayout/Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
