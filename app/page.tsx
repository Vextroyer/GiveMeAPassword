'use client'

import React, { ChangeEvent, useState } from 'react';
import InputBox from "@/components/InputBox";
import { GoPaste } from "react-icons/go";
import { GoCopy } from "react-icons/go";
import Container from '@/components/Container';
import OutputBox from '@/components/OutputBox';
import { GeneratePassword } from './utils/passwordGenerator';


export default function Home() {
  const iconStyle: string = 'cursor-pointer mt-1 text-yellow-500 hover:text-yellow-100';

  const [url,setUrl] = useState("");
  const [phrase,setPhrase] = useState("");
  const [password,setPassword] = useState("");

  async function updateUrl(e: ChangeEvent<HTMLInputElement>){
    setUrl(e.target.value);
    setPassword( await GeneratePassword(url,phrase));
  }
  async function updatePhrase(e: ChangeEvent<HTMLInputElement>){
    setPhrase(e.target.value);
    setPassword( await GeneratePassword(url,phrase));
  }
  async function onPasteUrl(){
    const pastedUrl = await navigator.clipboard.readText();
    setUrl(pastedUrl);
    setPassword( await GeneratePassword(url,phrase));
  }
  async function onPastePhrase(){
    const pastedPhrase = await navigator.clipboard.readText();
    setPhrase(pastedPhrase);
    setPassword( await GeneratePassword(url,phrase));
  }
  async function onCopyPassword(){
    await navigator.clipboard.writeText(password);
  }

  return (
    <div className='w-full h-screen bg-slate-950 text-teal-400'>
      <main className="h-screen max-w-md mx-auto flex flex-col justify-around text-2xl">

        <Container className='justify-start'>
            <InputBox placeholder="url goes here" value={url} updateValue={updateUrl} />
            <GoPaste className={iconStyle} onClick={onPasteUrl}/>
        </Container>

        <Container className='justify-end'>
          <GoPaste className={iconStyle} onClick={onPastePhrase} />
          <InputBox placeholder="phrase goes here" value={phrase} updateValue={updatePhrase} />
        </Container>

        <Container className='justify-start'>
          <OutputBox password={password} />
          <GoCopy className={iconStyle} onClick={onCopyPassword}/>
        </Container>

      </main>
    </div>
  );
}