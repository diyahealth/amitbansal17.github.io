const allReviews = {
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
        text: `Diya is on its way to revolutionizing the healthcare industry.`,
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
    index: [allReviews.roman('myDiya'), allReviews.david('diyaMD')],
    diyaMd: [allReviews.david('diyaMD'), allReviews.rajesh('diyaMD')],
    myDiya: [allReviews.roman('myDiya'), allReviews.kate('myDiya')]
};

module.exports = reviews;
