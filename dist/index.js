"use strict";

/**
    index.js

    @author:
      - Derek Johnston

    @desc:
      - The entry point for the npm package.
*/

module.exports = {
  // HELPER CLASSES
  Server: require("./classes/Server"),

  // HELPER FUNCTIONS
  obj2arr: require("./functions/obj2arr"),

  // BOOTSTRAP COMPONENTS
  BSColumn: require("./components/BSColumn.react"),
  BSContainer: require("./components/BSContainer.react"),
  BSForm: require("./components/BSForm.react"),
  BSFormGroup: require("./components/BSFormGroup.react"),
  BSFormInputBasic: require("./components/BSFormInputBasic.react"),
  BSFormInputText: require("./components/BSFormInputText.react"),
  BSFormLabel: require("./components/BSFormLabel.react"),
  BSRow: require("./components/BSRow.react"),
  BSTable: require("./components/BSTable.react"),
  BSTableBody: require("./components/BSTableBody.react"),
  BSTableCellHeading: require("./components/BSTableCellHeading.react"),
  BSTableCellText: require("./components/BSTableCellText.react"),
  BSTableHeader: require("./components/BSTableHeader.react"),
  BSTableRow: require("./components/BSTableRow.react"),
  Heading1: require("./components/Heading1.react"),
  Heading2: require("./components/Heading2.react"),
  Heading3: require("./components/Heading3.react"),
  Heading4: require("./components/Heading4.react"),
  Heading5: require("./components/Heading5.react"),
  Heading6: require("./components/Heading6.react"),
  SmallText: require("./components/SmallText.react"),
  Text: require("./components/Text.react")

};