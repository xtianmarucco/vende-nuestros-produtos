import ContactInfo from "../components/contact-info/ContactInfo";

function Home() {
  const iframeStyles = {
    "border-radius": "10px",
    overflow: "hidden",
  };
  return (
    <div className="min-h-screen bg-white justify-center">
      <section className="bg-[#ffffff] text-[#0022a0] py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Parte izquierda - Texto y CTA */}
          <div className="md:w-1/2 w-full text-left md:pr-10">
            <h1 className="text-4xl font-bold">
              Vende nuestros productos en tu negocio
            </h1>
            <p className="mt-4 text-lg">
              Descubre cómo tu negocio puede revender nuestros productos.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block bg-[#fb004d] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#b90a67] transition-colors duration-300"
            >
              Contáctanos
            </a>
          </div>

          {/* Parte derecha - Imagen */}
          <div className="md:w-1/2 w-full mt-6 md:mt-0 hidden md:block">
            <img
              src="/Posteo.png" // Reemplazar con la imagen real
              alt="Productos Heladería"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Sección de Explicación */}
      <section className="py-12 bg-[#0022a0] text-[#0022a0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white ">
            Nuestro Negocio Mayorista
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white ">
            Somos una heladería con años de experiencia. Te ofrecemos productos
            frescos, de alta calidad y el mejor sabor que solo una marca
            reconocida como grido puede ofrecerte. ¡Únete a nosotros y empieza a
            vender los mejores helados!
          </p>
          <div className="d-flex justify-between">
            <a
              href="#contact"
              className="mt-6 mr-6 inline-block bg-[#fb004d] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#b90a67] transition-colors duration-300"
            >
              Contáctanos
            </a>
            <a
              href="#contact"
              className="mt-6 ml-6 inline-block bg-[#fb004d] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#b90a67] transition-colors duration-300"
            >
              Ver productos
            </a>
          </div>
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
              <p className="mt-4">
                Delicioso helado de vainilla hecho con ingredientes frescos.
              </p>
            </div>
            <div className="border border-[#9face3] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Helado de Chocolate</h3>
              <p className="mt-4">
                Helado de chocolate cremoso, perfecto para cualquier ocasión.
              </p>
            </div>
            <div className="border border-[#9face3] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Helado de Fresa</h3>
              <p className="mt-4">
                Fresco y natural helado de fresa, ideal para el verano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-12 bg-[#fb004d] text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-2/5">
            <h2 className="text-3xl font-bold">Contacto</h2>
            <br></br>
            <ContactInfo />
          </div>

          <div className="w-3/5" style={iframeStyles}>
            <iframe
              width="100%"
              height="400"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=avenida%20castelli%204140+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
