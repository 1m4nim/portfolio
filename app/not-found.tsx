import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとしたページは今、一生懸命作っています
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
    </div>
  );
}
