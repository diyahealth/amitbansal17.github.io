const pages = require("./pages");

const pageToLink = (page, variant, postfix) => ({
    title: page.name,
    url: page.url + postfix,
    variant,
});

const buildDropdownFromPageWithSubpages = (pageKey, subheaderPageKey, postfix) => {
    const page = pages[pageKey];
    const subpageKeys = page ? Object.keys(pages).filter(subPageKey => pages[subPageKey].parent === pageKey) : undefined;

    if (!subpageKeys || subpageKeys.length === 0) {
        return undefined;
    }
    const subheaderLink = pages[subheaderPageKey] ? pageToLink(pages[subheaderPageKey], 'subheader', postfix) : undefined;
    return [subheaderLink, ...subpageKeys.map(pageKey => {
        const page = pages[pageKey];
        return page && pageKey !== subheaderPageKey ? pageToLink(page, null, postfix) : undefined;
    })].filter(Boolean);
}

let navigationLinks = [];

const buildNavigationLinks = (mode) => {
    const postfix = mode === 'development' ? '.html' : '';
    navigationLinks.length = 0;
    navigationLinks.push(
        {
            ...pageToLink(pages.doctors, null, postfix),
            dropdown: buildDropdownFromPageWithSubpages('doctors', null, postfix),
        },
        {
            ...pageToLink(pages.patientsAndFamilies, null, postfix),
        },
        {
            ...pageToLink(pages.aboutUs, null, postfix),
        }
    );
}

module.exports = {
    navigation: navigationLinks,
    rebuildNavigation: buildNavigationLinks,
};
