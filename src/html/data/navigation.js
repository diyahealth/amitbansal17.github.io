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

const buildEmployersDropdown = () => {
    const titleUrlItems = [
        { title: 'Wellness Engagement', url: pages.wellness.url},
    ];

    return titleUrlItems.map(item => buildPage(item.title, item.url, item.variant));
}

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
    ];

    return titleUrlItems.map(item => buildPage(item.title, item.url, undefined));
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
            ...pageToLink(pages.healthSystems, null, postfix),
            dropdown: buildDropdownFromPageWithSubpages('healthSystems', { name: 'DiyaMD', url: pages.healthSystems.url }, postfix),
        },
        {
            ...pageToLink(pages.individuals, null, postfix),
            dropdown: buildDropdownFromPageWithSubpages('individuals', { name: 'myDiya', url: pages.individuals.url }, postfix),
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
