// ==UserScript==
// @name         Disable Spellcheck in WorkFlowy
// @namespace    https://rawbytz.wordpress.com
// @version      0.2
// @description  Disables the browser spellcheck feature on WorkFlowy startup.
// @author       rawbytz
// @match        https://workflowy.com/*
// @match        https://*.workflowy.com/*
// @grant        none
// ==/UserScript==

// https://github.com/rawbytz/spellcheck-disable/raw/master/spellcheckDisable.user.js

(function () {
  'use strict';
  function disableSpellcheck() {
    let pageActive = document.querySelector(".page.active");
    if (pageActive) {
      pageActive.setAttribute("spellcheck", "false");
      return
    }
    setTimeout(disableSpellcheck, 300);
  }
  disableSpellcheck();
})();