'use client';
import React from 'react';
import { commitEmojis } from './commitsData';
import InputWithLabel from './components/InputWithLabel';

export default function Home() {
  const [commit, setCommit] = React.useState('');
  const [commitType, setCommitType] = React.useState('');
  const [target, setTarget] = React.useState('global');

  return (
    <div className='flex h-screen flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]'>
      <h2 className='text-3xl font-bold uppercase text-gray-400'>
        Commits Formatter
      </h2>
      <div className='flex w-screen max-w-screen-xl flex-col items-start justify-center gap-4 p-8 font-[family-name:var(--font-geist-sans)]'>
        <div className='flex w-full flex-col gap-y-3 text-sky-500'>
          <label htmlFor='commitSelector' className='text-md uppercase'>
            Commit Type:
          </label>
          <select
            id='commitSelector'
            onChange={(e) => setCommitType(e.target.value)}
            className='h-11 w-full max-w-screen-xl rounded-md border border-gray-300 bg-black px-4 text-xl text-green-400'
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
        <InputWithLabel
          id='target'
          labelText='Target:'
          labelHtmlForId='target'
          labelClassName='text-md uppercase'
          inputOnChange={(e) => setTarget(e.target.value)}
          defaultValue=''
          placeholder='e.g., "component" or "global"'
          inputType='text'
          wrapperClassName='flex w-full flex-col gap-y-3 text-sky-500'
          inputClassName='h-11 w-full max-w-screen-xl rounded-md border border-gray-300 bg-black px-4 text-xl text-green-400'
        />

        <InputWithLabel
          id='commitDescription'
          labelText='Commit Description:'
          labelHtmlForId='commitDescription'
          labelClassName='text-md uppercase'
          inputOnChange={(e) => setCommit(e.target.value)}
          defaultValue=''
          placeholder='e.g., "fixing a bug"'
          inputType='text'
          wrapperClassName='flex w-full flex-col gap-y-3 text-sky-500'
          inputClassName='blur:outline-none blur:ring-0 h-11 w-full max-w-screen-xl rounded-md border border-gray-300 bg-black px-4 text-xl text-green-400 focus:outline-none'
        />
        <div className='mt-6 flex w-full flex-col gap-y-3 pb-10'>
          <label
            htmlFor='formattedCommit'
            className='text-md uppercase text-yellow-200'
          >
            Formatted Commit:
          </label>
          <input
            id='formattedCommit'
            className='h-11 w-full max-w-screen-xl rounded-md border border-gray-600 bg-black pl-1 text-xl lowercase text-gray-400'
            type='text'
            value={`${commitEmojis[+commitType].emoji} ${
              commitEmojis[+commitType].title
            } - (${target}): ${commit}`}
            onChange={() => null}
          />
          <div className='font-extralight italic text-white'>
            once ready, you can copy the above text
          </div>
        </div>
      </div>
    </div>
  );
}
