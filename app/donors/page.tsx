export default function DonorsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-8 pt-32 pb-16">
        <h1 className="section-title">Donors</h1>
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-8">
            Thank you to our generous donors and partners who make our mission possible. Your support enables us to create lasting impact in communities around the world.
          </p>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Donor Recognition</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                We are deeply grateful to all our donors who share our vision of creating sustainable 
                solutions for global challenges. Your contributions directly support our projects in 
                agriculture, healthcare, and community development, helping us reach more communities 
                and expand our impact. Every donation, regardless of size, makes a meaningful difference 
                in the lives of those we serve.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Partnership Opportunities</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                We welcome partnerships with individuals, corporations, and foundations who are committed 
                to driving positive change. Whether through financial support, in-kind donations, or 
                collaborative projects, there are many ways to partner with Uhlendorf Innovations. 
                Together, we can scale our solutions and create sustainable impact that transforms lives 
                and strengthens communities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">How Your Contribution Helps</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                Your support enables us to develop innovative solutions, provide training and resources 
                to local communities, maintain and expand our technology platforms, and forge new 
                partnerships that amplify our reach. Every contribution helps us move closer to our 
                goal of creating a more sustainable and equitable world where communities have the 
                tools they need to thrive.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
