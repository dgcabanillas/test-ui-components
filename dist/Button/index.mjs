// src/components/Button/Button.tsx
import { jsxs } from "react/jsx-runtime";
var Button = ({ children }) => {
  return /* @__PURE__ */ jsxs("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: [
    "Custom Button ",
    children
  ] });
};
var Button_default = Button;
export {
  Button_default as Button
};
