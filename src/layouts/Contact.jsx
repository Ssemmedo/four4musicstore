import '../css/Contact.css';

function Contact() {
    return(
        <div id='contact'>
            <h1>Contato</h1>
            <div className='contact-container container'>
                <picture className='app-logo'><img src="./imgs/logo.png" alt="four4 music store" /></picture>
                <div className='contact-socials'>
                    <a href="https://www.youtube.com/@four4music544" target='_blank' rel="noreferrer">Youtube</a>
                    <a href="https://www.instagram.com/four4_musicstore/" target='_blank' rel="noreferrer">Instagram</a>
                    <a href="mailto:fourmusic8@gmail.com">Email</a>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;