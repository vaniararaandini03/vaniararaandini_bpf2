import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFIlter from "./FrameworkList copy";
import ResponsiveDesign from "./ResponsiveDesign";

createRoot(document.getElementById("root")).render(
    <div>
        {/* <FrameworkList/> */}
        {/* <FrameworkListSearchFIlter/> */}
        <ResponsiveDesign/>
    </div>
);