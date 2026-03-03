#!/usr/bin/env bash
# ==============================================================================
# common.sh — Shared utilities for Arbo developer scripts.
#
# Source this file at the top of every script:
#   source "$(dirname "$0")/common.sh"
#
# Provides: colored logging, command wrappers, timing, and project root detection.
# ==============================================================================

set -euo pipefail

# -- Project Root --------------------------------------------------------------

PROJECT_ROOT="$(git -C "$(dirname "${BASH_SOURCE[0]}")" rev-parse --show-toplevel)"
readonly PROJECT_ROOT

# -- ANSI Colors ---------------------------------------------------------------

if [[ -t 1 ]]; then
  readonly COLOR_HEADER=$'\033[95m'
  readonly COLOR_BLUE=$'\033[94m'
  readonly COLOR_CYAN=$'\033[96m'
  readonly COLOR_GREEN=$'\033[92m'
  readonly COLOR_YELLOW=$'\033[93m'
  readonly COLOR_RED=$'\033[91m'
  readonly COLOR_BOLD=$'\033[1m'
  readonly COLOR_RESET=$'\033[0m'
else
  # No colors when piped / non-interactive
  readonly COLOR_HEADER=''
  readonly COLOR_BLUE=''
  readonly COLOR_CYAN=''
  readonly COLOR_GREEN=''
  readonly COLOR_YELLOW=''
  readonly COLOR_RED=''
  readonly COLOR_BOLD=''
  readonly COLOR_RESET=''
fi

# -- Logging Functions ---------------------------------------------------------

log_header() {
  printf "\n%s%s🚀 %s%s\n" "$COLOR_HEADER" "$COLOR_BOLD" "$1" "$COLOR_RESET"
}

log_step() {
  printf "\n%s👉 %s%s\n" "$COLOR_CYAN" "$1" "$COLOR_RESET"
}

log_success() {
  printf "%s✅ %s%s\n" "$COLOR_GREEN" "$1" "$COLOR_RESET"
}

log_warning() {
  printf "%s⚠️  %s%s\n" "$COLOR_YELLOW" "$1" "$COLOR_RESET"
}

log_error() {
  printf "%s❌ %s%s\n" "$COLOR_RED" "$1" "$COLOR_RESET" >&2
}

log_info() {
  printf "%sℹ️  %s%s\n" "$COLOR_BLUE" "$1" "$COLOR_RESET"
}

# -- Command Helpers -----------------------------------------------------------

# Run a command with logging and automatic failure handling.
# Usage: run_cmd pnpm build
run_cmd() {
  local cmd_str="$*"
  log_step "Running: $cmd_str"
  if ! "$@"; then
    log_error "Command failed: $cmd_str"
    exit 1
  fi
}

# Check that a required command exists in PATH.
# Usage: require_cmd node pnpm just
require_cmd() {
  for cmd in "$@"; do
    if ! command -v "$cmd" &>/dev/null; then
      log_error "'$cmd' is not installed or not in PATH."
      exit 1
    fi
  done
}

# -- Directory Helpers ---------------------------------------------------------

# Create a directory if it doesn't exist, with logging.
# Usage: ensure_dir /path/to/dir
ensure_dir() {
  local dir="$1"
  if [[ ! -d "$dir" ]]; then
    log_step "Creating directory: $dir"
    mkdir -p "$dir"
  fi
}

# -- Timing Helpers ------------------------------------------------------------

# Script start time (auto-set when common.sh is sourced)
_SCRIPT_START_SECONDS=$SECONDS

# Format elapsed seconds into human-readable string.
# Usage: fmt_duration 125  →  "2m 5s"
fmt_duration() {
  local total="${1:-0}"
  if (( total < 60 )); then
    printf "%ds" "$total"
  else
    local mins=$(( total / 60 ))
    local secs=$(( total % 60 ))
    printf "%dm %ds" "$mins" "$secs"
  fi
}

# Print elapsed time since the script started.
# Usage: print_elapsed (call at the end of a script)
print_elapsed() {
  local elapsed=$(( SECONDS - _SCRIPT_START_SECONDS ))
  log_success "Done in $(fmt_duration "$elapsed")."
}
