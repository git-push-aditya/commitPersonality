# Commit Personality

[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://commit-personality.notaditya.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Cohere](https://img.shields.io/badge/AI-Cohere-orange)](https://cohere.ai)
[![Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://commit-personality.notaditya.dev)

**Discover the developer behind the commits.**  
Commit Personality analyzes a GitHub user's commit history and translates it into a fun, AI-generated developer persona — complete with archetype, one-liner, strengths, weaknesses, and a light joke.

🌐 **Live Demo:** [commit-personality.notaditya.dev](https://commit-personality.notaditya.dev)

---

## 🧠 Why This Exists

Commit histories reveal more than just code — they show thought process, consistency, and collaboration style.  
**Commit Personality** turns raw commit logs into human-readable behavioral insights that teams, communities, and startups can use to:

- Understand developer work patterns and communication tone.
- Add playful “commit personality” layers to dev tools or dashboards.
- Gamify contributions for community engagement or hackathons.
- Create cultural insights without invading privacy.

> ⚠️ *For entertainment and soft insight only — not a hiring evaluation tool.*

---

## ⚙️ How It Works

1. Enter a GitHub username.  
2. Backend fetches their latest commits from public repositories.  
3. Commit messages are cleaned, filtered, and analyzed.  
4. AI (Cohere or LLM) classifies them into one of four archetypes.  
5. Result: A sharable card with developer personality insights.

---

## 🧩 Personality Archetypes

| Archetype | Description |
|------------|--------------|
| **Conventional Connie** | Methodical, structured commits — every message is a micro-story. |
| **Hotfix Hank** | Fast-moving and fearless. If it’s broken, Hank’s already patching it. |
| **Verbose Vera** | Detail-oriented and expressive — commit messages double as changelogs. |
| **Amendable Andy** | The perfectionist — rewrites, rebases, and makes history look clean. |

---

## ✨ Features

- 🔍 **Instant Personality Cards** — Enter GitHub ID → Get persona instantly.  
- 🤖 **AI-Driven Analysis** — Uses structured prompts to ensure accurate archetypes.  
- 🎭 **Fun & Shareable Output** — Each result includes a joke, summary, and strengths.  
- 🧱 **Scalable Backend** — Built on Next.js API routes + Cohere LLM.  
- 🔐 **Privacy-Safe** — Uses only **public** GitHub data.

---

## 🏗️ Tech Stack

- **Frontend:** Next.js (App Router, TypeScript), Framer-motion, React-bits
- **Backend:** Next.js API Routes
- **AI Layer:** Cohere API (LLM prompt orchestration)
- **Data:** GitHub REST API (commit aggregation)
- **Deployment:** Vercel (custom domain: `commit-personality.notaditya.dev`)

---

## 🚀 Quick Start (Developers)

```bash
# 1. Clone the repository
git clone https://github.com/git-push-aditya/commit-personality.git
cd commit-personality

# 2. Install dependencies
npm install

# 3. Add environment variables
cp .env.example .env.local

# 4. Run locally
npm run dev
