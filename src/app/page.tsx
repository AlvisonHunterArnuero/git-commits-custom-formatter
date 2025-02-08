'use client';
import React from 'react';
import { commitEmojis } from './commitsData';

export default function Home() {
  const [commit, setCommit] = React.useState('');
  const [commitType, setCommitType] = React.useState('');
  const [target, setTarget] = React.useState('global');

  return (
    <div className="flex flex-col items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <h2 className="font-bold text-3xl uppercase text-gray-400">
        Commits Formatter
      </h2>
      <div className="flex flex-col p-8 gap-4 w-screen max-w-screen-lg items-start justify-center font-[family-name:var(--font-geist-sans)]">
        <div className="w-full flex flex-col gap-y-3 text-sky-500">
          <label
            htmlFor="commitSelector"
            className="text-md uppercase"
          >
            Target:
          </label>
          <select
            id="commitSelector"
            onChange={(e) => setCommitType(e.target.value)}
            className="h-11 text-green-400 text-xl w-full max-w-screen-lg px-4 rounded-md bg-black border border-gray-300"
          >
            {commitEmojis.map((commit, ind) => {
              return (
                <option key={ind} value={ind}>
                  {commit.emoji} {commit.title}
                </option>
              );
            })}
          </select>
        </div>

        <div className="w-full flex flex-col gap-y-3 text-sky-500">
          <label htmlFor="target" className="text-md uppercase">
            Target:
          </label>
          <input
            id="target"
            className="bg-black border text-green-400 text-xl border-gray-300 h-11 w-full max-w-screen-lg px-4 rounded-md"
            type="text"
            defaultValue="component"
            placeholder='e.g., "component" or "global"'
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-y-3 text-sky-500">
          <label
            htmlFor="commitDescription"
            className="text-md uppercase"
          >
            Commit Description:
          </label>
          <input
            id="commitDescription"
            className="bg-black border text-green-400 text-xl border-gray-300 h-11 w-full max-w-screen-lg px-4 rounded-md focus:outline-none blur:outline-none blur:ring-0"
            type="text"
            defaultValue=""
            placeholder='e.g., "fixing a bug"'
            onChange={(e) => setCommit(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-y-3 text-sky-500 bg-gray-800 rounded-md p-6 mt-6 pb-10">
          <label
            htmlFor="formattedCommit"
            className="text-yellow-200 text-md uppercase"
          >
            Formatted Commit:
          </label>
          <input
            id="formattedCommit"
            className="bg-black text-center text-gray-400 text-xl lowercase border-gray-600 border h-11 w-full max-w-screen-lg px-4 rounded-md"
            type="text"
            value={`${commitEmojis[+commitType].emoji} ${
              commitEmojis[+commitType].title
            } - (${target}): ${commit}`}
            onChange={() => null}
          />
          <div className="text-white font-extralight italic">
            once ready, you can copy the above text
          </div>
        </div>
      </div>
    </div>
  );
}
