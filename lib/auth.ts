// lib/auth.ts
import { supabase } from './supabaseClient'

export async function signUpWithEmail(email: string, password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    return { error: { message: 'Passwords do not match' } }
  }

  if (password.length < 6) {
    return { error: { message: 'Password must be at least 6 characters' } }
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/confirm`
    }
  })

  return { error }
}

export async function signInWithEmail(email: string, password: string) {
  if (!password) {
    return { error: { message: 'Password is required' } }
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  return { error }
}

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
  return { error }
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut()
  return { error }
}
