/******************************************************************************
 * Firefox user.js by Denis G.
 * https://github.com/denis-g/firefox-user.js
 *
 * Sessions
 *****************************************************************************/

// status for settings apply
user_pref("_user.js.status-log", "_base-sessions.js -- error");


// resume previous session
user_pref("browser.startup.page", 3);

// disable Firefox to clear all history on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", false);


// status for settings apply
user_pref("_user.js.status-log", "_base-sessions.js -- success");
