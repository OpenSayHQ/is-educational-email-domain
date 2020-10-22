curl https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json  | \
jq -r '.[].domains[]' | \
grep -v -E '\.edu$|\.edu\.[a-z]{2,3}$|\.ac\.[a-z]{2,3}$' | \
jq -R -s 'split("\n") | .[0:-1]' > known_educational_email_domains.json
