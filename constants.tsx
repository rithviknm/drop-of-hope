
import React from 'react';
import { Testimonial, MythFact, BloodType, DonationItem, NGO } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Blood Donation', path: '/donate-blood' },
  { name: 'KindKart', path: '/kindkart' },
  { name: 'Stories of Impact', path: '/stories' },
  { name: 'Contact & Volunteer', path: '/contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Thanks to a timely blood donation organized through this platform, my daughter is with us today. I am forever grateful to the donor and Drop of Hope.",
    name: 'Anjali Sharma',
    role: 'Parent of a Recipient',
    image: 'https://picsum.photos/id/1011/100/100',
  },
  {
    quote: "The winter blankets we received were a blessing. My children can now sleep warmly. This foundation truly brings hope to those who have none.",
    name: 'Ramesh Kumar',
    role: 'Community Elder',
    image: 'https://picsum.photos/id/1012/100/100',
  },
  {
    quote: "Donating essentials through KindKart was so easy. Seeing the impact on the NGO's page made it a deeply rewarding experience.",
    name: 'Priya Singh',
    role: 'Essentials Donor',
    image: 'https://picsum.photos/id/1013/100/100',
  },
];

export const MYTHS_VS_FACTS: MythFact[] = [
  {
    myth: "Donating blood is painful and makes you weak.",
    fact: "The pain is minimal, just a brief prick. Your body replenishes the donated blood within 24-48 hours, and you can resume normal activities shortly after."
  },
  {
    myth: "I can't donate because I have high blood pressure.",
    fact: "You can donate if your blood pressure is within acceptable limits (typically below 180/100) at the time of donation. Medication for high BP doesn't disqualify you."
  },
  {
    myth: "Vegetarians can't donate blood due to low iron levels.",
    fact: "As long as your hemoglobin levels are sufficient, your diet doesn't matter. Many vegetarians and vegans are regular, healthy blood donors."
  }
];

export const BLOOD_COMPATIBILITY: Record<BloodType, { donateTo: BloodType[], receiveFrom: BloodType[] }> = {
  [BloodType.APos]: { donateTo: [BloodType.APos, BloodType.ABPos], receiveFrom: [BloodType.APos, BloodType.ANeg, BloodType.OPos, BloodType.ONeg] },
  [BloodType.ANeg]: { donateTo: [BloodType.APos, BloodType.ANeg, BloodType.ABPos, BloodType.ABNeg], receiveFrom: [BloodType.ANeg, BloodType.ONeg] },
  [BloodType.BPos]: { donateTo: [BloodType.BPos, BloodType.ABPos], receiveFrom: [BloodType.BPos, BloodType.BNeg, BloodType.OPos, BloodType.ONeg] },
  [BloodType.BNeg]: { donateTo: [BloodType.BPos, BloodType.BNeg, BloodType.ABPos, BloodType.ABNeg], receiveFrom: [BloodType.BNeg, BloodType.ONeg] },
  [BloodType.ABPos]: { donateTo: [BloodType.ABPos], receiveFrom: Object.values(BloodType) },
  [BloodType.ABNeg]: { donateTo: [BloodType.ABPos, BloodType.ABNeg], receiveFrom: [BloodType.ANeg, BloodType.BNeg, BloodType.ABNeg, BloodType.ONeg] },
  [BloodType.OPos]: { donateTo: [BloodType.APos, BloodType.BPos, BloodType.ABPos, BloodType.OPos], receiveFrom: [BloodType.OPos, BloodType.ONeg] },
  [BloodType.ONeg]: { donateTo: Object.values(BloodType), receiveFrom: [BloodType.ONeg] },
};

export const DONATION_ITEMS: DonationItem[] = [
  { id: 1, name: 'Rice Bag (5kg)', description: 'Provides essential nutrition for a small family.', image: 'https://picsum.photos/seed/rice/400/300', category: 'Food' },
  { id: 2, name: 'School Books Set', description: 'Empowers a child with the tools for education.', image: 'https://picsum.photos/seed/books/400/300', category: 'Education' },
  { id: 3, name: 'Sanitary Pads Pack', description: 'Ensures health and dignity for girls and women.', image: 'https://picsum.photos/seed/pads/400/300', category: 'Health' },
  { id: 4, name: 'Warm Blanket', description: 'Offers comfort and protection during cold nights.', image: 'https://picsum.photos/seed/blanket/400/300', category: 'Comfort' },
  { id: 5, name: 'Lentils (2kg)', description: 'A great source of protein for growing children.', image: 'https://picsum.photos/seed/lentils/400/300', category: 'Food' },
  { id: 6, name: 'Notebooks & Pens', description: 'Basic stationery to support a child\'s learning journey.', image: 'https://picsum.photos/seed/stationery/400/300', category: 'Education' },
];

export const NGOS: NGO[] = [
  { name: 'Asha Deep Foundation', location: 'Mumbai', needs: ['Food', 'Education'], contact: 'contact@ashadeep.org' },
  { name: 'Umeed Charitable Trust', location: 'Delhi', needs: ['Health', 'Comfort'], contact: 'info@umeedtrust.in' },
  { name: 'Bal Vikas Kendra', location: 'Bangalore', needs: ['Education'], contact: 'support@balvikas.org' },
];

export const FAQ_DATA = [
  { question: "How can I be sure my donation reaches the needy?", answer: "We partner with verified local NGOs and provide transparency reports. For KindKart donations, you'll receive an update once your items are delivered to the designated NGO." },
  { question: "Is it safe to donate blood?", answer: "Absolutely. All blood drives are conducted by certified professionals using sterile, single-use equipment. Your health and safety are our top priority." },
  { question: "Can I volunteer remotely?", answer: "Yes! We have several opportunities for remote volunteering, including social media management, content creation, and online event coordination. Check our volunteer page for more details." },
];
