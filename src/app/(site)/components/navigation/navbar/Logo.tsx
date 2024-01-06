'use client'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/images/logo.png" alt="Logo" width={50} height={0} />
    </Link>
  )
}

export default Logo
