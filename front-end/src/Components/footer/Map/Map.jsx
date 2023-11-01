// import React from 'react';
import footer from '../footer.module.css'

function Map() {
  return (
    <div>
      
      <div className={footer.map}>
        <iframe
         title='Map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.2399089163478!2d13.3724727153389!3d52.50777767351233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2spl!4v1695113493308!5m2!1sru!2spl"
          width="100%"
          height="450"
          style={{ border: '0'}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      
      <p>
        <a
          href="https://www.google.com/maps?q=52.50802102862868,13.37501787519535"
          target="_blank"
          rel="noopener noreferrer"
        >
          Перейти на Google Карты
        </a>
      </p>
    </div>
  );
}

export default Map;
