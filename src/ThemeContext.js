import { createContext } from "react";

// Mimicking a useState hook
// setting a default value and passing an empty function b/c if there is no theme it will do nothing
// hex color fogdog
// https://css-tricks.com/author/chriscoyier/
const ThemeContext = createContext(["#f06d06", () => {}]);

export default ThemeContext;
