/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<ebca02b5392f7be8488e11a0818d9c43>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('IntlVariations');

const IntlCLDRNumberType09 = {
  getVariation(n /*: number */) /*: $Values<typeof IntlVariations> */ {
    if (n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType09;