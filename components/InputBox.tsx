import { useContext } from "react";
import { PasteContext } from "./PasteContext";

type Props = {
    text: string,
}

export default function InputBox(props: Props){
    const {hasPasted,sethasPasted} = useContext(PasteContext);
    

    return(
      <div className='mx-2'>
        <form>
        <input type='text' placeholder={props.text} className='bg-inherit placeholder:text-teal-700 focus:outline-none focus:border-0' />
        </form>
      </div>
    );
  }