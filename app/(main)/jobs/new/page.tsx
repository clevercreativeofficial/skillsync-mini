"use client"

import React, { useState } from 'react'
import Container_md from '@/components/container_md'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const PostJobPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        type: '',
        salary: '',
        description: '',
        responsibilities: '',
        requirements: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate API call
        setTimeout(() => {
            console.log('Job posted:', formData)
            setIsSubmitting(false)
            setSuccess(true)
        }, 1500)
    }

    if (success) {
        return (
            <div className='min-h-screen flex items-center justify-center py-12'>
                <Container_md>
                    <div className='max-w-md mx-auto bg-background border border-foreground/10 rounded-lg p-8 text-center'>
                        <div className='text-6xl mb-4'>🎉</div>
                        <h1 className='text-2xl font-bold mb-2'>Job Posted Successfully!</h1>
                        <p className='text-foreground/70 mb-6'>Your job listing is now live and visible to potential candidates.</p>
                        <div className='space-y-3'>
                            <Link href='/dashboard/jobs'>
                                <Button className='w-full'>View Your Jobs</Button>
                            </Link>
                            <Link href='/jobs/new'>
                                <Button variant='outline' className='w-full'>Post Another Job</Button>
                            </Link>
                        </div>
                    </div>
                </Container_md>
            </div>
        )
    }

    return (
        <div className='min-h-screen py-12'>
            <Container_md>
                <div className='max-w-3xl mx-auto'>
                    <div className='mb-8'>
                        <Link href='/dashboard' className='text-foreground/70 hover:text-foreground flex items-center gap-1 mb-4'>
                            <i className="fi fi-rr-arrow-small-left"></i>
                            Back to Dashboard
                        </Link>
                        <h1 className='text-3xl font-bold mb-2'>Post a New Job</h1>
                        <p className='text-foreground/70'>Fill out the form below to create your job listing.</p>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                            <h2 className='text-xl font-semibold mb-4'>Basic Information</h2>
                            
                            <div className='grid md:grid-cols-2 gap-6'>
                                <div>
                                    <label htmlFor='title' className='block text-sm font-medium mb-1'>
                                        Job Title *
                                    </label>
                                    <Input
                                        id='title'
                                        name='title'
                                        placeholder='e.g. Senior Frontend Developer'
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='company' className='block text-sm font-medium mb-1'>
                                        Company Name *
                                    </label>
                                    <Input
                                        id='company'
                                        name='company'
                                        placeholder='Your company name'
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='location' className='block text-sm font-medium mb-1'>
                                        Location *
                                    </label>
                                    <Input
                                        id='location'
                                        name='location'
                                        placeholder='e.g. Remote, New York, NY'
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='type' className='block text-sm font-medium mb-1'>
                                        Job Type *
                                    </label>
                                    <Select 
                                        onValueChange={(value) => setFormData({...formData, type: value})}
                                        required
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select job type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Full-time">Full-time</SelectItem>
                                            <SelectItem value="Part-time">Part-time</SelectItem>
                                            <SelectItem value="Contract">Contract</SelectItem>
                                            <SelectItem value="Internship">Internship</SelectItem>
                                            <SelectItem value="Temporary">Temporary</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label htmlFor='salary' className='block text-sm font-medium mb-1'>
                                        Salary Range
                                    </label>
                                    <Input
                                        id='salary'
                                        name='salary'
                                        placeholder='e.g. $90,000 - $120,000'
                                        value={formData.salary}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                            <h2 className='text-xl font-semibold mb-4'>Job Details</h2>
                            
                            <div className='space-y-6'>
                                <div>
                                    <label htmlFor='description' className='block text-sm font-medium mb-1'>
                                        Job Description *
                                    </label>
                                    <Textarea
                                        id='description'
                                        name='description'
                                        placeholder='Describe the role and responsibilities...'
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='responsibilities' className='block text-sm font-medium mb-1'>
                                        Key Responsibilities
                                    </label>
                                    <Textarea
                                        id='responsibilities'
                                        name='responsibilities'
                                        placeholder='List the main responsibilities (one per line)...'
                                        value={formData.responsibilities}
                                        onChange={handleChange}
                                        rows={5}
                                    />
                                    <p className='text-xs text-foreground/50 mt-1'>Separate each responsibility with a new line</p>
                                </div>

                                <div>
                                    <label htmlFor='requirements' className='block text-sm font-medium mb-1'>
                                        Requirements
                                    </label>
                                    <Textarea
                                        id='requirements'
                                        name='requirements'
                                        placeholder='List the requirements (one per line)...'
                                        value={formData.requirements}
                                        onChange={handleChange}
                                        rows={5}
                                    />
                                    <p className='text-xs text-foreground/50 mt-1'>Separate each requirement with a new line</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end gap-4'>
                            <Link href='/dashboard'>
                                <Button variant='outline' type='button'>Cancel</Button>
                            </Link>
                            <Button type='submit' disabled={isSubmitting}>
                                {isSubmitting ? 'Posting Job...' : 'Post Job'}
                            </Button>
                        </div>
                    </form>
                </div>
            </Container_md>
        </div>
    )
}

export default PostJobPage