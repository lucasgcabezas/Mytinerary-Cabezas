import Slide from './Slide'
import Flickity from 'react-flickity-component'

const Carousel = ({ carrouselSize }) => {

    const flickityOptions = {
        initialIndex: 1,
        wrapAround: true,
        autoPlay: true,
    }

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