#!/usr/bin/env bash
# Preview the production build locally.
source "$(dirname "$0")/common.sh"

require_cmd pnpm
log_header "Previewing production build"
run_cmd pnpm preview
