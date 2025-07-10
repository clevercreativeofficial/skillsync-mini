import React from 'react'
import Container_lg from '@/components/container_lg'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='sticky top-0 w-full bg-background text-foreground py-6'>
            <Container_lg>
                <div className='flex items-center justify-center border-t border-foreground/10 pt-6'>
                    <div className='flex flex-col items-center text-center gap-2'>
                        <Link href='/'>
                            <span className='block relative'>
                                <h1 className='title text-3xl text-primary'>
                                    Skill<span className='text-foreground'>Sync.</span>
                                </h1>
                                <small className='uppercase absolute -top-1 -right-6  text-foreground'>mini</small>
                            </span>
                        </Link>
                        <p className='text-sm text-foreground/70'>
                            © {new Date().getFullYear()} Skillsync Mini. All rights reserved.
                            <br />
                            Made with <i className="fi fi-sr-heart text-primary"></i> by Clever Creative
                        </p>
                    </div>
                </div>
            </Container_lg>
        </footer>
    )
}

export default Footer