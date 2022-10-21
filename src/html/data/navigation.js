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
        { title: 'COVID Compliance-as-a-Service', url: pages.employers.url },
        { title: 'Wellness Engagement', url: pages.wellness.url },
    ];

    return titleUrlItems.map(item => buildPage(item.title, item.url, item.variant));
}

const buildDropdownFromPageWithSubpages = (pageKey, subheader, postfix) => {
    const page = pages[pageKey];
    const subpageKeys = page ? Object.keys(pages).filter(subPageKey => pages[subPageKey].parent === pageKey) : undefined;

    if (!subpageKeys || subpageKeys.length === 0) {
        return undefined;
    }

    const links = [...subpageKeys.map(pageKey => {
        const page = pages[pageKey];
        return page && pageKey !== subheader ? pageToLink(page, null, postfix) : undefined;
    })].filter(Boolean);
    return links;
}

const buildAboutUsDropdown = () => {
    const aboutUsUrl = pages.aboutUs.url;

    const titleUrlItems = [
        { title: 'Our Mission', url: `${aboutUsUrl}#mission` },
        { title: 'Our History', url: `${aboutUsUrl}#history` },
        { title: 'Our Team', url: `${aboutUsUrl}#team` },
       
    ];

    return titleUrlItems.map(item => buildPage(item.title, item.url, undefined));
}

const buildFamilyDropdown = () => {
    const familyUrl = pages.familyConnect.url;

    const titleUrlItems = [
        { title: 'Shared Customers', url: `${familyUrl}#shared-customers` },
        { title: 'Administrators', url: `${familyUrl}#administrator` },
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
            ...pageToLink(pages.healthSystems, null, postfix),
            dropdown: buildDropdownFromPageWithSubpages('healthSystems', { name: 'DiyaMD', url: pages.healthSystems.url }, postfix),
        },
        {
            ...pageToLink(pages.familyConnect, null, postfix),
            dropdown: buildFamilyDropdown(),
        },
      
        {
            ...pageToLink(pages.aboutUs, null, postfix),
            dropdown: buildAboutUsDropdown(postfix),
        },
        {
            ...pageToLink(pages.ourBlog, null, postfix),
            dropdown: buildBlogDropdown(),
        },

    );
}

module.exports = {
    navigation: navigationLinks,
    rebuildNavigation: buildNavigationLinks,
};
