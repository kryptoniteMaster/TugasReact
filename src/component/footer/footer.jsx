import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="border-t border-biru-100 container mx-auto flex flex-col items-center space-y-4">
                <div className="flex flex-row space-x-16">
                    <div className="flex flex-col items-center space-y-2">
                        <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
                        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <a href="/about-us" className="hover:underline">About Us</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>Copyright &copy; 2024 IKI All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
