const pages = require("./pages");

const pageToLink = (page, variant) => ({
    title: page.name,
    url: page.url,
    variant,
});

const buildDropdownFromPageWithSubpages = (pageKey, subheaderPageKey) => {
    const page = pages[pageKey];
    const subpageKeys = page ? Object.keys(pages).filter(subPageKey => pages[subPageKey].parent === pageKey) : undefined;
    console.log(pages);

    if (!subpageKeys || subpageKeys.length === 0) {
        return undefined;
    }
    const subheaderLink = pages[subheaderPageKey] ? pageToLink(pages[subheaderPageKey], 'subheader') : undefined;
    return [subheaderLink, ...subpageKeys.map(pageKey => {
        const page = pages[pageKey];
        return page && pageKey !== subheaderPageKey ? pageToLink(page) : undefined;
    })].filter(Boolean);
}

let navigationLinks = [];

const buildNavigationLinks = () => {
    navigationLinks.length = 0;
    navigationLinks.push(
        {
            ...pageToLink(pages.doctors),
            dropdown: buildDropdownFromPageWithSubpages('doctors', 'diyaMD'),
        },
        {
            ...pageToLink(pages.patientsAndFamilies),
            dropdown: buildDropdownFromPageWithSubpages('patientsAndFamilies', 'myDiya'),
        },
        {
            ...pageToLink(pages.aboutUs),
            dropdown: buildDropdownFromPageWithSubpages('aboutUs'),
        }
    );
}

module.exports = {
    navigation: navigationLinks,
    rebuildNavigation: buildNavigationLinks,
};
