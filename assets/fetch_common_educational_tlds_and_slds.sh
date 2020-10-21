curl -s https://publicsuffix.org/list/public_suffix_list.dat | \
  grep -E "^edu$|^edu\.|^ac\." | \
  sort | \
  jq -R -s 'split("\n") | .[0:-1]' > common_educational_tlds_and_slds.json
