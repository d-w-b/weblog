import Image from 'next/image';
import profileImage from '@/../public/images/profile.png';
export default function Hero() {
  return (
    <section className='flex flex-row justify-center items-center gap-12'>
      <div>
        <Image
          className='rounded-full mx-auto' 
          src={profileImage} 
          alt='avatar of the author' 
          width={50} 
          height={50}
        />
      </div>
      <div>
        <h2 className='font-bold text-xl'>EJ DEVHUB</h2>
      </div>
    </section>
  )
}
