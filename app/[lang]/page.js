import { getDictionary } from "./dictionaries";


export default async function Home({params:{lang}}) {
  const locales = await getDictionary(lang)
  console.log("locales",locales);
  return (
   <div>{locales.save}</div>
  );
}
