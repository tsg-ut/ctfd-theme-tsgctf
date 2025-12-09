BEFORE="TSG CTF 2024"
AFTER="TSG CTF 2025"

SELF=$(basename "$0")
if sed --version >/dev/null 2>&1; then
  # GNU sed (Linux)
  SED_INPLACE=(-i)
else
  # BSD sed (macOS)
  SED_INPLACE=(-i '')
fi

grep -rl --exclude-dir=".git" --exclude="$SELF" --null "$BEFORE" . \
  | xargs -0 sed "${SED_INPLACE[@]}" "s/${BEFORE//\//\\/}/${AFTER//\//\\/}/g"

echo "Replaced '${BEFORE}' → '${AFTER}', excluding ${SELF}"
