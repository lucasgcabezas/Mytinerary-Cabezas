import Slide from './Slide'
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    autoPlay: true
}

const Carousel = ({ carrouselSize }) => {
    return (
        <div className="containerSlider">
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                {
                    carrouselSize.map((citiesGroup, index) => {
                        return <Slide key={index} citiesGroup={citiesGroup} />
                    })
                }
            </Flickity>
        </div>
    )
}
export default Carousel