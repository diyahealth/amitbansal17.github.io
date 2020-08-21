const keys = require("./keys");
const contacts = require("./contacts");
const pages = require("./pages");
const benefits = require("./benefits");
const covidInfo = require("./covidInfo");
const organizationSizeOptions = require("./organizationSizeOptions");
const {
    doctorsBenefits,
} = require("./doctorsBenefits");
const {
    patientsBenefits,
} = require("./patientsBenefits");
const reviews = require("./reviews");
const { navigation } = require("./navigation");

module.exports = {
    keys,
    contacts,
    covidInfo,
    pages,
    navigation,
    benefits,
    organizationSizeOptions,
    doctorsBenefits,
    patientsBenefits,
    reviews
};
