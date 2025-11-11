export default function EconomicEmpowermentPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-8 pt-32 pb-16">
        <h1 className="section-title">Economic Empowerment Programs</h1>
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-8">
            Creating sustainable income opportunities and financial security for East African communities.
          </p>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Project Overview</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                Our Economic Empowerment Programs focus on building financial resilience and creating 
                sustainable income opportunities for individuals and communities. Through skills training, 
                entrepreneurship support, and access to resources, we help people achieve economic 
                independence and improve their quality of life.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Program Goals</h2>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <ul className="space-y-4 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>Provide vocational training and skills development that lead to sustainable employment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>Support entrepreneurship through business training, mentorship, and seed capital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>Facilitate access to financial services including savings, credit, and insurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>Promote financial literacy and business management skills for long-term success</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1,800+</div>
                  <p className="text-gray-700">People Trained</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">450+</div>
                  <p className="text-gray-700">Businesses Started</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">65%</div>
                  <p className="text-gray-700">Income Increase</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Program Components</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Vocational Skills Training</h3>
                  <p className="text-base text-gray-700">
                    Comprehensive training programs in high-demand trades and professions including 
                    tailoring, carpentry, welding, agriculture, and digital skills. Participants receive 
                    hands-on training, certification, and job placement support to ensure successful 
                    transition into the workforce.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrepreneurship Development</h3>
                  <p className="text-base text-gray-700">
                    Business training and mentorship programs that guide aspiring entrepreneurs from 
                    idea conception to business launch. We provide support in business planning, market 
                    research, financial management, and access to startup capital through partnerships 
                    with microfinance institutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Inclusion Services</h3>
                  <p className="text-base text-gray-700">
                    Facilitation of access to formal financial services including savings accounts, 
                    microloans, and insurance products. We partner with financial institutions to create 
                    tailored products for low-income communities and provide financial literacy training 
                    to ensure responsible use of financial services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Linkages and Networks</h3>
                  <p className="text-base text-gray-700">
                    Creation of networks and platforms that connect program participants with markets, 
                    suppliers, and business opportunities. We facilitate trade associations, cooperative 
                    formation, and partnerships with larger businesses to ensure sustainable market access 
                    and fair pricing for goods and services.
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
