// ==UserScript==
// @name         Remove Annoyances
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Intern Notification Globe & Chat
// @author       Lowell Bander
// @match        *.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function removeAnnoyances() {
      [
          "a[href$='/intern/inbox/']", // notification globe in intern
          "a[aria-label='Chat']", // chat icon in intern
          "div[id='pagelet_bluebar']", // workplace bar in workchat
          "div[role='feed']", // workplace newsfeed
      ]
      .map(selector => document.querySelector(selector))
      .forEach(annoyance => annoyance && annoyance.remove());
    }
    document.addEventListener("DOMNodeInserted", removeAnnoyances);
})();
