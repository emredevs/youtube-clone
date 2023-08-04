import YoutubeVideos from "@/components/youtube-videos";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <YoutubeVideos />
    </main>
  );
}
