'use strict';
'use client';
import React from 'react';
import { prefetchDNS, preinit } from 'react-dom';
function CallToAction() {
  const onClick = () => {
    prefetchDNS("http://localhost:3000/fantasypunk-modpack.zip");
    window.location.href = "http://localhost:3000/fantasypunk-modpack.zip";
  }
  return (
    <button onClick={onClick} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
      Download Mod Pack
    </button>
  );
}

export default function Home() {
  return (
    <div className="sm:flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div>
          <h1 className="text-xl">Fantasy Punk</h1>
          <i>The fantasy steampunk Minecraft Server</i>
          <br />
          <h2 className="text-lg items-center">Server Connection</h2>
        </div>
        <br />
        <div className="bg-black text-white p-4 rounded-lg shadow-lg">
          <code>
            <span>Server Name: </span>
            <span>fantasypunk</span>
            <br />
            <span>Server Address: </span>
            <span></span>
          </code>
        </div>
        <></>
        <div>
          <h2 className="text-lg">Mod Pack</h2>
          <CallToAction />
          <br />
        </div>
        <br />
        <h2>Server Rules</h2>
        <div itemID="server-rules">
          <ul className="list-disc list-inside">
            <li>Be respectful to everyone. No slurs or insults in the chat</li>
            <li>No griefing or affecting other people's builds without consent</li>
            <li>Keep PvP at a minimum</li>
          </ul>
        </div>
    </div>
  );
}

