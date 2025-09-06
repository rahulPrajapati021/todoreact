import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function Form() {
  const [inputStr, setInputStr] = useState(null);
  return (
    <div>
      <form className="flex justify-center">
        <div>
          <input
            type="text"
            onChange={(e) => setInputStr(e.target.value)}
            className="border-2 rounded-lg px-4 py-2"
            placeholder="Find & Add"
          />
        </div>
        <div>
          <button className="bg-red-400 ml-2 cursor-pointer px-4 py-2 rounded-lg">
            <Plus size={28} color="white"/>
          </button>
        </div>
      </form>
    </div>
  );
}
