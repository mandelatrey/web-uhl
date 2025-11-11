'use client';

import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    category: 'ANNOUNCEMENTS',
    title: 'Introducing Agribridge',
    description: 'Meet the innovators connecting farmers, traders, and dreamers through digital tools that make opportunities accessible to all.',
    image: '/images/background-image1.jpg',
    featured: true,
    slug: '/projects/agribridge'
  },
  {
    id: 2,
    category: 'AGRITECH',
    title: 'Seeds of Change: How Tech is Reimagining African Agriculture',
    description: 'From AI-powered irrigation to drone soil analysis, here\'s how innovation is fueling a new green revolution across the continent.',
    image: '/images/background-image2.jpg',
    featured: false,
    slug: 'seeds-of-change-tech-reimagining-african-agriculture'
  },
  {
    id: 3,
    category: 'WATER & SANITATION',
    title: 'Water is Wealth: The Untold Power of Clean Water Access',
    description: 'Behind every thriving village is a well that never runs dry, discover how sustainable water projects are transforming livelihoods.',
    image: '/images/background-image3.jpg',
    featured: false,
    slug: 'water-is-wealth-clean-water-access'
  },
  {
    id: 4,
    category: 'ENTREPRENEURSHIP',
    title: 'From Soil to Success: The Rise of Farmer Entrepreneurs',
    description: 'A new generation of East African farmers isn\'t just growing crops, they\'re building sustainable businesses and reshaping the economy.',
    image: '/images/background-image4.jpg',
    featured: false,
    slug: 'from-soil-to-success-farmer-entrepreneurs'
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="w-full h-full py-16 px-4 mb-15">
      <div className="container w-[90%] mx-auto flex flex-col items-center gap-y-12">
        {/* Header */}
        <div className="flex flex-col gap-y-3">
          <h1 className='section-title'>Blog</h1>
          <p className="text-center text-md/tight lg:text-lg font-light max-w-sm lg:max-w-lg">
            Read about some of our work here
          </p>
        </div>

        {/* Grid Layout */}
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured Post - Left Side */}
          {featuredPost && (
            <Link 
              href={featuredPost.slug.startsWith('/') ? featuredPost.slug : `/blog/${featuredPost.slug}`}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group block"
            >
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 text-white">
                <span className="text-xs font-semibold tracking-widest text-highlight-green/80 mb-2 md:mb-3 block">
                  {featuredPost.category}
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl text-highlight-green font-regular tracking-tight mb-2 md:mb-3">
                  {featuredPost.title}
                </h3>
                <p className="text-sm md:text-base/tight text-gray-200 mb-4 md:mb-6 lg:max-w-[80%]">
                  {featuredPost.description}
                </p>
                <button className="bg-fruit-green hover:bg-fruit-green/80 text-gray-100 px-4 md:px-6 py-2 rounded text-xs md:text-sm font-semibold transition-all duration-300 ease-in cursor-pointer">
                  READ MORE
                </button>
              </div>
            </Link>
          )}

          {/* Regular Posts - Right Side Grid */}
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:h-[600px] content-between justify-items-center">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={post.slug.startsWith('/') ? post.slug : `/blog/${post.slug}`}
                className="flex flex-col items-center justify-center sm:flex-row gap-3 md:gap-4 bg-highlight-green hover:bg-highlight-green/60 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300 ease-in cursor-pointer group h-full w-full"
              >
                <div className="w-full sm:w-32 md:w-40 lg:w-44 h-40 sm:h-full flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="flex-1 p-6 md:p-5 lg:p-6 flex flex-col justify-center">
                  <span className="text-xs font-semibold tracking-widest text-fruit-green/60 mb-1 md:mb-2 block">
                    {post.category}
                  </span>
                  <h4 className="text-sm md:text-base lg:text-lg/tight font-bold tracking-tight mb-1 md:mb-2 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700 line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog