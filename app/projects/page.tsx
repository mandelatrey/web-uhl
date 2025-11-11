'use client'

import { motion } from 'motion/react'

export default function ProjectsPage() {
  const projects = [
    {
      index: 1,
      name: "The Listening Campaigns"
    },
    {
      index: 2,
      name: "Economic Empowerment Programs"
    },
    {
      index: 3,
      name: "Enterprise Financing & Investment Linkages"
    },

  ]
  return (
    <section data-navbar-invert="true" className="w-full h-full flex flex-col items-center gap-y-7 pt-25">
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          className="flex flex-col gap-y-3 items-center justify-center pb-12 p-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className='section-title max-w-[70%] md:max-w-full text-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Projects
          </motion.h1>

          <motion.p
            className="text-center text-md/tight lg:text-lg font-light max-w-lg lg:max-w-xl mx-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            "To empower and uplift East African communities through innovative and sustainable solutions that address critical needs in water, income security and health."
          </motion.p>
        </motion.div>

        <div className='flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full px-5 pb-12'>
          {projects.map((project, idx) => (
            <motion.div
              key={project.index}
              className='group relative bg-highlight-green rounded-2xl p-8 flex-1 min-h-[300px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-xl'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className='flex flex-col gap-4'>
                <h3 className='text-2xl font-regular tracking-tight titlecase text-left text-black'>
                  {project.name}
                </h3>
              </div>

              <motion.button
                className='mt-6 px-6 py-3 bg-black text-white rounded-lg font-medium text-left w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
