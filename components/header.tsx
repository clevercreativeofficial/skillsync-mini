"use client"

import React from 'react'
import Container_lg from '@/components/container_lg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const header = () => {
    const path = usePathname()
    return (
        <nav className='sticky top-0 w-full bg-background text-foreground'>
            <Container_lg>
                <div className='flex items-center justify-between border-b border-foreground/10 py-6'>
                    <Link href='/'>
                        <span className='block relative'>
                            <h1 className='title text-3xl'>
                                Skill<span className='text-foreground'>Sync.</span>
                            </h1>
                            <small className='uppercase absolute -top-1 -right-6  text-foreground'>mini</small>
                        </span>
                    </Link>
                    <ul className='hidden sm:flex items-center gap-8'>
                        <Link href='/'>
                            <li className={`${path === '/' ? 'text-primary' : ''}`}>Home</li>
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