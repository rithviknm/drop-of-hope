
import React from 'react';
import { Button, Card, AccordionItem } from '../components/UI';
import { FAQ_DATA } from '../constants';

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white">Get in Touch</h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">We'd love to hear from you. Whether you have a question, a suggestion, or want to join our mission, reach out to us.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <Card className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-brand-blue dark:text-white">Contact Us</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                        <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                        <textarea placeholder="Your Message" rows={5} required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan"></textarea>
                        <Button type="submit" variant="primary" className="w-full">Send Message</Button>
                    </form>
                </Card>
                <Card className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-brand-blue dark:text-white">Become a Volunteer</h2>
                     <form className="space-y-4">
                        <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                        <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                        <select required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan">
                            <option value="">Area of Interest</option>
                            <option value="events">Event Support</option>
                            <option value="admin">Administrative Help</option>
                            <option value="social">Social Media</option>
                            <option value="any">Wherever Needed</option>
                        </select>
                        <Button type="submit" variant="accent" className="w-full">Sign Up to Volunteer</Button>
                    </form>
                </Card>
            </div>

            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-brand-blue dark:text-white">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                   {FAQ_DATA.map((faq, index) => (
                       <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                   ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
