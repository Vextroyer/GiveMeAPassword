import { mergeClasses } from '@/app/utils/MergeClasses';

export default function Container(props: React.HTMLProps<HTMLDivElement>){

  return(
      <div className={mergeClasses("flex flex-row w-full",props.className)}> {/** styles passed on class name are passed to this div */}
        <div className="flex flex-row gap-2">
            {props.children}
        </div>
      </div>
  );
}