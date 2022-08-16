import { useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <MainLayout menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}>
      <Component menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
