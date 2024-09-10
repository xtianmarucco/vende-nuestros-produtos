function Home ( ) {
    return (
        <div className="min-h-screen bg-white justify-center">

  {/* Sección de Bienvenida */}
  <section className="bg-[#ffff] text-[#0022a0] py-10">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold text-slate-[#0022a0]">Vende nuetros productos en tu negocio </h1>
      <p className="mt-4 text-lg">Descubre cómo tu negocio puede revender nuestros productos de la mejor calidad.</p>
    </div>
  </section>

  {/* Sección de Explicación */}
  <section className="py-12 bg-[#9face3] text-[#0022a0]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold">Nuestro Negocio Mayorista</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        Somos una heladería mayorista con años de experiencia. Ofrecemos productos frescos y de alta calidad
        a pequeños y medianos comercios. ¡Únete a nosotros y empieza a vender los mejores helados!
      </p>
    </div>
  </section>

  {/* Sección de Productos */}
  <section className="py-12 bg-white text-[#0022a0]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold">Nuestros Productos</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ejemplo de producto */}
        <div className="border border-[#9face3] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Helado de Vainilla</h3>
          <p className="mt-4">Delicioso helado de vainilla hecho con ingredientes frescos.</p>
        </div>
        <div className="border border-[#9face3] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Helado de Chocolate</h3>
          <p className="mt-4">Helado de chocolate cremoso, perfecto para cualquier ocasión.</p>
        </div>
        <div className="border border-[#9face3] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Helado de Fresa</h3>
          <p className="mt-4">Fresco y natural helado de fresa, ideal para el verano.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Sección de Contacto */}
  <section className="py-12 bg-[#fb004d] text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold">Contacto</h2>
      <p className="mt-4 text-lg">Déjanos tu información y nos pondremos en contacto contigo.</p>
      <form className="mt-8 max-w-md mx-auto space-y-4">
        <div>
          <input
            type="text"
            className="w-full p-3 border border-[#b90a67] rounded-lg"
            placeholder="Nombre"
          />
        </div>
        <div>
          <input
            type="email"
            className="w-full p-3 border border-[#b90a67] rounded-lg"
            placeholder="Correo Electrónico"
          />
        </div>
        <div>
          <textarea
            className="w-full p-3 border border-[#b90a67] rounded-lg"
            placeholder="Mensaje"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#0022a0] text-white font-bold rounded-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  </section>
  </div>
)}

export default Home;