export default function ContactUsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-8 pt-32 pb-16">
        <h1 className="section-title">Contact Us</h1>
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-12">
            We'd love to hear from you. Whether you're interested in partnering with us, learning more about our projects, or supporting our mission, please reach out.
          </p>

          <div className="space-y-12">
            {/* Contact Information Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-700">info@uhlendorfinnovations.org</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-gray-700">
                    123 Innovation Drive<br />
                    Suite 100<br />
                    City, State 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4">
                  Contact form coming soon. For now, please reach out to us directly using the contact information above.
                </p>
                <div className="space-y-4 opacity-50">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <div className="border border-gray-300 rounded px-4 py-2 bg-gray-50">
                      [Your Name]
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="border border-gray-300 rounded px-4 py-2 bg-gray-50">
                      [Your Email]
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <div className="border border-gray-300 rounded px-4 py-3 bg-gray-50 h-32">
                      [Your Message]
                    </div>
                  </div>
                  <div className="border border-gray-300 rounded px-6 py-2 bg-gray-200 text-center">
                    Send Message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
