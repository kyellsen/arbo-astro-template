---
title: "ArboLab"
description: "An analytics-first Python ecosystem for reproducible analysis of sensor and field experiment data — bridging raw observations and scientific insights."
date: 2025-06-01
tags: ["Python", "DuckDB", "Parquet", "Data Science"]
color: magenta
github: "https://github.com/kyellsen/arbolab"
---

## Vision

ArboLab is a domain-first Python ecosystem for anyone who works with environmental sensor data. It bridges raw physical observations — from inclinometers on trees, tension sensors on cables, acoustic probes — and transforms them into reproducible, publishable scientific insights.

The guiding principle: **every analysis step must be traceable, every result reproducible.**

## Who is it for?

- **Researchers** in tree biomechanics, forestry science, or environmental monitoring
- **Arborists & consultants** who need standardized, data-driven assessment reports
- **Data scientists** working with experimental sensor datasets in ecological contexts

## Core Features

- 🌳 **Domain-First Data Model** — All entities (Projects, Experiments, Sensors, Trees) follow a strict, normative glossary — no ambiguity, no ad-hoc naming
- ⚡ **Analytics at Full Resolution** — Observations stored in Parquet (wide layout) and processed via DuckDB — high performance without sampling or aggregation loss
- 🔬 **Managed Lab Workspaces** — Every ingestion, transformation, and analysis step is tracked within a reproducible workspace
- 📋 **Hybrid Storage** — DuckDB/Parquet for scientific data and analytics; PostgreSQL for multi-tenancy and web application state
- 🌐 **Web Application** — FastAPI-based interface for managing projects, experiments, and analysis workflows (in development)

## Design Philosophy

ArboLab separates concerns clearly:

| Layer           | Technology | Purpose                                       |
| --------------- | ---------- | --------------------------------------------- |
| **Observation** | Parquet    | Raw sensor data, full resolution, immutable   |
| **Analytics**   | DuckDB     | Relational metadata, queries, transformations |
| **Application** | PostgreSQL | Identity, multi-tenancy, web state            |
| **Interface**   | FastAPI    | REST API and web UI                           |

## Tech Stack

`Python` · `DuckDB` · `Parquet` · `FastAPI` · `PostgreSQL` · `Podman` · `uv`

## Current Status

**Architecture-first phase** — The domain model, data architecture, and documentation are established. Implementation follows an iterative MVP approach, with the core data ingestion and analytics pipeline under active development.
