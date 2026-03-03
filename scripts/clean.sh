#!/usr/bin/env bash
# Remove build artifacts. Use --all to also remove node_modules/.
source "$(dirname "$0")/common.sh"

log_header "Cleaning build artifacts"

remove_if_exists() {
  local dir="$1"
  if [[ -d "$dir" ]]; then
    log_step "Removing $dir"
    rm -rf "$dir"
    log_success "Removed $dir"
  else
    log_info "$dir does not exist — skipping."
  fi
}

remove_if_exists "$PROJECT_ROOT/dist"
remove_if_exists "$PROJECT_ROOT/.astro"

if [[ "${1:-}" == "--all" ]]; then
  remove_if_exists "$PROJECT_ROOT/node_modules"
fi

log_success "Clean complete!"
