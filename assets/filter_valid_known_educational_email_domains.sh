# For each known domain, we check the existance of a DNS A record. (this may take a while)

cat known_educational_email_domains.json | \
   jq -r '.[]' | \
   xargs -I {} sh -c 'dig +short "$1" | tail -n1 | grep -q ^ && echo "$1"' sh {} | \
   tee /dev/fd/2 | \
   jq -R -s 'split("\n") | .[0:-1]' > valid_known_educational_email_domains.json
