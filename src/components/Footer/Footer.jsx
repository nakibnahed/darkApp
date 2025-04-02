import Image from "next/image";
import styles from "./footer.module.css";

import { social_media } from "./data";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2025 Nahed. All Right Reserved.</div>
      <div className={styles.social}>
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons/${media.name}.png`}
            width={20}
            height={20}
            className={styles.icon}
            alt={`Nahed Nakib ${media.name} Link `}
          />
        ))}
      </div>
    </div>
  );
}
