<div align="center">

<img src="assets/banner.png" alt="Vibe Search Banner" width="100%"/>

<br/>

<img src="assets/logo.png" alt="Vibe Search Logo" width="120"/>

# Vibe Search

### 🧠 The AI-First Browser Built on Gecko

**Secure · Private · Intelligent**

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)
[![Engine: Gecko](https://img.shields.io/badge/Engine-Gecko_(Firefox)-FF7139?style=for-the-badge&logo=firefox&logoColor=white)](https://www.mozilla.org/en-US/firefox/)
[![Platform: macOS](https://img.shields.io/badge/Platform-macOS-000000?style=for-the-badge&logo=apple&logoColor=white)](https://www.apple.com/macos/)
[![AI Powered](https://img.shields.io/badge/AI-Copilot_Built--In-8b5cf6?style=for-the-badge&logo=openai&logoColor=white)](#-ai-copilot-features)
[![GitHub Release](https://img.shields.io/github/v/release/Bhishy3/Vibe-search?style=for-the-badge&color=8b5cf6)](https://github.com/Bhishy3/Vibe-search/releases)

<br/>

[**Getting Started**](#-getting-started) · [**Features**](#-features) · [**Architecture**](#-architecture) · [**Security**](#-security--privacy) · [**Roadmap**](#-roadmap) · [**Contributing**](#-contributing)

<br/>

</div>

---

## 🚀 What is Vibe Search?

**Vibe Search** is a next-generation, AI-powered web browser built on Mozilla's **Gecko engine** — the same battle-tested rendering engine behind Firefox. Unlike traditional browsers that bolt AI onto the side, Vibe Search treats artificial intelligence as a **core system component** that can observe, analyze, and act on web content in real-time.

It combines the **security-first philosophy** of Mullvad Browser, the **sleek vertical UI** of Arc and Zen Browser, and the **deep customizability** of Vivaldi — all in one cohesive package.

<details>
<summary><b>💡 Why Gecko over Chromium?</b></summary>
<br/>

| Consideration | Gecko (Firefox) | Chromium (Chrome) |
|:---|:---|:---|
| **Privacy Architecture** | Process isolation + strict anti-fingerprinting built into the engine | Relies on extensions for most privacy features |
| **Telemetry** | Can be fully disabled at the config level | Deeply integrated into the engine; harder to strip |
| **Extension Security** | WebExtensions API with restricted permissions model | Manifest V3 limits ad-blockers and privacy extensions |
| **Web Monoculture** | Promotes engine diversity and open web standards | 65%+ market share risks a single point of control |
| **Memory Efficiency** | Better RAM usage on many-tab workloads | Higher baseline memory consumption |

> We chose Gecko because **true privacy starts at the engine level**, not the extension layer.

</details>

---

## ✨ Features

### 🔒 Hardened Security Profile

Every instance of Vibe Search runs inside an **isolated, locked-down Firefox profile** with over 30 security preferences pre-configured:

| Protection | Status | Details |
|:---|:---:|:---|
| Fingerprint Resistance | ✅ Enabled | `privacy.resistFingerprinting = true` |
| Strict Tracking Protection | ✅ Enabled | Blocks trackers, cryptominers, fingerprinters |
| First-Party Cookie Isolation | ✅ Enabled | Cookies are sandboxed per domain |
| WebRTC Leak Prevention | ✅ Blocked | `media.peerconnection.enabled = false` |
| Telemetry & Crash Reports | ✅ Disabled | All Mozilla telemetry endpoints blocked |
| Speculative Connections | ✅ Disabled | No DNS prefetching or link pre-connections |
| Experiments & Studies | ✅ Disabled | No remote A/B testing or Shield studies |

### 🎨 Custom UI with userChrome.css

The browser's interface is redesigned from the ground up using Firefox's powerful `userChrome.css` layer:

- **Hidden horizontal tab bar** — for a clean, distraction-free viewport
- **Dark-themed navigation bar** — with glowing accent colors and rounded inputs
- **Modern toolbar buttons** — with smooth hover transitions
- **Styled sidebar containers** — for the AI panel integration

### 🤖 AI Copilot Features

The built-in **Antigravity AI Copilot** runs as a native Firefox WebExtension inside the sidebar:

| Feature | Description |
|:---|:---|
| **📝 Page Summarization** | One-click summaries of any webpage content |
| **🔍 DOM Security Analysis** | Real-time SSL, content-length, and tracker leak detection |
| **💬 Contextual Chat** | Ask questions about the active page with full content awareness |
| **🛡️ Privacy Audit** | Verifies that no tracking scripts are active in the session |

### 🏗️ Project Architecture

```
vibe-search/
├── profile/                    # Custom Firefox profile
│   ├── prefs.js               # 30+ hardened security preferences
│   └── chrome/
│       └── userChrome.css     # Custom dark-themed UI overlay
├── extension/                  # AI Copilot WebExtension
│   ├── manifest.json          # Extension declaration & permissions
│   ├── background.js          # Background service worker
│   ├── sidebar.html           # AI chat panel interface
│   └── sidebar.js             # Page analysis & chat logic
├── assets/                     # Branding & media
│   ├── logo.png               # Project logo
│   └── banner.png             # Repository banner
├── launcher.js                # macOS auto-launch script
├── package.json               # npm scripts & metadata
└── .gitignore                 # Clean repository hygiene
```

---

## 📦 Getting Started

### Prerequisites

| Requirement | Version | Notes |
|:---|:---|:---|
| **Node.js** | 18+ | For running the launcher script |
| **Mozilla Firefox** | Latest | Must be installed in `/Applications` (macOS) |
| **Git** | 2.0+ | For cloning the repository |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Bhishy3/Vibe-search.git
cd Vibe-search

# 2. Launch the secure browser
npm start
```

That's it! The launcher will automatically:
- ✅ Detect Firefox on your system
- ✅ Load the hardened security profile
- ✅ Install the AI Copilot extension
- ✅ Open an isolated browser instance

### Using the AI Copilot

1. Click the **sidebar toggle** button (or press `Ctrl+B` / `Cmd+B`)
2. Select **Antigravity AI** from the sidebar dropdown
3. Use the quick action buttons or type a custom prompt:
   - `📝 Summarize Page` — Get an instant page summary
   - `🔍 Analyze DOM` — Run a security and content audit
   - Type any question about the current page

---

## 🏛️ Architecture

Vibe Search is built on a **three-layer architecture**:

```
┌─────────────────────────────────────────────┐
│              Presentation Layer              │
│  userChrome.css · Dark Theme · Vertical UI  │
├─────────────────────────────────────────────┤
│             Intelligence Layer               │
│  WebExtension · Page Analysis · AI Chat     │
├─────────────────────────────────────────────┤
│               Security Layer                 │
│  prefs.js · Anti-Fingerprint · Isolation    │
├─────────────────────────────────────────────┤
│            Mozilla Gecko Engine              │
│  SpiderMonkey JS · Stylo CSS · WebRender    │
└─────────────────────────────────────────────┘
```

### Why This Approach?

Instead of compiling a full Firefox fork (which requires 30GB+ disk space and 3-5 hours of build time), we use **profile-level customization** — the same technique used by security-focused distributions like Mullvad Browser and LibreWolf. This gives us:

- **Instant updates**: Automatically inherits Firefox security patches
- **Zero compilation**: No C++/Rust toolchain required
- **Full extension support**: Compatible with all Firefox Add-ons
- **Portable**: The entire profile can be zipped and distributed

---

## 🔐 Security & Privacy

Vibe Search is designed with a **zero-trust browsing model**:

<table>
<tr>
<td width="50%">

### What We Block
- ❌ All Mozilla telemetry
- ❌ Crash report uploads
- ❌ DNS prefetching
- ❌ Speculative connections
- ❌ WebRTC IP leaks
- ❌ Cross-site tracking cookies
- ❌ Browser fingerprinting
- ❌ Remote experiments

</td>
<td width="50%">

### What We Enable
- ✅ First-party cookie isolation
- ✅ Strict tracking protection
- ✅ Fingerprint resistance
- ✅ HTTPS-only indicators
- ✅ Custom isolated profile
- ✅ No-remote process isolation
- ✅ Purged caches on launch
- ✅ Extension sandbox

</td>
</tr>
</table>

> **Verify it yourself**: Visit [Cover Your Tracks](https://coveryourtracks.eff.org/) with Vibe Search to see the active protections.

---

## 🗺️ Roadmap

| Phase | Feature | Status |
|:---:|:---|:---:|
| 1 | ✅ Gecko profile hardening & custom UI | **Complete** |
| 2 | ✅ AI Copilot sidebar WebExtension | **Complete** |
| 3 | ✅ macOS auto-launcher with isolation | **Complete** |
| 4 | 🔧 Vertical tab sidebar (Tree Style Tab integration) | **Planned** |
| 5 | 🔧 Semantic history search with vector embeddings | **Planned** |
| 6 | 🔧 Local LLM support (Ollama / WebLLM) | **Planned** |
| 7 | 🔧 Agentic browsing (multi-step task automation) | **Planned** |
| 8 | 🔧 Cross-platform support (Linux, Windows) | **Planned** |

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/Vibe-search.git
cd Vibe-search

# Make your changes and test
npm start

# Submit a PR
git checkout -b feature/your-feature
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

---

## 📄 License

This project is licensed under the **Mozilla Public License 2.0** — see the [LICENSE](LICENSE) file for details.

This means you can freely use, modify, and distribute the code, but modifications to MPL-covered files must remain open source.

---

## 🙏 Acknowledgments

Vibe Search stands on the shoulders of giants:

- [**Mozilla Firefox**](https://www.mozilla.org/firefox/) — The Gecko engine that powers everything
- [**Arc Browser**](https://arc.net/) — Inspiration for AI-first browser design
- [**Zen Browser**](https://zen-browser.app/) — Inspiration for Gecko-based customization
- [**Vivaldi**](https://vivaldi.com/) — Inspiration for deep user customization
- [**Mullvad Browser**](https://mullvad.net/browser) — Inspiration for security hardening
- [**Opera GX**](https://www.opera.com/gx) — Inspiration for niche user experiences

---

<div align="center">

<br/>

<img src="assets/logo.png" alt="Vibe Search" width="48"/>

**Built with 💜 by [Bhishy3](https://github.com/Bhishy3)**

*Browse the web like it was designed for you.*

<br/>

</div>
