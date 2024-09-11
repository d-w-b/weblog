import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex flex-row justify-between items-center py-8'>
      <Link href = "/">
        <h1 className='text-3xl font-bold'>Blog</h1>
      </Link>
      <nav className='flex gap-4 font-semibold'>
        <Link href="/" >Home</Link>
        <Link href="/cplusplus">C++</Link>
      </nav>
    </header>
  )
}
