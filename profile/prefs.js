// Custom Firefox Profile Settings for Antigravity AI Gecko Browser

// 1. Enable custom UI styling (userChrome.css / userChrome.js)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.prompt-connection", false);

// 2. Strict Privacy & Fingerprinting Resistance (Mullvad/Tor aligned)
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.firstparty.isolate", true); // Isolates cookies per domain

// 3. Disable WebRTC Leaks (Prevents VPN IP leaks)
user_pref("media.peerconnection.enabled", false);

// 4. Disable Telemetry, Analytics, and Crash Reporting
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.crashreporter.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);

// 5. Disable Speculative Connections & Prefetching (Performance & Security)
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);

// 6. UI Customization Preferences
user_pref("browser.startup.homepage", "https://www.google.com");
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.compactmode.show", true); // Enables compact UI layout options
user_pref("browser.uidensity", 1); // Compact UI density

// 7. Auto-install and enable profile extension
user_pref("extensions.autoDisableScopes", 0);
user_pref("extensions.startupScanScopes", 15);
user_pref("extensions.webextensions.restrictedDomains", ""); // Allow extensions on all domains
