export default function CommunityEngagementPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-8 pt-32 pb-16">
        <h1 className="section-title">Community Engagement Projects</h1>
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-8">
            Building stronger communities through collaborative initiatives that promote education, health, and sustainable development.
          </p>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Project Overview</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                Our Community Engagement Projects focus on empowering local communities through 
                participatory programs that address education, healthcare, economic development, 
                and social cohesion. By partnering with community leaders and organizations, we 
                create sustainable initiatives that foster long-term positive change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Program Goals</h2>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <ul className="space-y-4 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span>Strengthen community capacity through leadership development and skills training programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span>Improve access to quality education and healthcare services in underserved areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span>Foster economic opportunities through entrepreneurship support and vocational training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span>Promote social cohesion and inclusive participation in community decision-making</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <p className="text-gray-700">Active Communities</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                  <p className="text-gray-700">Lives Impacted</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-gray-700">Local Partners</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Community Programs</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Education and Youth Development</h3>
                  <p className="text-base text-gray-700">
                    Comprehensive programs that provide educational resources, mentorship, and after-school 
                    activities for children and youth. We work with schools and community centers to create 
                    safe learning environments and support academic achievement while developing life skills 
                    and leadership capabilities.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Health and Wellness Initiatives</h3>
                  <p className="text-base text-gray-700">
                    Community health programs that improve access to preventive care, health education, 
                    and wellness services. Through partnerships with local health providers, we organize 
                    health screenings, vaccination campaigns, and nutrition workshops that promote healthier 
                    lifestyles and disease prevention.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Economic Empowerment Programs</h3>
                  <p className="text-base text-gray-700">
                    Vocational training and entrepreneurship support that helps community members develop 
                    marketable skills and start sustainable businesses. We provide business development 
                    training, access to microfinance, and ongoing mentorship to foster economic independence 
                    and create local employment opportunities.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Leadership Development</h3>
                  <p className="text-base text-gray-700">
                    Leadership training programs that identify and nurture local leaders who can drive 
                    positive change in their communities. Through workshops, networking events, and 
                    collaborative projects, we build the capacity of community organizations and empower 
                    residents to take active roles in shaping their community's future.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
