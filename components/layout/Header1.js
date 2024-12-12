//'use client'
import { Menu } from '@headlessui/react'
import dynamic from 'next/dynamic'
import Link from "next/link"
import FullScreenButton from '../elements/FullScreenButton'
import { SignOutButton } from "../signout/SignOutButton";

const ThemeSwitch = dynamic(() => import('../elements/ThemeSwitch'), {
    ssr: false,
})

export default async function Header1({ scroll, isMobileMenu, handleSidebar, handleOffcanvas, user }) {

    return (
        <>

            <div className="header-dashboard">
                <div className="wrap">
                    <div className="header-left">
                        <Link href="/">
                            <img id="logo_header_mobile" alt="" src="/images/logo/logo.png" data-light="images/logo/logo.png" data-dark="images/logo/logo-dark.png" data-width="154px" data-height="52px" data-retina="images/logo/logo@2x.png" />
                        </Link>
                        <div className="button-show-hide" onClick={handleSidebar}>
                            <i className="icon-menu-left" />
                        </div>
                    </div>
                    <div className="header-grid">
                        <div className="popup-wrap noti type-header">
                            <Menu as="div" className="dropdown">
                                <Menu.Button className="btn btn-secondary dropdown-toggle" type="button">
                                    <span className="header-item">
                                        <span className="text-tiny">1</span>
                                        <i className="icon-bell" />
                                    </span>
                                </Menu.Button>
                                <Menu.Items as="ul" className="dropdown-menu dropdown-menu-end has-content show d-flex end-0" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <h6>Message</h6>
                                    </li>
                                    <li>
                                        <div className="noti-item w-full wg-user active">
                                            <div className="image">
                                                <img src="/images/avatar/user-11.png" alt="" />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex items-center justify-between">
                                                    <Link href="#" className="body-title">Cameron Williamson</Link>
                                                    <div className="time">10:13 PM</div>
                                                </div>
                                                <div className="text-tiny">Hello?</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="noti-item w-full wg-user active">
                                            <div className="image">
                                                <img src="/images/avatar/user-12.png" alt="" />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex items-center justify-between">
                                                    <Link href="#" className="body-title">Ralph Edwards</Link>
                                                    <div className="time">10:13 PM</div>
                                                </div>
                                                <div className="text-tiny">Are you there? interested i this...</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="noti-item w-full wg-user active">
                                            <div className="image">
                                                <img src="/images/avatar/user-13.png" alt="" />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex items-center justify-between">
                                                    <Link href="#" className="body-title">Eleanor Pena</Link>
                                                    <div className="time">10:13 PM</div>
                                                </div>
                                                <div className="text-tiny">Interested in this loads?</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="noti-item w-full wg-user active">
                                            <div className="image">
                                                <img src="/images/avatar/user-11.png" alt="" />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex items-center justify-between">
                                                    <Link href="#" className="body-title">Jane Cooper</Link>
                                                    <div className="time">10:13 PM</div>
                                                </div>
                                                <div className="text-tiny">Okay...Do we have a deal?</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link href="#" className="tf-button w-full">View all</Link></li>
                                </Menu.Items>
                            </Menu>
                        </div>
                        <FullScreenButton />
                        <div className="popup-wrap user type-header">
                            <Menu as="div" className="dropdown">
                                <Menu.Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="header-user wg-user">
                                        <span className="image">
                                            <img src="/images/avatar/user-1.png" alt="" />
                                        </span>
                                        <span className="flex flex-column">
                                            <span className="body-title mb-2">{user && user.firstName}</span>
                                            <span className="text-tiny">{user && user.orgName}</span>
                                        </span>
                                    </span>
                                </Menu.Button>
                                <Menu.Items
                                    as="ul"
                                    className="dropdown-menu dropdown-menu-end has-content show d-flex end-0"
                                    aria-labelledby="dropdownMenuButton3"
                                >
                                    <li>
                                        <Link href="/profile" className="user-item">
                                            <div className="icon">
                                                <i className="icon-user" />
                                            </div>
                                            <div className="body-title-2">Profile</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <div href="/login" className="user-item">
                                            <div className="icon">
                                                <i className="icon-log-out" />
                                            </div>
                                            <div className="body-title-2">
                                                <SignOutButton />
                                            </div>
                                        </div>
                                    </li>
                                </Menu.Items>
                            </Menu>
                        </div>
                        <div className="divider" />
                    </div>
                </div>
            </div>

        </>
    )
}
