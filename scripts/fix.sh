#!/usr/bin/env bash
# Auto-fix lint errors and format all files.
source "$(dirname "$0")/common.sh"

require_cmd pnpm
log_header "Auto-fixing lint & formatting"

log_step "ESLint (auto-fix)"
run_cmd pnpm lint:fix

log_step "Prettier (write)"
run_cmd pnpm format

log_success "All files fixed & formatted!"
print_elapsed
