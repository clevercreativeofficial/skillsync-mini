"use client"

import React from 'react'
import Container_md from '@/components/container_md'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const JobDetailsPage = ({ params }: { params: { jobId: string } }) => {
    // In a real app, you'd fetch this data based on the jobId
    const job = {
        id: params.jobId,
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        location: 'Remote',
        type: 'Full-time',
        salary: '$90,000 - $120,000',
        description: 'We\'re looking for an experienced frontend developer to join our team working with React, TypeScript, and Next.js.',
        postedDate: '2023-05-15',
        responsibilities: [
            'Develop and maintain high-quality web applications using React and TypeScript',
            'Collaborate with designers to implement pixel-perfect UIs',
            'Optimize applications for maximum performance and scalability',
            'Participate in code reviews and mentor junior developers'
        ],
        requirements: [
            '5+ years of professional frontend development experience',
            'Expertise in React, TypeScript, and modern JavaScript',
            'Experience with Next.js or similar frameworks',
            'Strong understanding of responsive design and CSS-in-JS',
            'Excellent problem-solving and communication skills'
        ]
    }

    return (
        <div className='min-h-screen py-12'>
            <Container_md>
                <div className='mb-8'>
                    <Link href='/jobs' className='text-foreground/70 hover:text-foreground flex items-center gap-1 mb-4'>
                        <i className="fi fi-rr-arrow-small-left"></i>
                        Back to all jobs
                    </Link>
                    <div className='flex justify-between items-start'>
                        <div>
                            <h1 className='text-3xl font-bold mb-2'>{job.title}</h1>
                            <p className='text-xl text-foreground/70 mb-4'>{job.company} • {job.location}</p>
                            <div className='flex gap-2'>
                                <span className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm'>{job.type}</span>
                                <span className='bg-accent/10 text-accent px-3 py-1 rounded-full text-sm'>{job.salary}</span>
                            </div>
                        </div>
                        <Button className='bg-foreground hover:bg-foreground/90'>Apply Now</Button>
                    </div>
                </div>

                <div className='grid md:grid-cols-3 gap-8'>
                    <div className='md:col-span-2'>
                        <div className='bg-background border border-foreground/10 rounded-lg p-6 mb-6'>
                            <h2 className='text-xl font-semibold mb-4'>Job Description</h2>
                            <p className='mb-6'>{job.description}</p>

                            <h3 className='text-lg font-semibold mb-3'>Responsibilities</h3>
                            <ul className='space-y-2 mb-6'>
                                {job.responsibilities.map((item, index) => (
                                    <li key={index} className='flex items-start gap-2'>
                                        <span>•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className='text-lg font-semibold mb-3'>Requirements</h3>
                            <ul className='space-y-2'>
                                {job.requirements.map((item, index) => (
                                    <li key={index} className='flex items-start gap-2'>
                                        <span>•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                            <h2 className='text-xl font-semibold mb-4'>How to Apply</h2>
                            <p className='mb-4'>Please submit your resume and a cover letter explaining why you&apos;d be a great fit for this position.</p>
                            <Button className='bg-foreground hover:bg-foreground/90 w-full'>Apply Now</Button>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                            <h3 className='font-semibold mb-4'>About {job.company}</h3>
                            <p className='text-foreground/70 mb-4'>TechCorp Inc. is a leading technology company specializing in innovative software solutions for businesses worldwide.</p>
                            <Button variant='outline' className='w-full'>View Company Profile</Button>
                        </div>

                        <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                            <h3 className='font-semibold mb-4'>Job Details</h3>
                            <div className='space-y-3'>
                                <div className='flex justify-between'>
                                    <span className='text-foreground/70'>Posted</span>
                                    <span>{new Date(job.postedDate).toLocaleDateString()}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-foreground/70'>Job Type</span>
                                    <span>{job.type}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-foreground/70'>Location</span>
                                    <span>{job.location}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-foreground/70'>Salary</span>
                                    <span className='text-accent'>{job.salary}</span>
                                </div>
                            </div>
                        </div>

                        <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                            <h3 className='font-semibold mb-4'>Share This Job</h3>
                            <div className='flex gap-2'>
                                <Button variant='outline' size='icon'>
                                    <i className="fi fi-brands-twitter"></i>
                                </Button>
                                <Button variant='outline' size='icon'>
                                    <i className="fi fi-brands-linkedin"></i>
                                </Button>
                                <Button variant='outline' size='icon'>
                                    <i className="fi fi-brands-facebook"></i>
                                </Button>
                                <Button variant='outline' size='icon'>
                                    <i className="fi fi-brands-instagram"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container_md>
        </div>
    )
}

export default JobDetailsPage