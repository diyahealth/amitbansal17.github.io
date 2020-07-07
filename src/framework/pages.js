const toKebabCase = str => str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const buildPageFromMetadata = (meta, existingPages) => {
    const parentPage = meta.parent ? existingPages[meta.parent] : undefined;

    const titleInKebab = toKebabCase(meta.name);
    return {
        key: meta.id,
        page: {
            url: parentPage ? `${parentPage.url}/${titleInKebab}` : `./${titleInKebab}`,
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
