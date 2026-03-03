#!/usr/bin/env bash
# Run lint + format check (read-only, no file mutations).
source "$(dirname "$0")/common.sh"

require_cmd pnpm
log_header "Running quality checks"

log_step "ESLint"
run_cmd pnpm lint

log_step "Prettier (check only)"
run_cmd pnpm format:check

log_success "All checks passed!"
print_elapsed
