
import React, { useState } from 'react';
import { Button, Card } from '../components/UI';
import { DONATION_ITEMS, NGOS } from '../constants';
import { DonationItem } from '../types';

const ItemCard = ({ item, onAddToCart }: { item: DonationItem, onAddToCart: (item: DonationItem) => void }) => (
    <Card className="flex flex-col">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-xl mb-2 text-brand-blue dark:text-white">{item.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 flex-grow mb-4">{item.description}</p>
            <Button variant="primary" onClick={() => onAddToCart(item)}>Add to KindKart</Button>
        </div>
    </Card>
);

const KindKart = () => {
    const [cart, setCart] = useState<DonationItem[]>([]);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleAddToCart = (item: DonationItem) => {
        setCart(prevCart => [...prevCart, item]);
    };
    
    const handleCheckout = () => {
        console.log("Donating items:", cart);
        setShowSuccess(true);
        setCart([]);
        setTimeout(() => setShowSuccess(false), 5000);
    }

    if (showSuccess) {
        return (
             <div className="container mx-auto px-6 py-20 text-center animate-fade-in">
                <div className="max-w-2xl mx-auto bg-green-100 dark:bg-green-900 p-10 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-green-800 dark:text-green-200">Thank You!</h2>
                    <p className="mt-4 text-lg text-green-700 dark:text-green-300">Your generous donation has been processed. You are making a tangible difference in someone's life.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white">KindKart</h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">Your virtual shopping cart for kindness. Browse essential items, add them to your cart, and we'll ensure they reach those in need through our network of partner NGOs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {DONATION_ITEMS.map(item => (
                    <ItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
                ))}
            </div>
            
            {cart.length > 0 && (
                <div className="sticky bottom-4 z-20 max-w-4xl mx-auto">
                    <div className="bg-brand-blue dark:bg-gray-800 text-white p-6 rounded-lg shadow-2xl flex justify-between items-center">
                        <h3 className="text-xl font-bold">{cart.length} Item(s) in your KindKart</h3>
                        <Button variant="accent" onClick={handleCheckout}>Complete Donation</Button>
                    </div>
                </div>
            )}
            
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-blue dark:text-white">Our Partner NGOs</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">We work with trusted organizations to deliver your kindness.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {NGOS.map(ngo => (
                    <Card key={ngo.name} className="p-6 text-center">
                        <h3 className="font-bold text-xl text-brand-blue dark:text-white">{ngo.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 my-2">{ngo.location}</p>
                        <p className="text-sm"><strong>Current Needs:</strong> {ngo.needs.join(', ')}</p>
                        <p className="mt-4"><a href={`mailto:${ngo.contact}`} className="text-brand-cyan hover:underline">{ngo.contact}</a></p>
                    </Card>
                ))}
            </div>

            <div className="mt-16">
                <Card className="p-8">
                    <h2 className="text-2xl font-bold text-center text-brand-blue dark:text-white mb-4">Find an NGO Near You</h2>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-6">This is a visual representation of our NGO network.</p>
                    <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">[Interactive Map Placeholder - e.g., Leaflet.js]</p>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default KindKart;
