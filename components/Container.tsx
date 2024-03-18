import { mergeClasses } from '@/app/utils/MergeClasses';
import { PasteContext } from './PasteContext';
import { useState } from 'react';



export default function Container(props: React.HTMLProps<HTMLDivElement>){
  const [hasPasted,sethasPasted] = useState(false);
  const value = {hasPasted,sethasPasted};

  return(
      <div className={mergeClasses("flex flex-row w-full",props.className)}> {/** styles passed on class name are passed to this div */}
        <div className="flex flex-row gap-2">
          <PasteContext.Provider value={value} >
            {props.children}
          </PasteContext.Provider>
        </div>
      </div>
  );
}