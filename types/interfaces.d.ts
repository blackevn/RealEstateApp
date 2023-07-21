import React, { FormEventHandler, ReactNode } from 'react';
import { IconBaseProps, IconType } from 'react-icons';

type FunctionHandler = () => void;

type ToggleHandler = boolean | FunctionHandler

type ClickEvent =  MouseEventHandler<HTMLButtonElement> | string | (() => void)


export interface IProps {

    children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
      
  }

export interface Avatar{
    image?: any
    src?: any
    children?: IProps
    modifier?: string
    userId?: string
    width?: string
  }
export interface ToastProps {

  modifier?: string
  children?: JSX.Element
  text?: string
  icon: IconType
  clickEvent?: ClickEvent
  mode?: boolean
  
}


export type FormAuthData = {

  userName: string,
  name: string
  email: string,
  password: string,
  rememberMe: boolean
  
}

export type InputProps = {
  type: string
  name: string 
  value: string | undefined | number
  id?: string
  onChange?: FormEventHandler
  onFocus?: FormEventHandler
  placeholder: string 
  textColor?: string
  modifier?: string
  ref?: string
  disabled?: boolean
  hidden?: boolean
  icon: IconType
  iconModifier?: string
  onClick?: ClickEvent
  orientation?: string
}


export type ButtonProps = {

  text?: string 
  textColor?: string 
  bgColor?: string
  clickEvent?:  ClickEvent
  borderColor?: string 
  icon: IconType
  borderSize?: string 
  paddingX?: string
  paddingY?: string
  children?: JSX.Element
  modifier?: string
  tip?: string
  isActive?: boolean
  disabled?: boolean

}
  
export interface ContextData {

  width: number
  height: number
  user?: IUser
  addModalToggle?: boolean | undefined
  setAddModalToggle?: ClickEvent
  toggle?: ToggleHandler
  showPassword?: ToggleHandler
  handleToggle?: ClickEvent
  darkMode?: ToggleHandler
  toggleDarkMode?: ClickEvent,
  propertyInfo?: Listing
  setPropertyInfo?: Dispatch<SetStateAction<Listing>>
  listings?: Promise
}

  export interface NavigationLinks {

    id: number
    name: string
    href?: string
    icon: IconDefinition
    notification?: number
    isAuthenticated?: boolean
    hasNotification?: boolean
  }

  export type Categories = {

    id: number
    name: string
    icon: IconType 
    description?: string

  }

  
  export interface IUser {
    createdAt: string; 
    updatedAt: string; 
    emailVerified: string | null; 
    id: string; 
    name: string | null; 
    email: string | null; 
    image: string | null; 
    hashedPassword: string | null; 
    favoriteIds: string[];
  }

  export  type Listing = {

    id: string
    title?: string
    description?: string
    imageSrc: string
    createdAt?: string
    category?:  string
    roomCount?: number
    bathroomCount?: number
    squareFt?: number
    locationValue: string
    location?: CountrySelectValue
    userId?: string
    price?: number
  }
  export  type Listings = {

    id: string
    title?: string
    description?: string
    imageSrc: string
    createdAt?: string
    category?:  string
    roomCount?: number
    bathroomCount?: number
    guestCount?: string
    locationValue: string
    location?: CountrySelectValue
    userId?: string
    price?: number
  }[]
  



  export type SafeListing = Omit<Listing, "id" | 'locationValue'> & {
    id?: string;
    locationValue?: string
    
  };