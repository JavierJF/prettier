import commonOptions from "../common/common-options.evaluate.js";

const CATEGORY_MARKDOWN = "Markdown";

// format based on https://github.com/prettier/prettier/blob/main/src/main/core-options.evaluate.js
const options = {
  proseWrap: commonOptions.proseWrap,
  singleQuote: commonOptions.singleQuote,
  breakDefinitions: {
    category: CATEGORY_MARKDOWN,
    type: "boolean",
    default: true,
    description:
      "Whether or not 'proseWrap' takes effect over Markdown definitions.",
  }
};

export default options;
