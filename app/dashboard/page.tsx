"use client"

import React from 'react'
import Container_lg from '@/components/container_lg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const DashboardPage = () => {
    // Sample data - in a real app this would come from your API
    const stats = [
        { name: 'Posted Jobs', value: 5, change: '+2', changeType: 'positive' },
        { name: 'Applications', value: 24, change: '+8', changeType: 'positive' },
        { name: 'Active Listings', value: 3, change: '-1', changeType: 'negative' },
        { name: 'Profile Views', value: 42, change: '+12', changeType: 'positive' },
    ]

    const recentJobs = [
        { id: 1, title: 'Senior Frontend Developer', applications: 8, status: 'active' },
        { id: 2, title: 'UX Designer', applications: 5, status: 'active' },
        { id: 3, title: 'Backend Engineer', applications: 11, status: 'closed' },
    ]

    const recentApplications = [
        { id: 1, jobTitle: 'Product Manager', company: 'InnovateTech', status: 'under review', date: '2023-05-10' },
        { id: 2, jobTitle: 'Data Scientist', company: 'Analytics Corp', status: 'interview', date: '2023-05-05' },
        { id: 3, jobTitle: 'DevOps Engineer', company: 'Cloud Solutions', status: 'applied', date: '2023-04-28' },
    ]

    return (
        <div className='min-h-screen py-8'>
            <Container_lg>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold'>Dashboard</h1>
                    <p className='text-foreground/70'>Welcome back! Here&apos;s what&apos;s happening with your jobs and applications.</p>
                </div>

                {/* Stats Cards */}
                <div className='grid md:grid-cols-4 gap-6 mb-8'>
                    {stats.map((stat, index) => (
                        <div key={index} className='bg-background border border-foreground/10 rounded-lg p-6'>
                            <p className='text-sm text-foreground/70 mb-1'>{stat.name}</p>
                            <div className='flex items-end justify-between'>
                                <p className='text-3xl font-semibold'>{stat.value}</p>
                                <p className={`text-sm ${
                                    stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                                }`}>
                                    {stat.change}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='grid md:grid-cols-2 gap-8'>
                    {/* Recent Jobs Posted */}
                    <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                        <div className='flex justify-between items-center mb-6'>
                            <h2 className='text-xl font-semibold'>Your Recent Jobs</h2>
                            <Link href='/dashboard/jobs'>
                                <Button variant='outline' size='sm'>View All</Button>
                            </Link>
                        </div>
                        
                        <div className='space-y-4'>
                            {recentJobs.map((job) => (
                                <div key={job.id} className='flex justify-between items-center pb-4 border-b border-foreground/10 last:border-0 last:pb-0'>
                                    <div>
                                        <h3 className='font-medium'>{job.title}</h3>
                                        <p className='text-sm text-foreground/70'>{job.applications} applications</p>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                        job.status === 'active' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-gray-100 text-gray-800'
                                    }`}>
                                        {job.status}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className='mt-6'>
                            <Link href='/jobs/new'>
                                <Button className='w-full'>Post a New Job</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Recent Applications */}
                    <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                        <div className='flex justify-between items-center mb-6'>
                            <h2 className='text-xl font-semibold'>Your Recent Applications</h2>
                            <Link href='/dashboard/applications'>
                                <Button variant='outline' size='sm'>View All</Button>
                            </Link>
                        </div>
                        
                        <div className='space-y-4'>
                            {recentApplications.map((app) => (
                                <div key={app.id} className='pb-4 border-b border-foreground/10 last:border-0 last:pb-0'>
                                    <div className='flex justify-between items-start mb-1'>
                                        <h3 className='font-medium'>{app.jobTitle}</h3>
                                        <span className={`px-2 py-1 rounded-full text-xs capitalize ${
                                            app.status === 'under review' 
                                                ? 'bg-blue-100 text-blue-800'
                                                : app.status === 'interview'
                                                ? 'bg-purple-100 text-purple-800'
                                                : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {app.status}
                                        </span>
                                    </div>
                                    <p className='text-sm text-foreground/70 mb-1'>{app.company}</p>
                                    <p className='text-xs text-foreground/50'>Applied on {new Date(app.date).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>

                        <div className='mt-6'>
                            <Link href='/jobs'>
                                <Button variant='outline' className='w-full'>Browse More Jobs</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className='mt-8 bg-background border border-foreground/10 rounded-lg p-6'>
                    <h2 className='text-xl font-semibold mb-4'>Quick Actions</h2>
                    <div className='grid sm:grid-cols-3 gap-4'>
                        <Link href='/jobs/new'>
                            <Button variant='outline' className='w-full h-24 flex flex-col items-center justify-center gap-2'>
                                <i className="fi fi-rr-add text-2xl"></i>
                                <span>Post a Job</span>
                            </Button>
                        </Link>
                        <Link href='/profile'>
                            <Button variant='outline' className='w-full h-24 flex flex-col items-center justify-center gap-2'>
                                <i className="fi fi-rr-user-pen text-2xl"></i>
                                <span>Edit Profile</span>
                            </Button>
                        </Link>
                        <Link href='/jobs'>
                            <Button variant='outline' className='w-full h-24 flex flex-col items-center justify-center gap-2'>
                                <i className="fi fi-rr-search text-2xl"></i>
                                <span>Find Jobs</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container_lg>
        </div>
    )
}

export default DashboardPage