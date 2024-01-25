import Content from "@/components/content";
import { API_KEY } from "@/constants";
import styles from "../page.module.css";
import SSRReload from "@/components/ssrReload";
import { imageUrlToBase64 } from "@/helpers";

async function getData() {
  // Exercise 1 - Fetch the data here...
  //
  //
  // Exercise 2 - Optimize the image loading here...
  //
  //
  // Uncomment this when you're ready
  // return json
}

export default async function SSR() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.title}>SERVER-SIDE RENDERED</div>
      <SSRReload />
      {data ? <Content data={data} /> : <div>Loading...</div>}
    </main>
  );
}
