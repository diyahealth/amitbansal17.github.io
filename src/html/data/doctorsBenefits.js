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

const buildDoctorsBenefits = (mode) => ({
    info: [
        {
            title: 'Access to Vital Patient Information',
            text: 'Instant and easy communication to other physicians, office staff, patients, and families. No fumbling for phone numbers or email addresses.',
            link: pages.accessToVitalPatientInformation ? generateLinkObject(pages.accessToVitalPatientInformation.url, mode) : undefined,
        },
        {
            title: 'Establish your brand and create patient loyalty',
            text: 'Share educational material and health alerts with patients easily and regularly.',
            link: pages.establishYourBrand ? generateLinkObject(pages.establishYourBrand.url, mode) : undefined,
        },
        {
            title: 'Increase your telehealth revenue',
            text: 'Perform billable virtual visits and remote patient monitoring wherever you are. Medicare & Medicaid Approved.',
            link: pages.increaseYourRevenue ? generateLinkObject(pages.increaseYourRevenue.url, mode) : undefined,
        },
        {
            title: 'Smooth integration with office technology',
            text: 'Can be used alone, or with any telehealth and EMR products',
            link: pages.integrateWithYourOffice ? generateLinkObject(pages.integrateWithYourOffice.url, mode) : undefined,
        },
        {
            title: 'Remote Patient Monitoring',
            text: 'Direct access to patient\'s chief complaints, insurance information, vitals, medications, labs etc. anywhere and anytime. HIPAA protected.',
            link: pages.remotePatientMonitoring ? generateLinkObject(pages.remotePatientMonitoring.url, mode) : undefined,
        },
        {
            title: 'Telehealth Capabilities',
            text: 'Easy to use for all health care providers, including NPs and PAs, as well as the billing staff.',
            link: pages.telehealthCapabilities ? generateLinkObject(pages.telehealthCapabilities.url, mode) : undefined,
        },
    ],
    imagesClasses: [
        'head-bg-instant-communication',
        'head-bg-broccoli-stethoscope',
        'head-bg-bills-statement-stethoscope',
        'head-bg-medical-mac',
        'head-bg-apple-watch',
        'head-bg-easy-to-use',
    ],
});

const a = [
    'head-bg-bills-statement-stethoscope',
    'head-bg-easy-to-use',
    'head-bg-medical-mac',
    'head-bg-broccoli-stethoscope',
    'head-bg-apple-watch',
    'head-bg-instant-communication',
];

let doctorsBenefits = buildDoctorsBenefits();

const rebuildDoctorsBenefits = (mode) => {
    doctorsBenefits.info = buildDoctorsBenefits(mode).info;
}

module.exports = {
    rebuildDoctorsBenefits,
    doctorsBenefits,
};
