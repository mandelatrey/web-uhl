export default function ListeningCampaignsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-8 pt-32 pb-16">
        <h1 className="section-title">The Listening Campaigns</h1>
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-8">
            Understanding community needs through active listening and meaningful dialogue with East African communities.
          </p>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Project Overview</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                The Listening Campaigns are designed to create genuine connections with communities across 
                East Africa. Through structured conversations and community gatherings, we identify the most 
                pressing needs and aspirations of local populations, ensuring our initiatives are truly 
                community-driven and culturally appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Campaign Goals</h2>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <ul className="space-y-4 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>Engage directly with community members to understand their priorities, challenges, and aspirations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>Build trust and establish long-term relationships with local leaders and organizations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>Gather insights that inform the design and implementation of sustainable development programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>Create platforms for community voices to be heard and valued in decision-making processes</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2,500+</div>
                  <p className="text-gray-700">Community Members Engaged</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">25</div>
                  <p className="text-gray-700">Communities Reached</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-700">Community-Driven Solutions</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Key Activities</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Dialogues</h3>
                  <p className="text-base text-gray-700">
                    Facilitated group discussions that bring together diverse community members to share 
                    their experiences, concerns, and ideas. These dialogues create safe spaces for open 
                    conversation and collective problem-solving, ensuring all voices are heard.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">One-on-One Interviews</h3>
                  <p className="text-base text-gray-700">
                    In-depth conversations with individuals from various backgrounds to understand personal 
                    stories, challenges, and aspirations. These interviews provide nuanced insights that 
                    inform culturally sensitive and effective program design.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Stakeholder Mapping</h3>
                  <p className="text-base text-gray-700">
                    Systematic identification and engagement with key community stakeholders including 
                    local leaders, organizations, and influencers. This mapping ensures comprehensive 
                    understanding of community dynamics and facilitates effective partnerships.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Feedback Integration</h3>
                  <p className="text-base text-gray-700">
                    Continuous process of analyzing community feedback and incorporating insights into 
                    program planning and implementation. We maintain ongoing communication with communities 
                    to ensure our initiatives remain responsive to evolving needs.
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
