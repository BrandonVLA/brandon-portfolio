function About() {
  return (
    <section id="about" className="py-20 bg-white w-full">
      {/* usar w-full para ocupar todo el ancho; el contenido interno puede seguir centrado */}
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          <p className="mb-6">
            Hello! I'm a passionate frontend developer with experience creating
            modern and responsive web applications. I love transforming ideas
            into incredible digital experiences.
          </p>
          <p className="mb-6">
            My journey in web development started with small projects on CodePen
            and now I'm expanding my skills with React and modern technologies.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
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
