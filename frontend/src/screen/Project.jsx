import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Project = () => {
  const location = useLocation();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  console.log(location.state);
  return (
    <main className="h-screen flex w-screen">
      <section className="left relative flex flex-col h-full min-w-96 bg-slate-300">
        <header className="flex justify-between items-center p-2 px-4 w-full bg-slate-100">
          <button className="flex gap-2">
            <i className="ri-add-fill mr-1"></i>
            <p>Add Collaborators</p>
          </button>
          <button
            onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
            className="p-2"
          >
            <i className="ri-group-fill"></i>
          </button>
        </header>

        <div className="conversation-area flex-grow flex flex-col">
          <div className="message-box p-2 flex-grow flex flex-col gap-2">
            <div className=" message max-w-56 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
              <small className="opacity-65 text-xs">example@gmail.com</small>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="ml-auto max-w-56 message flex flex-col p-2 bg-slate-50 w-fit rounded-md">
              <small className="opacity-65 text-xs">example@gmail.com</small>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="input-field w-full flex">
            <input
              type="text"
              placeholder="Type a message..."
              className=" px-4 p-2 border-none outline-none flex-grow"
            />
            <button className="px-5 bg-slate-900 text-white">
              <i className="ri-send-plane-fill"></i>
            </button>
          </div>
        </div>

        <div
          className={`sidepanel w-full h-full bg-slate-50 flex flex-col gap-2 absolute top-0 transition-all  ${
            isSidePanelOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <header className="flex justify-end p-2 px-4 bg-slate-300">
            <button
              className="p-2"
              onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
            >
              <i className="ri-close-line"></i>
            </button>
          </header>
          <div className="users  flex flex-col gap-2">
            <div className="user cursor-pointer hover:bg-slate-200 p-2 flex gap-2 items-center">
              <div className="aspect-square rounded-full flex items-center justify-center w-fit h-fit p-5 text-white bg-slate-600">
                <i className="ri-user-fill absolute"></i>
              </div>
              <h1 className="font-semibold text-lg">UserName</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
