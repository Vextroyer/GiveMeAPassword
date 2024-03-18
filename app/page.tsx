'use client'

import React from 'react';
import InputBox from "@/components/InputBox";
import { GoPaste } from "react-icons/go";
import { GoCopy } from "react-icons/go";
import Container from '@/components/Container';
import OutputBox from '@/components/OutputBox';


export default function Home() {

  const iconStyle: string = 'cursor-pointer mt-1 text-yellow-500 hover:text-yellow-100';


  return (
    <div className='w-full h-screen bg-slate-950 text-teal-400'>
      <main className="h-screen max-w-md mx-auto flex flex-col justify-around text-2xl">

        <Container className='justify-start'>
          <InputBox text="url goes here"/>
          <GoPaste className={iconStyle} />
        </Container>

        <Container className='justify-end'>
          <GoPaste className={iconStyle} />
          <InputBox text="phrase goes here"/>
        </Container>

        <Container className='justify-start'>
          <OutputBox />
          <GoCopy className={iconStyle} />
        </Container>

      </main>
    </div>
  );
}