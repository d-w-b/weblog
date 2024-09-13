'use client';

import { usePathname } from 'next/navigation'
import { IoIosArrowForward } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";

export default function DocsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const pathname = usePathname();
    const pathArr = pathname.split('/')
            
    return (
        <>
            <div className="py-3 px-8 bg-gray-100 flex flex-row items-center gap-2 text-sm font-semibold rounded-md">
                {
                    pathArr.map( (path, index) =>{
                            return (
                                <div key={path} className='flex flex-row gap-2 items-center'>
                                    { index === 0 && <GrHomeRounded /> } 
                                    <span>{path}</span>
                                    { index < pathArr.length-1 && <IoIosArrowForward />  }
                                </div>
                            )
                    })
                }
            </div>
            <div>
                {children}
            </div>
        </>
        
    );
  }