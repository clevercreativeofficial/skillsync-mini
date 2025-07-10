"use client"

import React from 'react'
import Container_lg from '@/components/container_lg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const path = usePathname()
    return (
        <nav className='sticky top-0 w-full bg-background text-foreground z-50'>
            <Container_lg>
                <div className='flex items-center justify-between border-b border-foreground/10 py-6'>
                    <Link href='/'>
                        <span className='block relative'>
                            <h1 className='title text-3xl z-50 text-primary'>
                                Skill<span className='text-foreground'>Sync.</span>
                            </h1>
                            <small className='uppercase absolute -top-1 -right-6  text-foreground'>mini</small>
                        </span>
                    </Link>
                    <ul className='sm:relative w-full sm:w-fit fixed top-0 left-0 bg-background sm:px-0 sm:py-0 px-4 py-20 sm:flex sm:flex-row flex-col items-center gap-12 sm:gap-8'>
                        <Link href='/'>
                            <li className={`${path === '/' ? 'text-primary' : ''}`}>Home</li>
                        </Link>
                        <Link href='/jobs'>
                            <li className={`${path === '/jobs' ? 'text-accent' : ''}`}>Explore Jobs</li>
                        </Link>
                        <div className='flex sm:flex-row flex-col items-center gap-4'>
                            <Link href='/login'>
                                <Button className='sm:w-fit w-full'>Login</Button>
                            </Link>
                            <Link href='/sign-up'>
                                <Button className='sm:w-fit w-full bg-foreground'>Sign Up</Button>
                            </Link>
                        </div>
                    </ul>
                    <div className='sm:hidden'>
                        <i className="fi fi-rr-menu-burger text-2xl cursor-pointer"></i>
                    </div>
                </div>
            </Container_lg>
        </nav>
    )
}

export default Header