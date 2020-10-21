curl -s https://publicsuffix.org/list/public_suffix_list.dat | \
  grep -E "^edu$|^edu\.|^ac\." | \
  sort | \
  jq -R -s -c 'split("\n")' > educational_tlds_and_slds.json
