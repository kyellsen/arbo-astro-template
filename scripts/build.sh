#!/usr/bin/env bash
# Build the production site to ./dist/.
source "$(dirname "$0")/common.sh"

require_cmd pnpm
log_header "Building production site"
run_cmd pnpm build
print_elapsed
