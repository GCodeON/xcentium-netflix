import { Inter } from 'next/font/google'
import '@/scss/global.scss';
import Navbar from '@/components/nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XCentium | Netflix App',
  description: 'NEXT.js Movie App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
