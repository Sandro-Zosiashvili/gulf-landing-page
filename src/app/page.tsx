import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/app/components/Menu/Menu";
import Logo from "@/app/components/Logo/Logo";

export default function Home() {
  return (
    <div className={styles.page}>
    <Menu />
    </div>
  );
}
