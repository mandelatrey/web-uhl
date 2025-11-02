export default function AgribridgePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-8 pt-32 pb-16">
        <h1 className="section-title">Agribridge</h1>
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-8">
            Connecting farmers with markets and resources through innovative technology solutions.
          </p>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Project Overview</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                Agribridge is a transformative initiative that leverages technology to bridge the gap 
                between smallholder farmers and modern agricultural markets. By providing digital tools 
                and resources, we empower farming communities to increase productivity, access fair 
                markets, and build sustainable livelihoods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Project Goals</h2>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <ul className="space-y-4 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span>Improve market access for smallholder farmers through digital platforms and direct connections to buyers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span>Enhance agricultural productivity by providing farmers with real-time information on best practices and weather patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span>Facilitate access to financial services and resources that support sustainable farming practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span>Build capacity within farming communities through training and knowledge sharing programs</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
                  <p className="text-gray-700">Farmers Connected</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                  <p className="text-gray-700">Income Increase</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <p className="text-gray-700">Partner Communities</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Key Features</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Linkage Platform</h3>
                  <p className="text-base text-gray-700">
                    A digital marketplace that connects farmers directly with buyers, eliminating middlemen 
                    and ensuring fair prices for agricultural products. The platform provides real-time 
                    market information and facilitates transparent transactions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Agricultural Advisory Services</h3>
                  <p className="text-base text-gray-700">
                    Access to expert agricultural advice, weather forecasts, and best practice guides 
                    delivered through mobile technology. Farmers receive timely information to make 
                    informed decisions about planting, harvesting, and crop management.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Inclusion Tools</h3>
                  <p className="text-base text-gray-700">
                    Integration with microfinance institutions and digital payment systems to provide 
                    farmers with access to credit, savings, and insurance products. These tools help 
                    farmers invest in their operations and manage financial risks.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Training Programs</h3>
                  <p className="text-base text-gray-700">
                    Hands-on training sessions and workshops that build digital literacy and agricultural 
                    skills within farming communities. These programs ensure that farmers can effectively 
                    use the technology and apply modern farming techniques.
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
