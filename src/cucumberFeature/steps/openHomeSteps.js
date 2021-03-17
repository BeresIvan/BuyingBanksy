"use strict";
import homePage from "../../pageObjects/homePage.js";
const { Given } = require("@cucumber/cucumber");

Given(
  /^I open Buying Banksy/,
  function () {
    homePage.open();
  }
);