import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/header/Header";
import TodoBody from "./components/todoBody/TodoBody";


export default function Home() {
  return (
    <div className="main-container">
      <Header />
      <TodoBody />
    </div>
  );
}
