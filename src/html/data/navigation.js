const pages = require("./pages");


const pageToLink = (page, title = null) => ({ title: title ?? page.name, url: page.url });

const buildAboutUsDropdown = () => {
    const aboutUsUrl = pages.aboutUs.url;

    return [
        { title: 'Our Mission', url: `${aboutUsUrl}#mission` },
        { title: 'Our History', url: `${aboutUsUrl}#history` },
        { title: 'Our Team', url: `${aboutUsUrl}#team` },
    ];
}
let navigationLinks = [];

const buildNavigationLinks = (mode) => {
    const postfix = mode === 'development' ? '.html' : '';
    navigationLinks.length = 0;
    navigationLinks.push(
        {
            ...pageToLink(pages.why),
        },
        {
            title: 'Solutions',
            dropdown: [
                pageToLink(pages.aiInterpreter),
                pageToLink(pages.healthSystems, 'FamilyConnect™'),
            ],
        },
        {
            title: 'Who We Serve',
            dropdown: [
                pageToLink(pages.healthSystems, 'Hospitals'),
                pageToLink(pages.familyConnect, 'Long Term Care'),
            ],
        },
        {
            ...pageToLink(pages.blog, 'Resources'),
            dropdown: [
                pageToLink(pages.blog),
                pageToLink(pages.newsAndResources),
                pageToLink(pages.faq, 'myDiya FAQ'),
            ],
        },
        {
            ...pageToLink(pages.aboutUs),
            dropdown: buildAboutUsDropdown(postfix),
        },
    );
}

module.exports = {
    navigation: navigationLinks,
    rebuildNavigation: buildNavigationLinks,
};
