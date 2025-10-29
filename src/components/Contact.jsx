function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
  };
  return (
    <section id="contact">
      <div className="container mx-auto px-4 mt-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-white text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Connect
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-white">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-white">brandon.barrantesc10@gmail.com</p>
                  <p className="text-white">I'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <span className="text-green-600">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/brandonb10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    https://www.linkedin.com/in/brandonb10
                  </a>
                  <p className="text-sm text-white">
                    Let's connect professionally
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <span className="text-purple-600">🐙</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">GitHub</h4>
                  <a
                    href="https://github.com/BrandonVLA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    https://github.com/BrandonVLA
                  </a>
                  <p className="text-sm text-white">Check out my projects</p>
                </div>
              </div>
            </div>
            {/* Disponibilidad */}
            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">
                Current Availability
              </h4>
              <p className="text-gray-600 mb-3">I'm currently available for:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Frontend development projects</li>
                <li>React.js opportunities</li>
                <li>Collaborations and open source</li>
              </ul>
            </div>
          </div>
          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
