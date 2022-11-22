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
    const { ourBlog, newsAndResources, faq } = pages;
    return [pageToLink(ourBlog), pageToLink(newsAndResources), { ...pageToLink(faq), title: 'myDiya FAQ' }];
}

let navigationLinks = [];

const buildNavigationLinks = (mode) => {
    const postfix = mode === 'development' ? '.html' : '';
    navigationLinks.length = 0;
    navigationLinks.push(
        {
            ...pageToLink(pages.why, null, postfix),
            
        },
        {
            ...pageToLink(pages.healthSystems, null, postfix),
        },
        {
            ...pageToLink(pages.familyConnect, null, postfix),
            dropdown: buildFamilyDropdown(),
        },
        {
            ...pageToLink(pages.ourBlog, null, postfix),
            title: 'Resources',
            dropdown: buildBlogDropdown(),
        },
        {
            ...pageToLink(pages.aboutUs, null, postfix),
            dropdown: buildAboutUsDropdown(postfix),
        },
    );
}

module.exports = {
    navigation: navigationLinks,
    rebuildNavigation: buildNavigationLinks,
};
