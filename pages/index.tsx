import { Inter } from "@next/font/google";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

type urlImages = string[];

const images: urlImages = [
  "https://t.ctcdn.com.br/18hlpheirMQJD2q9K8rnYXDcY6c=/340x265:1654x1005/512x288/smart/filters:format(webp)/i521747.jpeg",
  "https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2021/09/10/demon-slayer-capa.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfwHa3tDIS29E4NnKk45VWSKYVRHETQy9eg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmF_ts681CRszdlxDIO1llf1Mv7RjrCQEYPnRTHPLCKigUM2Qqtdf7zCATvSTk_9hu2x4&usqp=CAU",
  "https://cdn.maioresemelhores.com/imagens/personagens-de-anime-mais-populares-og.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNf1CRD9Wg_NmP_lbhTUAxW3AkVw1mHg3WyA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVd6vWCvMomDOQk0qtAkRWw5xlaZRwvrrMKA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarWeWaM9SuHLL9ZZ-JqO9rXokRgvmJ9wy7A&usqp=CAU",
];

export default function Home() {
  const estilo: any = useRef();
  console.log(estilo);
  let idx: number = 0;

  function carrosel() {
    idx++;

    if (idx > images.length - 1) {
      idx = 0;
    }
    estilo.current.style.transform = `translateX(${-idx * 500}px)`;
  }
  setInterval(carrosel, 2000);

  const carousel: any | undefined  = useRef();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className={styles.App}>
      <motion.div
        ref={carousel}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          ref={estilo}
          style={{ transition: `3s` }}
          onChange={carrosel}
        >
          {images.map((item) => (
            <motion.div className={styles.item} key={item}>
              <img src={item} alt="image" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
