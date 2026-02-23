// src/components/Title/Title.tsx
import { jsxs } from "react/jsx-runtime";
var Title = ({ title = "" }) => {
  return /* @__PURE__ */ jsxs("h1", { children: [
    "Title Component ",
    title
  ] });
};
var Title_default = Title;
export {
  Title_default as Title
};
