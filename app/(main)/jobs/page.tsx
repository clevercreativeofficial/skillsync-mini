"use client"

import React, { useState } from 'react'
import Container_md from '@/components/container_md'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// import { Input } from '@/components/ui/input'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const JobsPage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [locationFilter, setLocationFilter] = useState('')
    const [jobTypeFilter, setJobTypeFilter] = useState('')

    // In a real app, these would come from your data/API
    const jobs = [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            company: 'TechCorp Inc.',
            location: 'Remote',
            type: 'Full-time',
            salary: '$90,000 - $120,000',
            description: 'We\'re looking for an experienced frontend developer to join our team working with React, TypeScript, and Next.js.'
        },
        {
            id: 2,
            title: 'UX Designer',
            company: 'Creative Solutions',
            location: 'New York, NY',
            type: 'Contract',
            salary: '$70 - $90/hr',
            description: 'Join our design team to create beautiful, user-centered interfaces for our clients.'
        },
        // More job listings...
    ]

    const filteredJobs = jobs.filter(job => {
        return (
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase())
        ) && (
            locationFilter === '' || job.location === locationFilter
        ) && (
            jobTypeFilter === '' || job.type === jobTypeFilter
        )
    })

    return (
        <div className='min-h-screen py-12'>
            <Container_md>
                <div className='mb-8'>
                    <h1 className='title text-4xl font-bold mb-2'>Explore Jobs</h1>
                    <p className='text-foreground/70'>Find your next career opportunity</p>
                </div>

                {/* Search and Filters */}
                {/* <div className='mb-8'>
                    <div className='grid md:grid-cols-4 gap-4 mb-4'>
                        <Input
                            placeholder='Search jobs or companies...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Select onValueChange={setLocationFilter}>
                            <SelectTrigger>
                                <SelectValue placeholder="Location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">All Locations</SelectItem>
                                <SelectItem value="Remote">Remote</SelectItem>
                                <SelectItem value="New York, NY">New York, NY</SelectItem>
                                <SelectItem value="San Francisco, CA">San Francisco, CA</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select onValueChange={setJobTypeFilter}>
                            <SelectTrigger>
                                <SelectValue placeholder="Job Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">All Types</SelectItem>
                                <SelectItem value="Full-time">Full-time</SelectItem>
                                <SelectItem value="Part-time">Part-time</SelectItem>
                                <SelectItem value="Contract">Contract</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className='w-full'>Search</Button>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-foreground/70'>{filteredJobs.length} jobs found</p>
                        <Select>
                            <SelectTrigger className='w-[180px]'>
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="recent">Most Recent</SelectItem>
                                <SelectItem value="salary-high">Salary (High to Low)</SelectItem>
                                <SelectItem value="salary-low">Salary (Low to High)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div> */}

                {/* Job Listings */}
                <div className='grid md:grid-cols-2 gap-6'>
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <div key={job.id} className='border border-foreground/10 rounded-lg p-6 hover:shadow-md transition-shadow'>
                                <div className='flex justify-between items-start mb-4'>
                                    <div>
                                        <h3 className='text-xl font-semibold'>{job.title}</h3>
                                        <p className='text-foreground/70'>{job.company}</p>
                                    </div>
                                    <span className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm'>{job.location}</span>
                                </div>
                                <p className='mb-4 line-clamp-2'>{job.description}</p>
                                <div className='flex justify-between items-center'>
                                    <div className='space-x-2'>
                                        <span className='bg-background px-3 py-1 rounded-full text-sm'>{job.type}</span>
                                        <span className='text-accent font-medium'>{job.salary}</span>
                                    </div>
                                    <Link href={`/jobs/${job.id}`}>
                                        <Button variant='outline' size='sm'>View Details</Button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='col-span-2 text-center py-12'>
                            <p className='text-foreground/70'>No jobs match your search criteria.</p>
                            <Button variant='link' onClick={() => {
                                setSearchTerm('')
                                setLocationFilter('')
                                setJobTypeFilter('')
                            }}>
                                Clear filters
                            </Button>
                        </div>
                    )}
                </div>
            </Container_md>
        </div>
    )
}

export default JobsPage