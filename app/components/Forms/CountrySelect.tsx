'use client';

import Select from 'react-select'

import { useCountries } from '@/app/hooks';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[],
  region: string;
  value: string
}

interface CountrySelectProps {
  value?: any
  onChange: any
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange
}) => {
  const { getAll } = useCountries();

  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: '#fffff'  ,
      zIndex: 99,
      width: '50vw',
      textColor: 'white',
      backgroundColor: "#161616" ,
    }),
    input: () => ({
      width: '50vw'
    }),
    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "#161616",
      border: "none",
      borderRadius: '1em',
      boxShadow: "none",
      zIndex: 99,
      width: '50vw'
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "#fffff" }),
  };

  return ( 
    <div>
      <Select
        menuPlacement="top"
        styles={customStyles}
        placeholder="Type in the location"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value)}
        formatOptionLabel={(option: any) => (
          <div className="
          flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">
                {option.region}
              </span>
            </div>
          </div>
        )}
        className=' z-[999]'
        
         />
    </div>
   );
}
 
export default CountrySelect;