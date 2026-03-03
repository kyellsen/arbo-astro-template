---
title: "Silvasonic"
description: "Autonomous bioacoustic recording station for Raspberry Pi 5 — capturing soundscapes from birdsong to ultrasonic bat calls, fully containerized and built for the field."
date: 2025-08-15
tags: ["Bioacoustics", "Raspberry Pi", "Podman", "IoT"]
color: gold
github: "https://github.com/kyellsen/silvasonic"
---

## Vision

Silvasonic turns a Raspberry Pi 5 into a resilient, autonomous recording station for long-term environmental sound monitoring. The goal: capture the entire soundscape — from avian vocalizations to ultrasonic bat calls — without human intervention, day and night.

## Who is it for?

- **Researchers** conducting long-term ecological field studies
- **Conservation teams** monitoring biodiversity through soundscapes
- **Bioacoustic enthusiasts** who need robust, unsupervised data collection

## Core Features

- 🎙️ **Autonomous Recording** — Unattended audio capture across multiple frequency ranges, designed for weeks of continuous operation
- 🐳 **Containerized Architecture** — Each service runs in its own Podman container — isolated, reproducible, and easy to update in the field
- 📊 **TimescaleDB Backend** — All metadata and system state stored in a time-series optimized PostgreSQL database
- 🔄 **Health Monitoring** — Redis-based heartbeat system with automatic service health tracking
- 🌐 **Web Interface** — Built-in status dashboard for monitoring and configuration (in development)

## Architecture at a Glance

The system follows a two-tier design: **Tier 1** handles infrastructure (database, message bus, controller, web UI), while **Tier 2** runs the actual recording services — managed and orchestrated by the controller.

| Component      | What it does                                       |
| -------------- | -------------------------------------------------- |
| **Controller** | Manages hardware, monitors health, orchestrates T2 |
| **Database**   | TimescaleDB — central state and metadata           |
| **Redis**      | Pub/Sub heartbeats and ephemeral status cache      |
| **Recorder**   | Audio capture service (Tier 2, immutable)          |
| **Web UI**     | FastAPI-based monitoring dashboard                 |

## Tech Stack

`Python` · `Podman` · `TimescaleDB` · `Redis` · `FastAPI` · `Raspberry Pi 5` · `just`

## Current Status

**Version 0.3.0** — Tier 2 container management is operational. The core infrastructure (database, message bus, controller, dev UI) is running. The recording service is scaffolded and under active development toward v1.0.0.
