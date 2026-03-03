#!/usr/bin/env bash
# Check environment health: verify required tools and project state.
source "$(dirname "$0")/common.sh"

log_header "Environment Health Check"

PASS=0
FAIL=0

check_tool() {
  local name="$1"
  if command -v "$name" &>/dev/null; then
    local version
    # Capture full output first to avoid SIGPIPE with pipefail
    version="$("$name" --version 2>/dev/null || true)"
    version="${version%%$'\n'*}"  # Keep first line only
    log_success "$name  →  $version"
    (( PASS++ )) || true
  else
    log_error "$name  →  NOT FOUND"
    (( FAIL++ )) || true
  fi
}

check_dir() {
  local dir="$1"
  local label="$2"
  if [[ -d "$dir" ]]; then
    log_success "$label  →  exists"
    (( PASS++ )) || true
  else
    log_warning "$label  →  missing (run 'just setup')"
    (( FAIL++ )) || true
  fi
}

check_file() {
  local file="$1"
  local label="$2"
  if [[ -f "$file" ]]; then
    log_success "$label  →  exists"
    (( PASS++ )) || true
  else
    log_warning "$label  →  missing"
    (( FAIL++ )) || true
  fi
}

# -- Tools ---------------------------------------------------------------------

log_step "Required tools"
check_tool node
check_tool pnpm
check_tool just

# -- Project state -------------------------------------------------------------

log_step "Project state"
check_dir "$PROJECT_ROOT/node_modules" "node_modules/"
check_file "$PROJECT_ROOT/.husky/pre-commit" ".husky/pre-commit"

# -- Summary -------------------------------------------------------------------

printf "\n"
if (( FAIL == 0 )); then
  log_success "All $PASS checks passed!"
else
  log_warning "$PASS passed, $FAIL failed."
  exit 1
fi
