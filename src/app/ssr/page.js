import Content from "@/components/content";
import { API_KEY } from "@/constants";
import styles from "../page.module.css";
import SSRReload from "@/components/ssrReload";
import { imageUrlToBase64 } from "@/helpers";

async function getData() {
  // Exercise 1 - Fetch the data here...
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1&thumbs=true`,
    { cache: "no-cache" }
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const [json] = await response.json();

  // Exercise 2 - Optimize the image loading here...
  let imageData = await imageUrlToBase64(json.url);
  json.image = imageData;
  // Uncomment this when you're ready
  return json;
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
