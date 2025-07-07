import React from 'react'
import Container_lg from '@/components/container_lg'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    
    <main>
      <div className='w-full min-h-screen'>
        <Container_lg>
          <div className='min-h-60 bg-primary/10 flex flex-col my-10 px-10 py-10 sm:p-20 rounded-4xl'>
            <h1 className='max-w-[900px] title text-3xl sm:text-6xl text-foreground'>
              Rapidly build modern websites.
            </h1>
            <p className='max-w-[700px] text-foreground my-6 text-lg'>
              A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
            </p>
            <Button className='max-w-[200px]'>
              Explore Now
              <i className="fi fi-rr-arrow-small-right"></i>
            </Button>
          </div>
        </Container_lg>
      </div>
    </main>
  )
}

export default page