import PhotoList from "@/components/PhotoList";


export default async function Home({params:{lang}}) {
  const response = await fetch(`${process.env.BASE_URL}/photos`)
  const photos = await response.json()
  return (
   <>
    <PhotoList photos={photos}/>
   </>
  );
}
