export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-8 pt-32 pb-16">
        <h1 className="section-title">About Us</h1>
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-8">
            Uhlendorf Innovations is dedicated to creating sustainable solutions that transform communities and improve lives across the globe.
          </p>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Our Mission</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                We strive to bridge the gap between innovation and impact by developing practical, 
                technology-driven solutions that address critical challenges in agriculture, healthcare, 
                and community development. Our mission is to empower communities with the tools and 
                knowledge they need to thrive sustainably.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Our Values</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                Innovation, sustainability, and community partnership are at the heart of everything we do. 
                We believe in creating solutions that are not only effective but also environmentally 
                responsible and culturally sensitive. By working closely with local communities and 
                international partners, we ensure our projects deliver lasting positive change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Our Approach</h2>
              <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
                We take a collaborative, human-centered approach to problem-solving. Through research, 
                partnership, and continuous learning, we develop solutions that are tailored to the unique 
                needs of each community we serve. Our work spans multiple sectors, always with the goal 
                of creating measurable, sustainable impact.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
