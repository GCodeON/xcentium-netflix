'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
 
  return (
    <header className="container">
      <nav className="logo container">
        <Link href="/">
          <Image className="poster" 
            src='/netflix-logo.svg' 
            alt='netflix logo'
            width={200}
            height={100}
          />
        </Link>
      </nav>
    </header>
  )
}
