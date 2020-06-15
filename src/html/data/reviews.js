const allReviews = {
    sangeeta: (app) => ({
        image: './images/reviews/sangita.jpg',
        text: `${app} allows doctor to quickly understand and trust patient\'s health information, and give the safest and best medical care`,
        signature: 'Sangeeta Marwaha, MD',
        title: 'Chair, Dermatology Technology',
    }), 
    rajesh: (app) => ({
        image: './images/reviews/rajesh.png',
        text: `${app} is designed to help us manage immunization compliance and infectious disease outbreaks in the rural communities of HP, India.`,
        signature: 'Rajesh K Sood, MD',
        title: 'Epidemiology, District Programme Officer',
        subline: 'National Health Mission, HP, India',
    }),
    roman: (app) => ({
        image: './images/reviews/roman.png',
        text: `${app} is a great place to keep the personal health history properly digitized and always available. Its optional QR code feature is perfect for emergency wrist band for all kinds of outdoors activity.`,
        signature: 'Roman Polunin',
        title: 'Fremont, California',
    }),
    david: (app) => ({
        image: './images/reviews/david.png',
        text: `${app} has the potential to revolutionize the medical records industry and become the gateway for patient-generated health information to be merged with clinical data in doctor offices and hospitals.`,
        signature: 'David Pidwell',
        title: 'Partner, Alloy Ventures, Palo Alto CA',
        subline: 'Faculty, Stanford University Graduate School of Business',
    }),
    kate: () => ({
        image: './images/reviews/katya.jpg',
        text: 'If you have ever struggled with finding all the docs or remembering all the information related to your health, then you know how painful it is to have a well-organized comprehensive picture of your health. Now you can relax because myDiya will relieve your pain and will secure all your details in one place.',
        signature: 'Kate Kalento',
        title: 'Minsk, Belarus',
    }),
};


const reviews = {
    index: [allReviews.roman('myDiya'), allReviews.sangeeta('myDiya'), allReviews.david('diyaMD')],
    diyaMd: [allReviews.sangeeta('diyaMD'), allReviews.david('diyaMD'), allReviews.rajesh('diyaMD')],
    myDiya: [allReviews.roman('myDiya'), allReviews.sangeeta('myDiya'), allReviews.kate('myDiya')]
};

module.exports = reviews;
