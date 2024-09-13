import Image from 'next/image';
import Link from 'next/link';
import profileImage from '@/../public/images/profile.png';
export default function Hero() {
  return (
    <section className='flex flex-col p-10 border-2 justify-center items-center gap-12'>
      <div>
        <Image
          className='rounded-full mx-auto' 
          src={profileImage} 
          alt='avatar of the author' 
          width={50} 
          height={50}
        />
      </div>
    </section>
  )
}
