import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FiInstagram } from 'react-icons/fa';
import '../styles/footer.css'


function Footer() {
    return (
        <>
            <div className="container footer-container">
                <footer class="page-footer font-small cyan darken-3">
                    <div class="container upper">
                        <div class="row">
                            <div class="col-md-12 py-5">
                                <div class="social-links">
                                    <a href="" target="_blank" className=''><FaFacebook /></a>
                                    <a href="" target="_blank" className=''><FaGithub /></a>
                                    <a href="" target="_blank" className=''><FaLinkedinIn /></a>
                                    <a href="" target="_blank" className=''><FaTwitter /></a>
                                    <a href="" target="_blank" className=''><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright text-center py-3 lower">Made with ❤️ by Anshi Mishra</div>
                </footer>
            </div>
        </>
    )
}

export default Footer