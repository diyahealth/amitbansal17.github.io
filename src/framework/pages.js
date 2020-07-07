const buildPageFromMetadata = (meta, existingPages, root) => {
    const parentPage = meta.parent ? existingPages[meta.parent] : undefined;

    return {
        key: meta.id,
        page: {
            url: `./${root}`,
            name: meta.name,
            title: meta.title ? meta.title : parentPage ? `${meta.name} - ${parentPage.title}` : `${meta.name} - Diya Health`,
            description: meta.description,
            parent: meta.parent,
        },
    };
}

module.exports = {
    buildPageFromMetadata,
}
