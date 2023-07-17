'use client';

import { useCallback } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value?: number ;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value ? value + 1 : 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value ? value - 1 : 1);
  }, [onChange, value]);

  return <>
            <div className="flex items-center w-[60vw] lg:w-[45vw] justify-between">
              <div className="space-x-1">
                <h1  className="text-xl font-medium p-0 m-0">{title}</h1>
                <h1 className="text-[12px] p-0 m-0 hidden md:block">{subtitle}</h1>
              </div>
              <div className="flex gap-4 items-center lg:text-xl">
                <AiFillMinusCircle
                onClick={onReduce}
                className="text-2xl"
                />
                <h1 className="">{value}</h1>
                <AiFillPlusCircle
                onClick={onAdd}
                className="text-2xl"
                />
              </div>
            </div>
        </>
}
 
export default Counter;