import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/fungi2.jpg",
        width: 350,
        height: 350,
      },
      name: "Minami Yamasaki",
      profile:
        "菌類をこよなく愛する人間です。推しはテングタケ属です。最近になって(2024/01~)本腰を入れてプログラミングを始めました。それまでは、HTML＆CSSばかり触っており、自分のできることしか使わずに成果物を生み出していましたが、「動的なWEBサイトを作りたい」という気持ちが出てきたことをきっかけにJavaScriptに手を出してみたり、今まで知らなかったことを自分なりに解釈して触ってみたりしています。このポートフォリオサイトはNext.jsとMicroCMSをつかって作りました、今まで自分が触ったことのなかった技術を使って作成したので優しい目で見ていただけると嬉しいです。よろしくお願いします。",
      link: "https://github.com/1m4nim",
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      <ul>
        {data.contents.map((introduction) => (
          <li key={introduction.id} className={styles.list}>
            <Image
              src={introduction.image.url}
              alt=""
              width={introduction.image.width}
              height={introduction.image.height}
              className={styles.image}
            />
            <dl>
              <dt className={styles.name}>{introduction.name}</dt>
              <dt className={styles.profile}>{introduction.profile}</dt>
              <dt className={styles.link}>{introduction.link}</dt>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
