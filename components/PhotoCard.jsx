import Image from 'next/image';
import Link from 'next/link';

export default function PhotoCard({photo}) {
    console.log("photo url" , photo.url);
  return (
    <Link href={`/photo/${photo.id}`} className='group'>
        <Image src={photo.url} alt={photo.title} width={400} height={500}/>
    </Link>
  )
}
