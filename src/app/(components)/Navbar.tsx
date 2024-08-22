import Link from "next/link";

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
                        <li><Link className={`${props.selectedElementIndex == 1 ? selectedStyles : null}`} href="#">Plant List</Link></li>
                        <li><Link className={`${props.selectedElementIndex == 2 ? selectedStyles : null}`} href="#">Photo Gallery</Link></li>
                        <li><Link className={`${props.selectedElementIndex == 3 ? selectedStyles : null}`} href="#">Contact Us</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" href="/">Muth Farm Flowers</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className={`${props.selectedElementIndex == 0 ? selectedStyles : null}`} href="/about">About Us</Link></li>
                    <li><Link className={`${props.selectedElementIndex == 1 ? selectedStyles : null}`} href="#">Plant List</Link></li>
                    <li><Link className={`${props.selectedElementIndex == 2 ? selectedStyles : null}`} href="#">Photo Gallery</Link></li>
                    <li><Link className={`${props.selectedElementIndex == 3 ? selectedStyles : null}`} href="#">Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Contact Us</a> */}
            </div>
        </div>
    )

}

export default Navbar;