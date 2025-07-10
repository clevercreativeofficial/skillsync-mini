// app/auth/layout.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (

        <div className="w-full h-screen flex md:flex-row flex-col">
            <div className="md:flex hidden flex-col justify-center items-center flex-1 lg:flex-2 bg-accent">
                <h1 className="title sm:text-4xl text-2xl font-bold mb-4">Welcome to Skillsync</h1>
                <p className="text-sm text-foreground/70 mb-6">
                    Please sign in or create an account to continue.
                </p>
            </div>
            <div className="relative flex-1 bg-accent/10">
                <Link href="/">
                    <Button variant={'ghost'} className="absolute top-4 left-4">
                        <i className="fi fi-rr-arrow-small-left"></i>
                        Back to Home
                    </Button>
                </Link>
                {children}
            </div>
        </div>
    );
}
