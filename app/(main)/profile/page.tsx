"use client"

import React, { useState } from 'react'
import Container_md from '@/components/container_md'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        name: 'Alex Johnson',
        email: 'alex.johnson@example.com',
        title: 'Senior UX Designer',
        location: 'San Francisco, CA',
        bio: 'Experienced UX designer with 8+ years in creating user-centered digital products. Specialized in SaaS platforms and mobile applications.',
        skills: 'UI/UX Design, User Research, Prototyping, Figma, Adobe XD',
        website: 'https://alexjohnson.design',
        twitter: '@alexjohnson',
        linkedin: 'linkedin.com/in/alexjohnson'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsEditing(false)
        // In a real app, you would save the data to your backend here
    }

    return (
        <div className='min-h-screen py-8'>
            <Container_md>
                <div className='max-w-4xl mx-auto'>
                    <div className='mb-8'>
                        <h1 className='text-3xl font-bold mb-2'>Profile</h1>
                        <p className='text-foreground/70'>
                            {isEditing ? 'Update your profile information' : 'Your personal profile information'}
                        </p>
                    </div>

                    <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                        <div className='flex justify-between items-start mb-8'>
                            <div className='flex items-center gap-4'>
                                <Avatar className='h-16 w-16'>
                                    <AvatarImage src='https://github.com/shadcn.png' />
                                    <AvatarFallback>AJ</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h2 className='text-xl font-semibold'>{formData.name}</h2>
                                    <p className='text-foreground/70'>{formData.title}</p>
                                </div>
                            </div>
                            {!isEditing ? (
                                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                            ) : (
                                <div className='flex gap-2'>
                                    <Button variant='outline' onClick={() => setIsEditing(false)}>Cancel</Button>
                                    <Button onClick={handleSubmit}>Save Changes</Button>
                                </div>
                            )}
                        </div>

                        {isEditing ? (
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div>
                                        <label htmlFor='name' className='block text-sm font-medium mb-1'>
                                            Full Name
                                        </label>
                                        <Input
                                            id='name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='email' className='block text-sm font-medium mb-1'>
                                            Email
                                        </label>
                                        <Input
                                            id='email'
                                            name='email'
                                            type='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='title' className='block text-sm font-medium mb-1'>
                                            Professional Title
                                        </label>
                                        <Input
                                            id='title'
                                            name='title'
                                            value={formData.title}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='location' className='block text-sm font-medium mb-1'>
                                            Location
                                        </label>
                                        <Input
                                            id='location'
                                            name='location'
                                            value={formData.location}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='bio' className='block text-sm font-medium mb-1'>
                                        Bio
                                    </label>
                                    <Textarea
                                        id='bio'
                                        name='bio'
                                        value={formData.bio}
                                        onChange={handleChange}
                                        rows={4}
                                    />
                                </div>

                                <div>
                                    <label htmlFor='skills' className='block text-sm font-medium mb-1'>
                                        Skills
                                    </label>
                                    <Input
                                        id='skills'
                                        name='skills'
                                        value={formData.skills}
                                        onChange={handleChange}
                                        placeholder='Separate skills with commas'
                                    />
                                </div>

                                <div className='grid md:grid-cols-3 gap-6'>
                                    <div>
                                        <label htmlFor='website' className='block text-sm font-medium mb-1'>
                                            Website
                                        </label>
                                        <Input
                                            id='website'
                                            name='website'
                                            value={formData.website}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='twitter' className='block text-sm font-medium mb-1'>
                                            Twitter
                                        </label>
                                        <Input
                                            id='twitter'
                                            name='twitter'
                                            value={formData.twitter}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='linkedin' className='block text-sm font-medium mb-1'>
                                            LinkedIn
                                        </label>
                                        <Input
                                            id='linkedin'
                                            name='linkedin'
                                            value={formData.linkedin}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <div className='space-y-6'>
                                <div>
                                    <h3 className='text-sm font-medium text-foreground/70 mb-1'>About</h3>
                                    <p>{formData.bio}</p>
                                </div>

                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div>
                                        <h3 className='text-sm font-medium text-foreground/70 mb-1'>Contact</h3>
                                        <p>{formData.email}</p>
                                    </div>
                                    <div>
                                        <h3 className='text-sm font-medium text-foreground/70 mb-1'>Location</h3>
                                        <p>{formData.location}</p>
                                    </div>
                                    <div>
                                        <h3 className='text-sm font-medium text-foreground/70 mb-1'>Skills</h3>
                                        <div className='flex flex-wrap gap-2'>
                                            {formData.skills.split(',').map((skill, index) => (
                                                <span key={index} className='bg-background border border-foreground/10 px-3 py-1 rounded-full text-sm'>
                                                    {skill.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className='text-sm font-medium text-foreground/70 mb-2'>Links</h3>
                                    <div className='flex gap-4'>
                                        {formData.website && (
                                            <a href={formData.website} target='_blank' rel='noopener noreferrer' className='flex items-center gap-1 text-primary hover:underline'>
                                                <i className="fi fi-rr-globe"></i>
                                                <span>Website</span>
                                            </a>
                                        )}
                                        {formData.twitter && (
                                            <a href={`https://twitter.com/${formData.twitter.replace('@', '')}`} target='_blank' rel='noopener noreferrer' className='flex items-center gap-1 text-primary hover:underline'>
                                                <i className="fi fi-brands-twitter-alt"></i>
                                                <span>Twitter</span>
                                            </a>
                                        )}
                                        {formData.linkedin && (
                                            <a href={`https://${formData.linkedin}`} target='_blank' rel='noopener noreferrer' className='flex items-center gap-1 text-primary hover:underline'>
                                                <i className="fi fi-brands-linkedin"></i>
                                                <span>LinkedIn</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {!isEditing && (
                        <div className='mt-6 grid md:grid-cols-2 gap-6'>
                            <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                                <h3 className='text-lg font-semibold mb-4'>Resume</h3>
                                <div className='flex items-center justify-between p-4 border border-foreground/10 rounded-md mb-4'>
                                    <div className='flex items-center gap-3'>
                                        <i className="fi fi-rr-file text-2xl"></i>
                                        <div>
                                            <p className='font-medium'>Alex_Johnson_Resume.pdf</p>
                                            <p className='text-sm text-foreground/70'>Uploaded on May 12, 2023</p>
                                        </div>
                                    </div>
                                    <Button variant='outline' size='sm'>Update</Button>
                                </div>
                                <Button variant='outline' className='w-full'>Download Resume</Button>
                            </div>

                            <div className='bg-background border border-foreground/10 rounded-lg p-6'>
                                <h3 className='text-lg font-semibold mb-4'>Account Settings</h3>
                                <div className='space-y-4'>
                                    <Button variant='outline' className='w-full'>Change Password</Button>
                                    <Button variant='outline' className='w-full'>Two-Factor Authentication</Button>
                                    <Button variant='outline' className='w-full text-red-600 hover:text-red-600'>Delete Account</Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container_md>
        </div>
    )
}

export default ProfilePage