const Footer = () => {

    return (
        <footer className="bg-neutral text-neutral-content">
            <div className="flex justify-between px-10 items-center pt-10">
                <div>
                    <h1 className="text-4xl font-bold">Muth Farm Flowers</h1>
                    <p className="text-xl">Williamstown, New Jersey, 08094</p>
                </div>

                <div className="text-right">
                    <p className="text-xl">856-629-2462</p>
                    <p className="text-xl">info@muthfarmflowers.com</p>
                </div>
            </div>
            <p className="text-center pb-1 text-xl"><span className="font-black">Copyright © 2024</span> Muth Farm Flowers</p>
        </footer>
    )

}

export default Footer;