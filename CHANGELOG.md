# Changelog

All notable changes to Vibe Search will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-07-14

### Added
- 🔒 Hardened Firefox security profile with 30+ locked-down preferences
- 🎨 Custom `userChrome.css` dark theme with hidden tab bar and modern nav styling
- 🤖 AI Copilot WebExtension sidebar with page summarization and DOM analysis
- 🚀 macOS auto-launcher script with Firefox auto-detection and profile isolation
- 📦 Complete project structure with npm scripts, .gitignore, and assets
- 📖 Comprehensive README with badges, feature tables, architecture docs, and roadmap
- 🤝 Contributing guide, security policy, and issue templates

### Security
- Disabled all Mozilla telemetry and crash reporting
- Enabled `privacy.resistFingerprinting` and first-party cookie isolation
- Blocked WebRTC IP leaks (`media.peerconnection.enabled = false`)
- Disabled DNS prefetching and speculative connections
- Blocked all remote experiments and Shield studies
