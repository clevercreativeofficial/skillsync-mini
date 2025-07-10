'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

const ConfirmPage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [message, setMessage] = useState('Confirming your email...')

  useEffect(() => {
    const code = searchParams.get('code')
    const type = searchParams.get('type')

    if (!code || !type) {
      setMessage('Confirmation failed. No code found in the URL.')
      return
    }

    const confirm = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession()
      if (error) {
        setMessage('Confirmation failed. Invalid or expired link.')
      } else {
        setMessage('Email confirmed! Redirecting...')
        setTimeout(() => {
          router.push('/dashboard') // Or wherever you want
        }, 2000)
      }
    }

    confirm()
  }, [searchParams, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-Background rounded-xl shadow-md text-center">
        <h1 className="text-xl font-semibold mb-2">Email Confirmation</h1>
        <p className="text-sm text-foreground/70">{message}</p>
      </div>
    </div>
  )
}

export default ConfirmPage
