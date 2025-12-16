import { Button } from "@/components/ui/button";
import React from "react";

const CommunityHelpSection = () => {
  return (
    <div className="font-game p-4 border-4 roundend-2xl mt-7 flex items-center flex-col gap-4">
      <h2 className="text-3xl">Need Help?</h2>
      <p className="text-3xl">Ask question in ur community?</p>
      <Button className="text-2xl mt-3" variant={"pixel"} size="lg">
        Go To Community
      </Button>{" "}
    </div>
  );
};

export default CommunityHelpSection;
