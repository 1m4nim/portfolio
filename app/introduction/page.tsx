import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/fungi2.jpg",
        width: 350,
        height: 450,
      },
      name: "Minami Yamasaki",
      profile:
        "菌類をこよなく愛する人間です。推しはテングタケ属(Amanita)です。最近になって(2024/01~)本腰を入れてプログラミングを始めました。それまでは、HTML＆CSSばかり触っており、自分のできることしか使わずに成果物を生み出していましたが、「動的なWEBサイトを作りたい」という気持ちが出てきたことをきっかけにJavaScriptに手を出してみたり、今まで知らなかったことを自分なりに解釈して触ってみたりしています。今まで自分が触ったことのなかった技術を使って作成したので優しい目で見ていただけると嬉しいです。よろしくお願いします。",
      address: "fancustard9(@)gmail.com",
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
              <dt className={styles.address}>{introduction.address}</dt>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
