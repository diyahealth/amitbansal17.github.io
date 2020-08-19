const pages = require('./pages');

const generateLinkObject = (url, mode) => {
    const postfix = mode === 'development' ? '.html' : '';

    if (!url) {
        return undefined;
    }

    return {
        href: url + postfix,
        text: 'See more info',
    };
}

const buildPatientsBenefits = (mode) => ({
    info: [
        {
            title: 'Emergency Access',
            text: 'First responders quickly and directly contact your family and regular doctors in case of an emergency.',
            link: pages.emergencyAccess ? generateLinkObject(pages.emergencyAccess.url, mode) : undefined,
        },
        {
            title: 'COVID-19 Check',
            text: 'Manage your risk to the coronavirus and track your symptoms.',
            link: pages.covid19 ? generateLinkObject(pages.covid19.url, mode) : undefined,
        },
        {
            title: 'Emergency Card',
            text: 'Using a QR code, doctors have instant access to your complete medical history.',
            link: pages.emergencyCard ? generateLinkObject(pages.emergencyCard.url, mode) : undefined,
        },
        {
            title: 'Expert at Home',
            text: 'Receive an expert medical opinion from the safety of your home.',
            link: pages.expertAtHome ? generateLinkObject(pages.expertAtHome.url, mode) : undefined,
        },
        {
            title: 'Medication Safety',
            text: 'Guard against drug interactions, allergies, and overdose risks.',
            link: pages.medicationSafety ? generateLinkObject(pages.medicationSafety.url, mode) : undefined,
        },
        {
            title: '24/7 Connection',
            text: 'Stay connected with your family and healthcare team at all times.',
            link: pages.connection ? generateLinkObject(pages.connection.url, mode) : undefined,
        },
    ],
    imagesClasses: [
        'head-bg-emergency-access',
        'head-bg-covid-19-check',
        'head-bg-emergency-card',
        'head-bg-expert-at-home',
        'head-bg-medication-safety',
        'head-bg-24-7-connection',
    ],
});

let patientsBenefits = buildPatientsBenefits();

const rebuildPatientsBenefits = (mode) => {
    patientsBenefits.info = buildPatientsBenefits(mode).info;
}

module.exports = {
    rebuildPatientsBenefits,
    patientsBenefits,
};
