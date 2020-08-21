const pages = require("./pages");

const buildPage = (title, url, variant, postfix) => ({
    title,
    url: url ? url + postfix : undefined,
    variant,
});

const pageToLink = (page, variant, postfix) => buildPage(page.name, page.url, variant, postfix);

const buildDropdownFromPageWithSubpages = (pageKey, subheader, postfix) => {
    const page = pages[pageKey];
    const subpageKeys = page ? Object.keys(pages).filter(subPageKey => pages[subPageKey].parent === pageKey) : undefined;

    if (!subpageKeys || subpageKeys.length === 0) {
        return undefined;
    }
    const subheaderPage = subheader ? pages[subheader] : undefined;

    const subheaderLink = subheader ? buildPage(
        subheaderPage ? subheader.name : subheader,
        subheaderPage ? subheader.url : undefined,
        'subheader', postfix) : undefined;

    const links = [subheaderLink, ...subpageKeys.map(pageKey => {
        const page = pages[pageKey];
        return page && pageKey !== subheader ? pageToLink(page, null, postfix) : undefined;
    })].filter(Boolean);

    console.log(links);
    return links;
}

let navigationLinks = [];

const buildNavigationLinks = (mode) => {
    const postfix = mode === 'development' ? '.html' : '';
    navigationLinks.length = 0;
    navigationLinks.push(
        {
            ...pageToLink(pages.doctors, null, postfix),
            dropdown: buildDropdownFromPageWithSubpages('doctors', 'DiyaMD', postfix),
        },
        {
            ...pageToLink(pages.patientsAndFamilies, null, postfix),
            dropdown: buildDropdownFromPageWithSubpages('patientsAndFamilies', 'myDiya', postfix),
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
