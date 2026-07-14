# Security Policy

## Supported Versions

| Version | Supported |
|:---|:---:|
| 1.0.x | ✅ |

## Reporting a Vulnerability

If you discover a security vulnerability in Vibe Search, please report it responsibly:

1. **Do NOT** open a public GitHub issue
2. Email the maintainer directly or use GitHub's private vulnerability reporting
3. Include a detailed description and steps to reproduce
4. Allow up to 48 hours for an initial response

## Security Practices

Vibe Search follows these security principles:

- **Minimal permissions**: The AI extension only requests `activeTab`, `tabs`, and `storage`
- **No remote code execution**: All AI processing uses local page content extraction
- **Profile isolation**: Each browser instance runs in a sandboxed, isolated profile
- **Zero telemetry**: All Mozilla and third-party telemetry is disabled at the config level
- **Anti-fingerprinting**: `privacy.resistFingerprinting` is enabled by default
