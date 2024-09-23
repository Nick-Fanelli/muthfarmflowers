import { faF } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image"

type Props = {

    selectedElementIndex?: number

}

const selectedStyles = "bg-base-200 font-bold";

const Navbar = (props: Props) => {

    return (
        <div className="navbar bg-base-100 h-[2rem]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link className={`${props.selectedElementIndex == 0 ? selectedStyles : null}`} href="/about">About Us</Link></li>
                        <li><Link className={`${props.selectedElementIndex == 1 ? selectedStyles : null}`} href="/plants">Plant List</Link></li>
                        <li><Link className={`${props.selectedElementIndex == 2 ? selectedStyles : null}`} href="/gallery">Photo Gallery</Link></li>
                        <li><Link className={`${props.selectedElementIndex == 3 ? selectedStyles : null}`} href="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" href="/">Muth Farm Flowers</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className={`${props.selectedElementIndex == 0 ? selectedStyles : null}`} href="/about">About Us</Link></li>
                    <li><Link className={`${props.selectedElementIndex == 1 ? selectedStyles : null}`} href="/plants">Plant List</Link></li>
                    <li><Link className={`${props.selectedElementIndex == 2 ? selectedStyles : null}`} href="/gallery">Photo Gallery</Link></li>
                    <li><Link className={`${props.selectedElementIndex == 3 ? selectedStyles : null}`} href="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    props.selectedElementIndex == 3 ?
                    <Link href="https://www.facebook.com/profile.php?id=100064895851868" target="_blank" className="h-full xm:mr-3">
                    <div className="flex bg-blue-600 py-2 px-2 sm:px-4 rounded-xl">

                        <svg fill="#fffffff" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 310 310" className="h-1/2 w-auto">
                            <g id="XMLID_834_">
                                <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
            c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
            V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
            C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
            c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" className="fill-white"/>
                            </g>
                        </svg>
                        <p className="hidden sm:block font-black ml-3 text-white">Facebook</p>
                    </div>
                </Link>
                : <></>
                }
                
            </div>
        </div>
    )

}

export default Navbar;