const defaultLinkProps = {
    rel: 'noopener nofollow',
    target: '_blank',
    text: 'Watch YouTube video',
}

const patientsBenefits = {
    info: [
        {
            title: 'Emergency Access',
            text: 'First responders quickly and directly contact your family and regular doctors in case of an emergency.',
            link: {
                href: 'https://www.youtube.com/watch?v=AvAYfDaFpr0',
                ...defaultLinkProps,
            }
        },
        {
            title: 'COVID-19 Check',
            text: 'Manage your risk to the coronavirus and track your symptoms.',
            link: {
                href: 'https://www.youtube.com/watch?v=I6mY-9erW6c',
                ...defaultLinkProps,
            }
        },
        {
            title: 'Emergency Card',
            text: 'Using a QR code, doctors have instant access to your complete medical history.',
            link: {
                href: 'https://www.youtube.com/watch?v=o8FZ73Ajpro',
                ...defaultLinkProps,
            }
        },
        {
            title: 'Expert at Home',
            text: 'Receive an expert medical opinion from the safety of your home.',
            link: {
                href: 'https://www.youtube.com/watch?v=dNj_iTR2pHc',
                ...defaultLinkProps,
            }
        },
        {
            title: 'Medication Safety',
            text: 'Guard against drug interactions, allergies, and overdose risks.',
            link: {
                href: 'https://www.youtube.com/watch?v=Mi324TMy5h0',
                ...defaultLinkProps,
            }
        },
        {
            title: '24/7 Connection',
            text: 'Stay connected with your family and healthcare team at all times.',
            link: {
                href: 'https://www.youtube.com/watch?v=dNj_iTR2pHc',
                ...defaultLinkProps,
            }
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
}

module.exports = patientsBenefits;
