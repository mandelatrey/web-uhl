import React from 'react'

const pillars = [
  {
    name: "Water",
    description: "We bring sustainable water solutions to East African communities through safe water infrastructure, conservation practices, and educational programs. Our goal is to empower these communities with reliable water access to support health and foster broader development."
  },
  {
    name: "Income Security",
    description: "Through our initiatives, programs, and projects, we help individuals and  families achieve financial independence and security, laying the  foundation for prosperous and resilient communities."
  },
  {
    name: "Health",
    description: "By fostering healthier environments, we help East African communities thrive and focus on building a brighter future."
  },

]

const Pillars = () => {
  return (
    <section data-navbar-invert="true" className='w-full h-dvh overflow-hidden flex items-center justify-center'>
      <div className='container h-full max-w-[70%] flex flex-col justify-center'>
        <h1 className='section-title mb-8'>Our Pillars</h1>
        <div className='flex flex-col gap-y-8  pt-15'>
          {pillars.map((pillar) => (
            <div key={pillar.name} className='grid grid-cols-2 gap-8 items-start '>
              <h2 className='font-medium text-xl uppercase text-left'>{pillar.name}</h2>
              <p className='text-left'>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars