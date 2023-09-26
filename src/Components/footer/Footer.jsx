
import footer from'./footer.module.css'
import Map from './Map/Map'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className={footer.wrapper}>
      <div className={footer.container}>
        <div className={footer.contact}>
          <h2>Contact</h2>
          <h1>+4 999 999 99 99</h1>
          <div className={footer.socMedia}>
            <div >
              <Link to={'https://www.instagram.com/'} target='_blanket'><img src="https://abrakadabra.fun/uploads/posts/2022-01/1643108716_1-abrakadabra-fun-p-znachok-instagram-dlya-vizitki-malenkii-3.png" alt="" />Instagram</Link>
              
            </div>
            <div>
              <Link to={'https://www.whatsapp.com/'} target='_blanket'><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3431275/whatsapp-icon-md.png" alt="logo" />WhatsApp</Link>
              
            </div>
          </div>
          
        </div>
        <div className={footer.adres}>
          <h2>Address</h2>
          <div className={footer.text}>
            <h3 className={footer.line} ><Link to={'https://tel-ran.de/'} target='_blanket'>Linkstraße 2, 8 OG, 10785,</Link> </h3>
            <h3  className={footer.line}><Link to={'https://tel-ran.de/'} target='_blanket'>Berlin, Deutschland</Link></h3>
          </div>
          <div className={footer.text}>
            <p className={footer.line}>Working Hours:</p>
            <h4 className={footer.line}>24 hours a day</h4>
          </div>
        </div>
      </div>
      
      <Map/>
    </div>
  )
}

export default Footer