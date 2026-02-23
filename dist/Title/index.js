"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Title/index.ts
var Title_exports = {};
__export(Title_exports, {
  Title: () => Title_default
});
module.exports = __toCommonJS(Title_exports);

// src/components/Title/Title.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Title = ({ title = "" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
    "Title Component ",
    title
  ] });
};
var Title_default = Title;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Title
});
