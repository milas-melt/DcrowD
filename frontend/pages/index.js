import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  async function getName() {
    const response = await axios.get("/api/hello");
    console.log(response);
  }

  return (
    <div className={styles.container}>
      <button onClick={getName}>get name</button>
    </div>
  );
}
