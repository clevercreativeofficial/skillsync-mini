"use client"

import React from 'react'
import Container_lg from '@/components/container_lg'
import Container_md from '@/components/container_md'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HomePage = () => {
    return (
        <div className='min-h-screen'>
            {/* Hero Section */}
            <section className='py-20 bg-gradient-to-b from-background to-foreground/5'>
                <Container_lg>
                    <div className='flex flex-col items-center text-center gap-8'>
                        <h1 className='title text-5xl font-bold leading-tight'>
                            Find Your Dream <span className='text-primary'>Job</span> or <span className='text-primary'>Talent</span>
                        </h1>
                        <p className='text-xl text-foreground/70 max-w-2xl'>
                            SkillSync connects top talent with innovative companies. Whether you&apos;re hiring or looking for your next opportunity, we&apos;ve got you covered.
                        </p>
                        <div className='flex gap-4'>
                            <Link href='/jobs'>
                                <Button>Browse Jobs</Button>
                            </Link>
                            <Link href='/register'>
                                <Button className='bg-foreground text-background hover:bg-foreground/90'>
                                    Post a Job
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container_lg>
            </section>

            {/* Features Section */}
            <section className='py-20'>
                <Container_md>
                    <div className='grid md:grid-cols-3 gap-8'>
                        <div className='bg-background border border-foreground/10 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                            <div className='text-4xl mb-4'>
                              <i className="fi fi-rr-briefcase"></i>
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>Fast Hiring</h3>
                            <p className='text-foreground/70'>Connect with qualified candidates in days, not weeks.</p>
                        </div>
                        <div className='bg-background border border-foreground/10 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                            <div className='text-4xl mb-4'>
                              <i className="fi fi-rr-search"></i>
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>Smart Matching</h3>
                            <p className='text-foreground/70'>Our algorithm matches you with the most relevant opportunities.</p>
                        </div>
                        <div className='bg-background border border-foreground/10 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                            <div className='text-4xl mb-4'>
                              <i className="fi fi-rr-users"></i>
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>Diverse Roles</h3>
                            <p className='text-foreground/70'>From startups to enterprises across all industries.</p>
                        </div>
                    </div>
                </Container_md>
            </section>

            {/* Recent Jobs Preview */}
            <section className='py-20 bg-gradient-to-b from-foreground/5 to-background'>
                <Container_md>
                    <div className='flex justify-between items-center mb-8'>
                        <h2 className='title text-3xl font-bold'>Recent Job Listings</h2>
                        <Link href='/jobs'>
                            <Button variant='outline'>View All Jobs</Button>
                        </Link>
                    </div>
                    
                    <div className='grid md:grid-cols-2 gap-6'>
                        {/* Sample job cards - these would be dynamic in a real app */}
                        {[1, 2, 3, 4].map((job) => (
                            <div key={job} className='border border-foreground/10 rounded-lg p-6 hover:shadow-md transition-shadow'>
                                <div className='flex justify-between items-start mb-4'>
                                    <div>
                                        <h3 className='text-xl font-semibold'>Senior Frontend Developer</h3>
                                        <p className='text-foreground/70'>TechCorp Inc.</p>
                                    </div>
                                    <span className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm'>Remote</span>
                                </div>
                                <p className='mb-4 line-clamp-2'>We&apos;re looking for an experienced frontend developer to join our team working with React, TypeScript, and Next.js.</p>
                                <div className='flex justify-between items-center'>
                                    <span className='text-primary font-medium'>$90,000 - $120,000</span>
                                    <Link href='/jobs/1'>
                                        <Button variant='outline' size='sm' className='hover:bg-unset hover:text-primary'>View Details</Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container_md>
            </section>
        </div>
    )
}

export default HomePage