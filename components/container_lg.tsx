import React from 'react'

interface Props {
  children: React.ReactNode;
}

const page = ({children}:Props) => {
  return (
    <section className='max-w-[1600px] w-full mx-auto px-4'>
        {children}
    </section>
  )
}

export default page