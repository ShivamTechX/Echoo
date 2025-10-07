import React from "react";
import MidldePanel from "@/components/pages/dashboard/MiddlePanel";
import LeftPanel from "@/components/pages/dashboard/LeftPanel";
import { ModeToggle } from "@/components/mode-toggle";
export default function Home() {
  return (
    <div> 
      <LeftPanel/>
      <ModeToggle/>
    </div>
  );
}



