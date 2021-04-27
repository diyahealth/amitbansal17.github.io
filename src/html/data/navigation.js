const pages = require("./pages");

const buildPage = (title, url, variant, postfix) => {
    const result = {
        title,
        url,
        variant,
    };

    if (result.url && postfix && !url.endsWith(postfix)) {
        result.url = result.url + postfix;
    }
    return result;
};

const pageToLink = (page, variant, postfix) => buildPage(page.name, page.url, variant, postfix);

const buildDropdownFromPageWithSubpages = (pageKey, subheader, postfix) => {
    const page = pages[pageKey];
    const subpageKeys = page ? Object.keys(pages).filter(subPageKey => pages[subPageKey].parent === pageKey) : undefined;

    if (!subpageKeys || subpageKeys.length === 0) {
        return undefined;
    }
    const isPage = Boolean(subheader.url);

    const subheaderLink = subheader? buildPage(
        isPage ? subheader.name : subheader,
        isPage ? subheader.url : undefined,
        'subheader', postfix) : undefined;

    const links = [subheaderLink, ...subpageKeys.map(pageKey => {
        const page = pages[pageKey];
        return page && pageKey !== subheader ? pageToLink(page, null, postfix) : undefined;
    })].filter(Boolean);
    return links;
}

const buildAboutUsDropdown = () => {
    const aboutUsUrl = pages.aboutUs.url;

    const titleUrlItems = [
        { title: 'Our Mission', url: `${aboutUsUrl}#mission`},
        { title: 'Our History', url: `${aboutUsUrl}#history`},
        { title: 'Our Team', url: `${aboutUsUrl}#team`},
        { title: 'Partnerships', url: `${aboutUsUrl}#partnerships `},
        { title: 'Careers', url: `${aboutUsUrl}#careers `},
    ];

    return titleUrlItems.map(item => buildPage(item.title, item.url, undefined));
}

const buildEmployersDropdown = () => {
    const employersUrl = pages.employers.url;

    const titleUrlItems = [
        { title: 'DiyaHR', variant: 'subheader', url: employersUrl},
        { title: 'How it Works', url: `${employersUrl}#how-it-works`},
        { title: 'Prevent Rising Costs', url: `${employersUrl}#prevent-rising-costs`},
        { title: 'Enhance Employee Well-Being', url: `${employersUrl}#employee-well-being`},
        { title: 'Drive Strategic Change', url: `${employersUrl}#strategic-change`},
        { title: 'Security Features', url: `${employersUrl}#security-features`},
    ];

    return titleUrlItems.map(item => buildPage(item.title, item.url, item.variant));
}

const buildBlogDropdown = () => {
    const { ourBlog, newsAndResources } = pages;
    return [pageToLink(ourBlog), pageToLink(newsAndResources)];
}

let navigationLinks = [];

const buildNavigationLinks = (mode) => {
    const postfix = mode === 'development' ? '.html' : '';
    navigationLinks.length = 0;
    navigationLinks.push(
        {
            ...pageToLink(pages.employers, null, postfix),
            dropdown: buildEmployersDropdown(),
        },
        {
            ...pageToLink(pages.doctors, null, postfix),
            dropdown: buildDropdownFromPageWithSubpages('doctors', { name: 'DiyaMD', url: pages.doctors.url }, postfix),
        },
        {
            ...pageToLink(pages.patientsAndFamilies, null, postfix),
            dropdown: buildDropdownFromPageWithSubpages('patientsAndFamilies', { name: 'myDiya', url: pages.patientsAndFamilies.url }, postfix),
        },
        {
            ...pageToLink(pages.aboutUs, null, postfix),
            dropdown: buildAboutUsDropdown(postfix),
        },
        {
            ...pageToLink(pages.ourBlog, null, postfix),
            dropdown: buildBlogDropdown(),
        }
    );
}

module.exports = {
    navigation: navigationLinks,
    rebuildNavigation: buildNavigationLinks,
};
