const Footer = () => {

    return (
        <footer className="bg-secondary text-secondary-content">
            <div className="md:flex text-center md:text-left justify-between px-10 items-center pt-10">
                <div>
                    <h1 className="text-4xl font-bold">Muth Farm Flowers</h1>
                    <p className="text-xl">Williamstown, New Jersey, 08094</p>
                </div>

                <div className="text-center mt-5 md:mt-0 md:text-right">
                    <a className="text-xl font-black hover:link" href="tel:856-629-2462">856-629-2462</a>
                    <br />
                    <a className="text-xl font-black hover:link" href="mailto:info@muthfarmflowers.com">info@muthfarmflowers.com</a>
                </div>
            </div>
            <p className="text-center pb-1 text-xl mt-5 md:mt-0">Copyright © 2024 Muth Farm Flowers</p>
        </footer>
    )

}

export default Footer;