#!/usr/bin/env bash
# Bootstrap the project: install dependencies, verify hooks.
source "$(dirname "$0")/common.sh"

log_header "Setting up project"

# -- Install dependencies ------------------------------------------------------

require_cmd pnpm
log_step "Installing dependencies"
run_cmd pnpm install

# -- Verify Husky hooks -------------------------------------------------------

HOOK_FILE="$PROJECT_ROOT/.husky/pre-commit"
if [[ -f "$HOOK_FILE" ]]; then
  log_success "Git pre-commit hook is installed."
else
  log_warning "Pre-commit hook not found at $HOOK_FILE"
  log_step "Running husky setup"
  run_cmd pnpm exec husky
fi

# -- Run doctor ----------------------------------------------------------------

log_step "Running environment check"
"$(dirname "$0")/doctor.sh"

log_success "Project setup complete!"
print_elapsed
