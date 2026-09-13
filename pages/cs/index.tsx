import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const CS: NextPage = () => {

  const [title, setTitle] = useState<string>("hello");

  return (
    <div>
      CS "{title}"

      <button
        onClick={() => alert("Hello MIT")}
        style={{ margin: "15px" }}
      >
        PressMe
      </button>
    </div>
  );
};

export default withLayoutBasic(CS);