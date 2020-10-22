
# Data

## Common Educational TLDs and SLDs

We fetch the common educational tlds and slds from [publicsuffix.org](https://publicsuffix.org/list/public_suffix_list.dat).

See `fetch_common_educational_tlds_and_slds.sh`.

## Ad-hoc Educational Email Domains

We fetch a list of known educational domains from
[github.com/Hipo/university-domains-list](https://github.com/HipO/university-domains-list).

See `fetch_known_educational_email_domains.sh`.

We filter for only valid domains - domains that has a `DNS` `A` record.

See `filter_valid_known_educational_email_domains.sh`. Note that this may take some time.
