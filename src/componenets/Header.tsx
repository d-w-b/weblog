import Link from 'next/link';
import Image from 'next/image';
import profileImage from '@/../public/images/profile.png';

export default function Header() {

  return (
    <header className='sticky top-0 flex flex-row justify-between items-center py-4 text-sm bg-white z-10'>
      <div className="header_left flex flex-row items-center gap-12">
        <Link href = "/" className='flex flex-row items-center text-xl font-bold gap-1'>
          <Image src={profileImage} alt="EJ" width={16} height={16}/>
          EJ
        </Link>
        <div className="header_main">
          
        </div>
      </div>
      <div className="header_right">
        <nav className='flex gap-8 font-semibold text-neutral-700'>
          <Link href="/posts">Posts</Link>
          <Link href="/docs/cplusplus">
            Docs
          </Link>
          <Link href="/contact">Contact</Link>
        </nav>
        
      </div>
      
    </header>
  )
}
