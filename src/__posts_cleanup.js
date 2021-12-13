const path = require('path');
const fs = require('fs');

const DIRECTORY_ENDING = '_files';
const FILE_EXTENSION = '.html';
fs.readdirSync(__dirname).forEach(seoUrl);

function seoUrl(name) {
    if (name.endsWith(DIRECTORY_ENDING)) {
        processDirectory(name)
    } else if (name.endsWith(FILE_EXTENSION)) {
        processFile(name);
    }
}

function processDirectory(name) {
    renameEntry(name, DIRECTORY_ENDING);
}

function processFile(name) {
    const baseName = name.substring(0, name.length - FILE_EXTENSION.length);
    const normalizedName = normalizeName(baseName);
    const content = fs.readFileSync(name).toString();
    const newContent = content
        .replace(new RegExp(baseName + DIRECTORY_ENDING, 'g'), normalizedName + DIRECTORY_ENDING)
        .replace('<meta name="robots" content="noindex,follow">', '');

    fs.writeFileSync(name, newContent);

    renameEntry(name, FILE_EXTENSION);
}

function renameEntry(name, ending) {
    const baseName = name.substring(0, name.length - ending.length);
    const newName = normalizeName(baseName) + ending;
    fs.renameSync(name, newName);
}

function normalizeName(name) {
    name = name.replace(/[\W_]+$/g, '');
    name = name.replace(/[\W_]/g, '-');
    name = name.replace(/-+/g, '-')

    return name.toLowerCase();
}