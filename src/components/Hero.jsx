function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-900 to-purple-900 text-white pt-20"
    >
      <div className="w-full text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hola, soy <span className="text-blue-400">Brandon</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Desarrollador Frontend apasionado por crear experiencias web
          increíbles
        </p>
        <button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
          Ver Mis Proyectos
        </button>
      </div>
    </section>
  );
}

export default Hero;
