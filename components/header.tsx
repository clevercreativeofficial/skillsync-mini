"use client"

import React from 'react'
import Container_lg from '@/components/container_lg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const header = () => {
    const path = usePathname()
    return (
        <nav className='sticky top-0 w-full bg-background text-foreground py-6'>
            <Container_lg>
                <div className='flex items-center justify-between border-b border-foreground/10 pb-6'>
                    <h1 className='title'>Skillsync <span className='text-foreground'>Mini</span></h1>
                    <ul className='hidden sm:flex items-center gap-8'>
                        <Link href='/'>
                            <li className={`${path === '/' ? 'text-primary' : ''}`}><i className="fi fi-rr-home"></i>Home</li>
                        </Link>
                        <Link href='/jobs'>
                            <li className={`${path === '/jobs' ? 'text-accent' : ''}`}>Explore Jobs</li>
                        </Link>
                        <div className='flex items-center gap-4'>
                            <Button>Login</Button>
                            <Button className='bg-foreground'>Register</Button>
                        </div>
                    </ul>
                </div>
            </Container_lg>
        </nav>
    )
}

export default header