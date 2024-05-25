"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import axios  from "axios";

export default function Metting() {
  const [id, setId] = useState<string>("");
  console.log(id);

 async function joinMetting(){

  const res= new WebSocket('ws://localhost:3000')
  console.log(res)
    
  }
  return (
    <>
      <main className="w-[60vw] h-screen justify-center">
        <div className="m-auto">
          <h3 className="text-5xl p-2">
            Video calls and mettings for everyone
          </h3>
          <p className="p-2">
            connect, collaborate , and celebrate from anywhere with Our WebRTC
            calls
          </p>

          <div className="flex p-3 gap-4">
            <Button>new metting</Button>

            <div className="flex gap-2">
              <Input
                onChange={(e) => setId(e.target.value)}
                className="pr-6"
                placeholder="enter room id"
              />
              <Button
              onClick={joinMetting}
              >join </Button>
            </div>
          </div>
        </div>
      </main>{" "}
    </>
  );
}
