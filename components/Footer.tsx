
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

// Fix: Made children optional to satisfy linter for what appears to be a false-positive error.
const SocialIcon = ({ href, children }: { href: string; children?: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-teal transition-colors">
        {children}
    </a>
);


const Footer = () => {
  return (
    <footer className="bg-brand-blue dark:bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Drop of <span className="text-brand-teal">Hope</span></h3>
            <p className="mt-2 text-gray-300 text-sm">Kindness in Action — Donate Blood, Essentials, and Hope.</p>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-teal transition-colors text-gray-300">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Connect</h4>
            <div className="mt-4 flex space-x-4">
               <SocialIcon href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>
               </SocialIcon>
               <SocialIcon href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.218 3.803 4.653-.7.194-1.446.262-2.216.262-.292 0-.575-.028-.855-.081.63 1.94 2.449 3.356 4.604 3.395-1.88 1.473-4.241 2.35-6.818 2.35-.44 0-.873-.026-1.3-.076 2.43 1.56 5.323 2.473 8.4 2.473 10.07 0 15.584-8.35 15.584-15.584 0-.237-.005-.473-.016-.708.957-.687 1.83-1.56 2.5-2.583z"/></svg>
               </SocialIcon>
                <SocialIcon href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg>
                </SocialIcon>
            </div>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Subscribe</h4>
            <p className="mt-4 text-gray-300">Get the latest updates and stories of hope.</p>
            <form className="mt-2 flex">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none" />
              <button type="submit" className="bg-brand-accent hover:bg-red-500 text-white font-bold px-4 py-2 rounded-r-md">Go</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Drop of Hope Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
