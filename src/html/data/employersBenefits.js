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

const buildEmployersBenefits = (mode) => {
    const employersUrl = pages.employers.url;
    return {
        info: [
            {
                title: 'Seamless Integration with Existing Systems',
                text: 'Connect and centralize all of your data sources',
                link: generateLinkObject(`${employersUrl}#how-it-works`, mode),
            },
            {
                title: 'Prevent Rising Healthcare Costs',
                text: 'Identify high risks and create individualized resources for employees.',
                link: generateLinkObject(`${employersUrl}#prevent-rising-costs`, mode),
            },
            {
                title: 'Enhance Employee Well-Being',
                text: 'Increase employee engagement in health, wellness, and benefits programs',
                link: generateLinkObject(`${employersUrl}#employee-well-being`, mode),
            },
            {
                title: 'Drive Strategic Change',
                text: 'Generate insights that enable HR to support organizational change',
                link: generateLinkObject(`${employersUrl}#strategic-change`, mode),
            },
        ],
        imagesClasses: [
            'head-bg-employee-engagement',
            'head-bg-employee-conversation',
            'head-bg-happy-employees',
            'head-bg-happy-hr',
            'head-bg-happy-logo',
        ],
    };
};

let employersBenefits = buildEmployersBenefits();

const rebuildEmployersBenefits = (mode) => {
    employersBenefits.info = buildEmployersBenefits(mode).info;
}

module.exports = {
    rebuildEmployersBenefits,
    employersBenefits,
};
