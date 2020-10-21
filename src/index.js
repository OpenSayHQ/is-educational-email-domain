const commonEducationalTldSet = new Set(
  require('../assets/common_educational_tlds_and_slds.json')
);

const adhocEducationalTldSet = new Set(
  require('../assets/adhoc_educational_tlds_and_slds.json')
);

const knownEducationalEmailDomainSet = new Set(
  require('../assets/known_educational_email_domains.json')
);

const checkDomainTldInSet = (domain, tldSet) => {
  try {
    const dotSeparated = domain.split('.');
    const tld = dotSeparated[dotSeparated.length - 1];
    const sld = dotSeparated[dotSeparated.length - 2];
    return tldSet.has(tld) || tldSet.has(`${sld}.${tld}`);
  } catch (e) {
    throw new Error(`Couldn't parse ${domain} - probably not a valid domain.`);
  }
};
const hasCommonEducationalTld = (domain) =>
  checkDomainTldInSet(domain, commonEducationalTldSet);

const hasAdhocEducationalTld = (domain) =>
  checkDomainTldInSet(domain, adhocEducationalTldSet);

const hasKnownEducationalEmailDomain = (domain) =>
  knownEducationalEmailDomainSet.has(domain);

const isEducationalEmailDomain = (domain) =>
  hasCommonEducationalTld(domain) ||
  hasAdhocEducationalTld(domain) ||
  hasKnownEducationalEmailDomain(domain);

module.exports = {
  isEducationalEmailDomain,
  hasAdhocEducationalTld,
  hasCommonEducationalTld,
  hasKnownEducationalEmailDomain,
};
