const debug = require('debug')('is-educational-email-domain');

const commonEducationalTldSet = new Set(
  require('../assets/common_educational_tlds_and_slds.json')
);

const validKnownEducationalEmailDomainSet = new Set(
  require('../assets/valid_known_educational_email_domains.json')
);

const checkDomainTldInSet = (domain, tldSet) => {
  const dotSeparated = domain.split('.');
  const nrLabels = dotSeparated.length;

  for (let i = nrLabels - 1; i >= 0; i--) {
    const dotLabels = dotSeparated.slice(i).join('.');
    debug({ domain, nrLabels, dotLabels });
    if (tldSet.has(dotLabels)) {
      return true;
    }
  }

  return false;
};
const hasCommonEducationalTld = (domain) =>
  checkDomainTldInSet(domain, commonEducationalTldSet);

const hasAdhocEducationalTld = (domain) =>
  checkDomainTldInSet(domain, validKnownEducationalEmailDomainSet);

const isEducationalEmailDomain = (domain) =>
  hasCommonEducationalTld(domain) || hasAdhocEducationalTld(domain);

module.exports = {
  isEducationalEmailDomain,
  hasCommonEducationalTld,
  hasAdhocEducationalTld,
};
