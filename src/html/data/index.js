const keys = require("./keys");
const contacts = require("./contacts");
const pages = require("./pages");
const benefits = require("./benefits");
const organizationSizeOptions = require("./organizationSizeOptions");
const {
    doctorsBenefits,
} = require("./doctorsBenefits");
const patientsBenefits = require("./patientsBenefits");
const reviews = require("./reviews");
const { navigation } = require("./navigation");

module.exports = {
    keys,
    contacts,
    pages,
    navigation,
    benefits,
    organizationSizeOptions,
    doctorsBenefits,
    patientsBenefits,
    reviews
};
