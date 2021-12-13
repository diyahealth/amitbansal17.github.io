const static = require("../html/data").pages;
const fs = require("fs");
const path = require("path");

const buildStaticUrls = () => Object.values(static).map(x => x.url.substring(2));
const buildDynamicUrls = (root) => fs.readdirSync(root);
const buildBlogUrls = (root) => fs.readdirSync(root)
    .filter(x => path.extname(x) === '.html')
    .map(x => 'posts/' + x);

function buildSiteMap(dynamicRoot, blogRoot, siteMapOut) {
    const pageNames = buildStaticUrls()
        .concat(buildDynamicUrls(dynamicRoot))
        .concat(buildBlogUrls(blogRoot));
    const urls = pageNames.map(x => 'https://www.diyahealth.org/' + encodeURI(x));
    const content = urls.join('\r\n');
    const outPath = path.join(siteMapOut, 'sitemap.txt');
    ensureDirectoryExistence(outPath);
    fs.writeFileSync(outPath, content, { encoding: 'utf-8' });
}

function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    fs.mkdirSync(dirname, { recursive: true });
}


module.exports = buildSiteMap;