import React from 'react';

type Props = {
  password: string,
};

export default function OutputBox(props: Props) {
  console.log("the passwprd is '" + props.password + "'");
  const text = props.password === "" ? "You get a password here" : props.password;
  return (
    <div className='mx-2'>
      <p>
        {text}
      </p>
    </div>
  );
}