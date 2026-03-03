# Arbo Astro Template — Justfile
# Usage: just <recipe>    Run: just --list

# Default: show available commands
default:
    @just --list

# Start Astro dev server
dev:
    ./scripts/dev.sh

# Build production site to ./dist/
build:
    ./scripts/build.sh

# Preview production build locally
preview:
    ./scripts/preview.sh

# Run lint + format check (read-only)
check:
    ./scripts/check.sh

# Auto-fix lint errors + format all files
fix:
    ./scripts/fix.sh

# Full QA pipeline: lint + format check + build
qa:
    ./scripts/qa.sh

# Remove build artifacts (pass --all to also remove node_modules/)
clean *ARGS:
    ./scripts/clean.sh {{ ARGS }}

# Bootstrap project: install deps + verify hooks
setup:
    ./scripts/setup.sh

# Check environment health (node, pnpm, just, hooks)
doctor:
    ./scripts/doctor.sh
