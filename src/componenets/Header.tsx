import Link from 'next/link';
import Image from 'next/image';
import profileImage from '@/../public/images/profile.png';

export default function Header() {

  return (
    <header className='sticky top-0 flex flex-row justify-between items-center py-4 text-sm bg-white z-10'>
      <div className="header_left flex flex-row items-center gap-12">
        <Link href = "/" className='flex flex-row items-center text-xl font-bold gap-1 bg-gray-50 px-8 py-2 rounded-md shadow-md'>
          <Image src={profileImage} alt="EJ" width={16} height={16}/>
          EJ
        </Link>
        <div className="header_main">
          
        </div>
      </div>
      <div className="header_right">
        <nav className='flex gap-2 font-semibold text-neutral-700'>
          <Link className='shadow-md bg-gray-100 rounded-md px-3 py-2' href="/posts">Posts</Link>
          <Link className='shadow-md bg-gray-100 rounded-md px-3 py-2' href="/docs/cplusplus">
            Docs
          </Link>
          <Link className='shadow-md bg-gray-100 rounded-md px-3 py-2' href="/contact">Contact</Link>
        </nav>
        
      </div>
      
    </header>
  )
}
