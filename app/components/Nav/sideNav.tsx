'use client'

import { useCurrentUser } from "@/app/hooks";
import { IProps, IUser } from "@/types/interfaces";
import { CgMenuLeft } from 'react-icons/cg'
import Avatar from "../Elements/Avatar";
import { BiSolidDashboard } from "react-icons/bi";
import Link from "next/link";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaMoneyBill, FaSignOutAlt } from "react-icons/fa";
import { Button } from "../Elements";
import { signOut } from "next-auth/react";

interface SideNav {
	children: React.ReactNode 
	user: IUser
}

const SideNav: React.FC<SideNav> = ({ children, user }) => {

	 
  return <div className="flex flex-row">
	<div className="sm:w-full sm:max-w-[18rem]">
		<input type="checkbox" id="sidebar-mobile-fixed" className="sidebar-state" />
		<label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
		<aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
			<section className="sidebar-title items-center p-4">
				<svg fill="none" height="42" viewBox="0 0 32 32" width="42" xmlns="http://www.w3.org/2000/svg">
					<rect height="100%" rx="16" width="100%"></rect>
					<path clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fillRule="evenodd"></path>
				</svg>
				<div className="flex flex-col">
					<span>RealEstateApp</span>
					
				</div>
			</section>
			<section className="sidebar-content">
				<nav className="menu rounded-md">
					<section className="menu-section px-4">
						<span className="menu-title">Main menu</span>
						<ul className="menu-items">
						<Link href={`/dashboard`} className="menu-item">
								<BiSolidDashboard/>
								<span>Dashboard</span>
							</Link>

							<Link href={`/dashboard/properties`} className="menu-item">
								<BsFillBuildingsFill/>
								<span>Properties</span>
							</Link>
							{/* <li className="menu-item">
							<FaMoneyBill/>
								<span>Billing</span>
							</li> */}
							{/* <li>
								<input type="checkbox" id="menu-1" className="menu-toggle" />
								<label className="menu-item justify-between" htmlFor="menu-1">
									<div className="flex gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
											<path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
										<span>Account</span>
									</div>

									<span className="menu-icon">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
										</svg>
									</span>
								</label>

								<div className="menu-item-collapse">
									<div className="min-h-0">
										<label className="menu-item menu-item-disabled ml-6">Change Email</label>
										<label className="menu-item ml-6">Profile</label>
										<label className="menu-item ml-6">Change Password</label>
									</div>
								</div>
							</li> */}
						</ul>
					</section>
					<div className="divider my-0"></div>
					{/* <section className="menu-section px-4">
						<span className="menu-title">Settings</span>
						<ul className="menu-items">
							<li className="menu-item">
								<svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M3 21l18 0"></path>
									<path d="M3 10l18 0"></path>
									<path d="M5 6l7 -3l7 3"></path>
									<path d="M4 10l0 11"></path>
									<path d="M20 10l0 11"></path>
									<path d="M8 14l0 3"></path>
									<path d="M12 14l0 3"></path>
									<path d="M16 14l0 3"></path>
								</svg>
								Payments
							</li>
							<li className="menu-item">
								<svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
									<path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
									<path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"></path>
								</svg>
								Balances
							</li>
							<li className="menu-item">
								<svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
									<path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									<path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
								</svg>
								Customers
							</li>
							<li className="menu-item">
								<svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M7 10l5 -6l5 6"></path>
									<path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
									<path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
								</svg>
								Products
							</li>
							<li>
								<input type="checkbox" id="menu-2" className="menu-toggle" />
								<label className="menu-item justify-between" htmlFor="menu-2">
									<div className="flex gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
											<path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
											<path d="M9 7l4 0"></path>
											<path d="M9 11l4 0"></path>
										</svg>
										<span>Contracts</span>
									</div>

									<span className="menu-icon">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
										</svg>
									</span>
								</label>

								<div className="menu-item-collapse">
									<div className="min-h-0">
										<label className="menu-item menu-item-disabled ml-6">Create contract</label>
										<label className="menu-item ml-6">All contracts</label>
										<label className="menu-item ml-6">Pending contracts</label>
										<label className="menu-item ml-6">Security</label>
									</div>
								</div>
							</li>
						</ul>
					</section> */}
				</nav>
			</section>
			{ user && <section className="sidebar-footer justify-end bg-gray-2 pt-2">
				<div className="divider my-0"></div>
				<div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
					<label className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4" tabIndex={0}>
					<Link href={`/dashboard/user/${user.id}`} className="dropdown-item text-sm">
						<div className="flex flex-row gap-4 p-4 items-center justify-between">
							<div className="avatar-square avatar avatar-md">
								<Avatar
								userId={user?.id}
								src={`${user?.image !== null || '' ? user?.image
								: ('/vercel.svg')}`}
								/>
							</div>

							<div className="flex flex-col">
								<span>{user?.name}</span>
							</div>
						</div>
						</Link>
					</label>
					{/* <div className="dropdown-menu-right-top dropdown-menu ml-2">
						<Link href={`/dashboard/user/${user.id}`} className="dropdown-item text-sm">
							Profile
						</Link>
							<a tabIndex={-1} className="dropdown-item text-sm">Change password</a>
						<a tabIndex={-1} className="dropdown-item text-sm">Refer a friend</a>
						<Button
						icon={FaSignOutAlt}
						text="Sign out"
						clickEvent={() => signOut()}
						/>
					</div> */}
				</div>
			</section>}
		</aside>
	</div>
	<div className="flex w-full flex-col">
		<div className="w-full flex justify-between sm:hidden items-center p-4">
			<h1>RealEstateApp</h1>
			<label htmlFor="sidebar-mobile-fixed" className="btn "><CgMenuLeft/></label>
		</div>

		<div className=" px-4 lg:pr-8 lg:pt-4">
			{children}
		</div>
	</div>
</div>
};

export default SideNav;
