#!/usr/bin/env bash
# Full QA pipeline: lint → format check → build.
# This is the confidence check before pushing (AGENTS.md §13).
source "$(dirname "$0")/common.sh"

require_cmd pnpm
log_header "Running full QA pipeline"

log_step "1/3  ESLint"
run_cmd pnpm lint

log_step "2/3  Prettier (check only)"
run_cmd pnpm format:check

log_step "3/3  Astro build"
run_cmd pnpm build

log_success "QA pipeline passed!"
print_elapsed
