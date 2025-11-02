import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-8 pt-32 pb-16">
        <h1 className="section-title">Projects</h1>
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-8">
            Explore our innovative projects that are making a real difference in communities around the world.
          </p>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Our Impact</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                Through strategic partnerships and cutting-edge technology, we develop solutions that 
                address critical challenges in agriculture, community development, and sustainable growth. 
                Each project is designed with local communities to ensure lasting positive impact.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8 mt-12">
              <Link 
                href="/projects/agribridge"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Agribridge</h3>
                <p className="text-base text-gray-700">
                  Connecting farmers with markets and resources through innovative technology solutions. 
                  Agribridge empowers agricultural communities with tools for sustainable farming and 
                  improved market access.
                </p>
                <span className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Learn more →
                </span>
              </Link>

              <Link 
                href="/projects/community-engagement"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Engagement Projects</h3>
                <p className="text-base text-gray-700">
                  Building stronger communities through collaborative initiatives that promote education, 
                  health, and sustainable development. Our engagement programs create lasting partnerships 
                  and empower local leaders.
                </p>
                <span className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Learn more →
                </span>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
