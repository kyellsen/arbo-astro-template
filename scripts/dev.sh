#!/usr/bin/env bash
# Start the Astro dev server.
source "$(dirname "$0")/common.sh"

require_cmd pnpm
log_header "Starting Astro dev server"
run_cmd pnpm dev
