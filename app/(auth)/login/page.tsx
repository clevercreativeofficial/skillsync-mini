"use client"

import React, { useState } from 'react'
import Container_lg from '@/components/container_lg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        
        // In a real app, you would handle authentication here
        console.log('Login attempt with:', { email, password })
        
        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            // For demo purposes, we'll just redirect if fields aren't empty
            if (email && password) {
                router.push('/dashboard')
            } else {
                setError('Please enter both email and password')
            }
        }, 1000)
    }

    return (
        <div className='min-h-screen flex items-center justify-center py-12'>
            <Container_lg>
                <div className='max-w-sm mx-auto bg-background border border-foreground/10 rounded-2xl p-8'>
                    <div className='text-center mb-8'>
                        <h1 className='text-3xl font-bold mb-2'>Welcome Back</h1>
                        <p className='text-foreground/70'>Sign in to your SkillSync account</p>
                    </div>

                    {error && (
                        <div className='mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm'>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium mb-1'>
                                Email Address
                            </label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='your@email.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor='password' className='block text-sm font-medium mb-1'>
                                Password
                            </label>
                            <Input
                                id='password'
                                type='password'
                                placeholder='••••••••'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <input
                                    id='remember-me'
                                    type='checkbox'
                                    className='h-4 w-4 rounded accent-primary border-foreground/20 text-primary focus:ring-primary'
                                />
                                <label htmlFor='remember-me' className='ml-2 block text-sm'>
                                    Remember me
                                </label>
                            </div>

                            <Link href='/forgot-password' className='text-sm text-primary hover:underline'>
                                Forgot password?
                            </Link>
                        </div>

                        <Button type='submit' className='w-full' disabled={loading}>
                            {loading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>

                    <div className='mt-6 text-center text-sm'>
                        <p className='text-foreground/70'>
                            Don&apos;t have an account?{' '}
                            <Link href='/sign-up' className='text-primary font-medium hover:underline'>
                                Sign up
                            </Link>
                        </p>
                    </div>

                    <div className='mt-6'>
                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center'>
                                <div className='w-full border-t border-foreground/20'></div>
                            </div>
                            <div className='relative flex justify-center text-sm'>
                                <span className='px-2 bg-background text-foreground/70'>
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className='mt-6 grid grid-cols-2 gap-3'>
                            <Button variant='outline' className='flex items-center justify-center gap-2'>
                                <i className="fi fi-brands-google text-lg"></i>
                                Google
                            </Button>
                            <Button variant='outline' className='flex items-center justify-center gap-2'>
                                <i className="fi fi-brands-github text-lg"></i>
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>
            </Container_lg>
        </div>
    )
}

export default LoginPage