import ContactInfo from "../components/contact-info/ContactInfo";

function Home() {
  const iframeStyles = {
    "border-radius": "10px",
    overflow: "hidden",
  };

  return (
    <div className="min-h-screen w-full bg-white justify-center">
      {/* Sección "Vende nuestros productos" */}
      <section className="bg-[#ffffff] text-[#0022a0] py-10 px-10">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Parte izquierda - Texto y CTA */}
          <div className="md:w-1/2 w-full text-center md:text-left md:pr-10 flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold">
              Vende nuestros productos en tu negocio
            </h1>
            <p className="mt-4 text-lg max-w-2xl">
              Descubre cómo tu negocio puede revender nuestros productos.
            </p>
            <a
              href="https://wa.me/5493624119732"
              className="mt-6 inline-block bg-[#fb004d] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#b90a67] transition-colors duration-300 mx-auto md:mx-0"
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
        <div className="w-full max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Nuestro Negocio Mayorista
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white">
            Somos una heladería con años de experiencia. Te ofrecemos productos
            frescos, de alta calidad y el mejor sabor que solo una marca
            reconocida como Grido puede ofrecerte. ¡Únete a nosotros y empieza a
            vender los mejores helados!
          </p>

          {/* Botones apilados en móviles y alineados en fila en pantallas más grandes */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center">
            <a
              href="https://wa.me/5493624119732"
              className="ml-40 mr-40 mb-4 md:mb-0 w-[400] md:w-auto bg-[#fb004d] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#b90a67] transition-colors duration-300"
            >
              Contáctanos
            </a>
            <a
              href="/products"
              className="ml-40 mr-40 w-[300] md:w-auto bg-[#fb004d] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#b90a67] transition-colors duration-300"
            >
              Ver productos
            </a>
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section id="contacto" className="py-12 bg-[#fb004d] text-white">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Contenedor de la información de contacto */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <h2 className="text-3xl font-bold">Contacto</h2>
            <br />
            <ContactInfo />
          </div>

          {/* Contenedor del iframe (Google Maps) */}
          <div className="w-full md:w-3/5" style={iframeStyles}>
            <iframe
              width="100%"
              height="400"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=avenida%20castelli%204140+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
