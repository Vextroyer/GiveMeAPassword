import { ChangeEvent } from "react";

type Props = {
    placeholder: string,
    value: string,
    updateValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InputBox(props: Props){

    return(
      <div className='mx-2'>
        <form>
        <input  type='text' value={props.value} onChange={props.updateValue}  placeholder={props.placeholder} className='bg-inherit placeholder:text-teal-700 focus:outline-none focus:border-0' />
        </form>
      </div>
    );
  }