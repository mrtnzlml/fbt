/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<133dd4bee207c68fc0aede2066fe42a8>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('IntlVariations');

const IntlCLDRNumberType22 = {
  getVariation(n /*: number */) /*: $Values<typeof IntlVariations> */ {
    if (n % 100 === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n % 100 === 2) {
      return IntlVariations.NUMBER_TWO;
    } else if (n % 100 >= 3 && n % 100 <= 4) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType22;