'use client'
import Image from 'next/image';

export default function Navbar() {
 
  return (
    <header className="container">
        <nav className="logo container">
            <Image className="poster" 
                src='/netflix-logo.svg' 
                alt='netflix logo'
                width={200}
                height={100}
            />
        </nav>
    </header>
  )
}
