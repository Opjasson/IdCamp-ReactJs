import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement("div", null, "Biodata Perusahaan");

const root = createRoot(document.getElementById("root"));

root.render(heading);
