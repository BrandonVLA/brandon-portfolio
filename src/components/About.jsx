function About() {
  return (
    <section id="about" className="py-20 bg-white w-full">
      {/* usar w-full para ocupar todo el ancho; el contenido interno puede seguir centrado */}
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            "I'm a passionate{" "}
            <span className="text-blue-600 font-semibold">
              Frontend Developer
            </span>{" "}
            with expertise in modern web technologies. I specialize in creating
            responsive, user-friendly applications using React, JavaScript, and
            Tailwind CSS."
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            "My journey began with hands-on learning through CodePen projects,
            where I developed practical skills in component architecture, state
            management, and UI/UX best practices. I'm constantly exploring new
            technologies and methodologies to enhance my craft."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Technical Skills
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">
                    React & Modern JavaScript
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Responsive Web Design</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Tailwind CSS & Styling</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Currently Learning
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Advanced React Patterns</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">
                    Next.js & Backend Integration
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">
                    Performance Optimization
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6 flex-col items-center bg-blue-50">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Beyond Code
              </h4>
              <p className="text-gray-700">
                "When I'm not coding, I enjoy exploring new web technologies,
                contributing to open-source projects, and staying updated with
                the latest frontend trends and best practices."
              </p>
            </div>

            <div>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-2">
                  Recent Achievement
                </h4>
                <p className="text-green-700">
                  "Successfully built 5+ interactive React applications,
                  mastering state management and component architecture along
                  the way on Codepen."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mt-4">
            <p className="text-blue-800 font-semibold">
              "I believe in continuous learning and that every project is an
              opportunity to grow and improve."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
