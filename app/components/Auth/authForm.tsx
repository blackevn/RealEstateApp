'use client'

import { Button, Input} from "../Elements";
import { useAuthForm } from "@/app/hooks";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc"
import { RiShieldUserFill } from "react-icons/ri"
import { FaGithub, FaApple, FaUser, FaAt, FaEye, FaEyeSlash, FaArrowCircleRight } from "react-icons/fa"
import Link from "next/link";


const AuthForm: React.FC = () => {

const {authData, handleAuthValues, isSignup, setSignup, switchSignup, showPassword, handleShowPassword, sendAuthData } = useAuthForm()


  return <>
    <form className="mx-auto flex w-full max-w-lg flex-col bg p-4 sm:p-20">
		<div className="bg-gray-2 rounded-lg p-4 my-4">
			<h1 className="text-xl font-bold">Login info</h1>
			<h1>Email: kevinlouie55@gmail.com</h1>
			<h1>Password: nellwill</h1>
		</div>
	<div className="flex w-full flex-col gap-2">
		<p>Sign { isSignup ? 'up' : 'in'} with</p>
		<div className="flex w-full flex-col gap-2">
		<Button
		text="Sign in with Google"
        modifier="btn w-full"
		icon={FcGoogle}
		clickEvent={() => signIn('google')}
        />
		<Button
		text="Sign in with Github"
        modifier="btn w-full"
		icon={FaGithub}
		clickEvent={() => signIn('github')}
        />
		<Button
		text=" Sign in with Apple"
        modifier="btn w-full"
		icon={FaApple}
        />
		</div>
	</div>
	<div className="divider my-6 text-xs text-content2">or continue with</div>

	<div className="form-group">

	{ isSignup &&
		
    <Input
	  modifier={`authInput focus:bg-backgroundPrimary`}
      icon={RiShieldUserFill} 
	  type='text' 
	  name='name' 
	  value={authData.name} 
	  placeholder='Name'
	  onChange={handleAuthValues}/>
	}	
  
    <Input
	  modifier={`authInput focus:bg-backgroundPrimary 
	  ${authData.errors?.email && "bg-red-500 border"}`}
      icon={FaAt} 
	  type='email' 
	  name='email' 
	  value={authData.email} 
	  placeholder='Email'
	  onChange={handleAuthValues}/>

    <Input
	  modifier={`authInput focus:bg-backgroundPrimary 
	  ${authData.errors?.password && "bg-red-500 border"}` }
      icon={showPassword ? FaEye : FaEyeSlash} 
	  type={ showPassword ? 'password' : 'text'} 
	  name='password'
	  value={authData.password} 
	  placeholder='Password' 
	  onClick={handleShowPassword}
	  onChange={handleAuthValues}
	  iconModifier='cursor-pointer'   />
    
		<div className="w-[290px]">
		{!isSignup && <div className="form-field">
			<div className="form-control justify-between gap-4">
				<div className="flex gap-2">
					<input type="checkbox" className="checkbox" />
					<a href="#">Remember me</a>
				</div>
				<label className="form-label">
					<a className="link link-underline-hover link-primary text-sm">Forgot your password?</a>
				</label>
			</div>
		</div>}
		</div>
		
		<div className="form-field pt-5">
			<div className="form-control justify-between">
            <Button
            modifier="btn w-full"
            text="Sign in"
			icon={FaArrowCircleRight}
			clickEvent={sendAuthData}
            />
			</div>
		</div>

			<Link href={`/dashboard`}>
            <Button
            modifier="btn w-full"
            text="Go to Dashboard"
			icon={FaArrowCircleRight}
			   />
			</Link>
		<div className="form-field">
			<div className="form-control">
					{ !isSignup ? `Don't have an account?` : `Already have an account?`} 
				<a onClick={switchSignup} className="link link-underline-hover link-primary text-sm">
					Sign { !isSignup ? 'up' : 'in'}
				</a>
			</div>
		</div>
	</div>
</form>
         </>
};

export default AuthForm;