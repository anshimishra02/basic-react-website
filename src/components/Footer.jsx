import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FiInstagram } from 'react-icons/fa';
import '../styles/footer.css'


function Footer() {
    return (
        <>
            <footer class="footer-container">
                <div class="upper">
                    <div class="row">
                        <div class="col-md-12 py-5">
                            <div class="social-links">
                                <a href="https://www.facebook.com/anshi.mishra.7355" target="_blank" className=''><FaFacebook /></a>
                                <a href="https://github.com/anshimishra02" target="_blank" className=''><FaGithub /></a>
                                <a href="https://www.linkedin.com/in/anshi-mishra-785635210/" target="_blank" className=''><FaLinkedinIn /></a>
                                <a href="https://www.linkedin.com/in/anshi-mishra-785635210/" target="_blank" className=''><FaTwitter /></a>
                                <a href="https://www.instagram.com/_anshimishra/" target="_blank" className=''><FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3 lower">Made with ❤️ by Anshi Mishra</div>
            </footer>
        </>
    )
}

export default Footer