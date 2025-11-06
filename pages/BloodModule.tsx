
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, FlipCard } from '../components/UI';
import { BLOOD_COMPATIBILITY, MYTHS_VS_FACTS } from '../constants';
import { BloodType } from '../types';

const DonateForm = () => {
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to a backend
        console.log("Donor form submitted");
        setSubmitted(true);
    };

    if(submitted) {
        return <div className="text-center p-10 bg-green-100 dark:bg-green-900 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Thank you for registering!</h3>
            <p className="mt-2 text-green-600 dark:text-green-300">You've taken a step to save lives. We will contact you for upcoming donation drives in your area.</p>
        </div>
    }

    return (
        <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                    <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <select required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan">
                        <option value="">Select Blood Type</option>
                        {Object.values(BloodType).map(bt => <option key={bt} value={bt}>{bt}</option>)}
                    </select>
                    <input type="text" placeholder="City / Location" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Donation Date (if any)</label>
                    <input type="date" className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                </div>
                <Button type="submit" variant="accent" className="w-full">Become a Donor</Button>
            </form>
        </Card>
    );
};

const RequestForm = () => {
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Blood request submitted");
        setSubmitted(true);
    };

    if (submitted) {
        return <div className="text-center p-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
            <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">Request Submitted</h3>
            <p className="mt-2 text-yellow-600 dark:text-yellow-300">Your emergency request has been broadcasted. We are searching for matching donors. For immediate help, please use the emergency contacts.</p>
             <div className="mt-4 space-x-4">
                <Button variant="primary" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>Contact on WhatsApp</Button>
                <Button variant="secondary" onClick={() => window.open('tel:1234567890')}>Call Emergency Line</Button>
            </div>
        </div>
    }

    return (
        <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" placeholder="Patient's Full Name" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                <input type="text" placeholder="Hospital Name & City" required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                <div className="grid md:grid-cols-2 gap-6">
                    <select required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan">
                        <option value="">Required Blood Type</option>
                        {Object.values(BloodType).map(bt => <option key={bt} value={bt}>{bt}</option>)}
                    </select>
                    <select required className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan">
                        <option value="">Urgency Level</option>
                        <option value="critical">Critical</option>
                        <option value="urgent">Urgent</option>
                        <option value="moderate">Moderate</option>
                    </select>
                </div>
                <Button type="submit" variant="accent" className="w-full">Request Blood</Button>
            </form>
        </Card>
    );
};

const CompatibilityChart = () => {
    const [selectedType, setSelectedType] = useState<BloodType | null>(null);

    const canDonateTo = selectedType ? BLOOD_COMPATIBILITY[selectedType].donateTo : [];
    const canReceiveFrom = selectedType ? BLOOD_COMPATIBILITY[selectedType].receiveFrom : [];

    const getCellStyle = (type: BloodType) => {
        if (type === selectedType) return 'bg-brand-accent text-white scale-110';
        if (canDonateTo.includes(type)) return 'bg-green-400 dark:bg-green-600 text-white';
        if (canReceiveFrom.includes(type)) return 'bg-blue-400 dark:bg-blue-600 text-white';
        return 'bg-gray-200 dark:bg-gray-700';
    };

    return (
        <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Interactive Blood Compatibility Chart</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">Click on a blood type to see who they can donate to (green) and receive from (blue).</p>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {Object.values(BloodType).map(type => (
                    <div
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`p-4 rounded-lg font-bold text-xl cursor-pointer transition-all duration-300 ${getCellStyle(type)}`}
                    >
                        {type}
                    </div>
                ))}
            </div>
            {selectedType && (
                <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md animate-fade-in">
                    <h4 className="text-xl font-bold">You selected: <span className="text-brand-accent">{selectedType}</span></h4>
                    <div className="mt-4 flex flex-col md:flex-row justify-around">
                        <div>
                            <p className="font-semibold">Can Donate To:</p>
                            <p className="text-green-600 dark:text-green-400 text-lg">{canDonateTo.join(', ')}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <p className="font-semibold">Can Receive From:</p>
                            <p className="text-blue-600 dark:text-blue-400 text-lg">{canReceiveFrom.join(', ')}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

type Tab = 'donate' | 'request' | 'compatibility';

const BloodModule = ({ initialTab = 'donate' }: { initialTab?: Tab }) => {
    const [activeTab, setActiveTab] = useState<Tab>(initialTab);
    const navigate = useNavigate();

    const renderContent = () => {
        switch (activeTab) {
            case 'donate': return <DonateForm />;
            case 'request': return <RequestForm />;
            case 'compatibility': return <CompatibilityChart />;
            default: return <DonateForm />;
        }
    };
    
    const setTab = (tab: Tab) => {
        setActiveTab(tab);
        navigate(tab === 'donate' ? '/donate-blood' : tab === 'request' ? '/request-blood' : '/compatibility');
    };

    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white">Gift of Life</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">Your single blood donation can save up to three lives. Join our community of heroes or find help in times of need.</p>
            </div>

            <div className="mb-8 flex justify-center border-b border-gray-300 dark:border-gray-700">
                <button onClick={() => setTab('donate')} className={`px-6 py-3 font-semibold ${activeTab === 'donate' ? 'border-b-4 border-brand-accent text-brand-accent' : 'text-gray-500'}`}>Become a Donor</button>
                <button onClick={() => setTab('request')} className={`px-6 py-3 font-semibold ${activeTab === 'request' ? 'border-b-4 border-brand-accent text-brand-accent' : 'text-gray-500'}`}>Request Blood</button>
                <button onClick={() => setTab('compatibility')} className={`px-6 py-3 font-semibold ${activeTab === 'compatibility' ? 'border-b-4 border-brand-accent text-brand-accent' : 'text-gray-500'}`}>Compatibility</button>
            </div>
            
            <div className="max-w-4xl mx-auto mb-16">
              {renderContent()}
            </div>
            
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-blue dark:text-white">Myths vs. Facts</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Don't let myths stop you from saving a life. Click to reveal the facts.</p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                {MYTHS_VS_FACTS.map((item, index) => (
                    <FlipCard
                        key={index}
                        frontContent={<><h4 className="font-bold text-lg">Myth:</h4><p className="mt-2">{item.myth}</p></>}
                        backContent={<><h4 className="font-bold text-lg">Fact:</h4><p className="mt-2">{item.fact}</p></>}
                    />
                ))}
            </div>
        </div>
    );
};

export default BloodModule;
