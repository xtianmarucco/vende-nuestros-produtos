import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function ContactInfo() {
  return (
    <div className="contact-info">
      <h2 className='text-2xl font-bold mb-2'>Contáctanos a</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-1' />
          Suc Castelli: <a className='decoration-none text-white' href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer">Calle Falsa 123, Ciudad</a>

        </li>
        <li>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-1'/> 
          Suc Diagonal: <a className='decoration-none text-white' href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer">Calle Falsa 123, Ciudad</a>

        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className='mr-1' /> Correo: <a className='decoration-none text-white' href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">Calle Falsa 123, Ciudad</a>
        </li>
        <li>
        <FontAwesomeIcon icon={faWhatsapp} className='mr-1'/>Teléfono: <a className='decoration-none text-white' href="https://wa.me/5493624119732">3624119732</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
