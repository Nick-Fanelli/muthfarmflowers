type Props = {

    idPrefix: string,
    idNumber: number,
    name: string,
    imageFilepath: string,
    start?: number,
    end?: boolean

}

const CarouselItem = (props: Props) => {

    return (
        <div id={`${props.idPrefix}${props.idNumber}`} className="carousel-item relative w-full">

            <div className="w-full h-full flex items-center justify-center">
                <div className="card card-compact bg-base-100 w-[28rem] max-h-[34rem] shadow-xl">
                    <figure className="">
                        <img
                            src={props.imageFilepath}
                            alt={props.name} 
                            className=""
                        />
                    </figure>
                    <div className="card-body bg-base-content text-base-100 rounded-b-2xl">
                        <h1 className="text-5xl font-black text-center py-5">{props.name}</h1>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-1 sm:inset-x-5 top-1/2 flex -translate-y-1/2 transform justify-between xl:inset-x-[10vw]">
                <a href={`#${(props.start == undefined) ? `${props.idPrefix}${props.idNumber - 1}` : `${props.idPrefix}${props.start}`}`} className="btn btn-circle">❮</a>
                <a href={`#${!props.end ? `${props.idPrefix}${props.idNumber + 1}` : `${props.idPrefix}1`}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    )

}

export default CarouselItem;