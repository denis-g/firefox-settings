/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Password Manager
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-passwords.js -- error");


// disable saving passwords
user_pref("signon.rememberSignons", false);
user_pref("signon.generation.available", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.breachAlertUrl", "");

// disable web extension restrictions (Bitwarden, 1Password, etc)
user_pref("privacy.resistFingerprinting.block_mozAddonManager", false);
user_pref("extensions.webextensions.restrictedDomains", "");


// status for settings apply
user_pref("_user.js.status-log", "_base-passwords.js -- success");
