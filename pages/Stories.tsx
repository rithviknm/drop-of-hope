
import React, { useState } from 'react';
import { Card, Button } from '../components/UI';
import { generateStory, generateThankYouNote } from '../services/geminiService';

const StoryCard = ({ title, excerpt, image }: { title: string; excerpt: string; image: string }) => (
    <Card className="flex flex-col">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6">
            <h3 className="font-bold text-2xl mb-2 text-brand-blue dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
            <a href="#" className="font-semibold text-brand-cyan hover:text-brand-teal">Read More &rarr;</a>
        </div>
    </Card>
);

const Stories = () => {
    const [prompt, setPrompt] = useState('');
    const [generatedStory, setGeneratedStory] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleGenerateStory = async () => {
        if (!prompt) return;
        setIsLoading(true);
        setGeneratedStory('');
        const story = await generateStory(prompt);
        setGeneratedStory(story);
        setIsLoading(false);
    };

    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue dark:text-white">Stories of Impact</h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">Every donation tells a story. Discover the lives you've touched and the hope you've inspired through these real accounts of change.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <StoryCard title="A Blanket of Hope" excerpt="In the harsh winter of Delhi, a simple blanket donated through KindKart became a lifeline for Ramesh and his family, providing warmth and a sense of security..." image="https://picsum.photos/seed/story1/400/300" />
                <StoryCard title="First Day at School" excerpt="For 8-year-old Priya, a set of new books and a school bag was a dream come true. Learn how an education kit empowered her to chase her ambitions." image="https://picsum.photos/seed/story2/400/300" />
                <StoryCard title="A Second Chance" excerpt="A timely blood transfusion saved young Aarav's life. This is the story of a brave child, a selfless donor, and a community that came together." image="https://picsum.photos/seed/story3/400/300" />
            </div>

            <section className="py-16 bg-brand-light dark:bg-gray-800 rounded-lg">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-brand-blue dark:text-white">AI Storytelling Engine</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Powered by Gemini - help us craft the next story of hope.</p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., A child receiving their first pair of shoes"
                            className="w-full p-4 rounded-md bg-white dark:bg-gray-700 border-gray-300 focus:border-brand-cyan focus:ring-brand-cyan"
                            rows={3}
                        />
                        <Button onClick={handleGenerateStory} disabled={isLoading} className="w-full mt-4">
                            {isLoading ? 'Generating...' : 'Generate a Story'}
                        </Button>
                        
                        {isLoading && <div className="mt-6 text-center">Loading...</div>}

                        {generatedStory && (
                            <Card className="mt-6 p-6 animate-fade-in">
                                <h4 className="font-bold text-xl mb-2 text-brand-blue dark:text-white">Generated Story:</h4>
                                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{generatedStory}</p>
                            </Card>
                        )}
                    </div>
                </div>
            </section>
            
            <section className="mt-16">
                <Card className="p-8">
                    <h2 className="text-3xl font-bold text-center mb-6 text-brand-blue dark:text-white">Share Your Story</h2>
                    <form className="max-w-2xl mx-auto space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan" />
                        <textarea placeholder="Tell us your story..." rows={5} className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-cyan focus:ring-brand-cyan"></textarea>
                        <Button type="submit" variant="accent" className="w-full">Submit My Story</Button>
                    </form>
                </Card>
            </section>
        </div>
    );
};

export default Stories;
