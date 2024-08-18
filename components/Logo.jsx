import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
        <Image src="/lws_logo.png" alt='Logo' width={100} height={165} />
    </Link>
  )
}
