import '../components/Footer.css'


const Footer = () => (
    <div className="footer">
        <div className='footer__cc'>mel.yoyo © All rights reserved.</div>
        <div className='footer__socials'>
            <p>Follow my social media: </p>
            <a href='https://www.instagram.com/mel.yoyo/' className='social__link'><i className="fa-brands fa-instagram"></i></a>
            <a href='https://www.linkedin.com/in/melaniemarques/' className='social__link'><i class="fa-brands fa-linkedin-in"></i></a>
            <a href='https://www.behance.net/melyoyo' className='social__link'><i className="fa-brands fa-behance"></i></a>
        </div>
    </div>
)
export default Footer;