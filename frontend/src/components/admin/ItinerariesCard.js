import { useState } from 'react'
import { connect } from 'react-redux'
import adminActions from '../../redux/actions/adminActions'
import Preloader from '../Preloader'


const AdminCard = (props) => {
    const { _id, title, img, authorName, authorPic, price, duration, hashtags, cityId } = props.city
    const [editShowPanel, setEditShowPanel] = useState(false)
    const [moreInfoShow, setMoreInfoShow] = useState(false)
    const [elementsToModify, setElementsToModify] = useState()


    let moreInfoButton = moreInfoShow ? 'fas fa-times-circle closeButton ' : 'fas fa-plus-circle moreButton'

    const getInput = e => {
        if (e.target.name === 'hashtags') {
            let hashtagArray = e.target.value.split(' ')
            setElementsToModify({ ...elementsToModify, [e.target.name]: hashtagArray })

        } else {
            setElementsToModify({ ...elementsToModify, [e.target.name]: e.target.value })
        }
    }

    const sendModify = e => {
        e.preventDefault()
        props.modifyItinerary("itinerary", _id, elementsToModify)
        setEditShowPanel(false)
        // e.target.parentElement.reset()
    }

    // console.log(cityId !== undefined)
    return (
        <div className="adminCard">
            <div className="adminCardHeader">
                <span className={moreInfoButton} onClick={() => setMoreInfoShow(!moreInfoShow)}></span>
                <h4>{title}</h4>
                <div>
                    <div className="adminCarEditDelete">
                        <span className="fas fa-edit editAdmin" onClick={() => setEditShowPanel(!editShowPanel)}></span>
                        <span className="fas fa-trash-alt deleteAdmin" onClick={() => props.deleteItinerary("itinerary", _id)}></span>
                    </div>
                </div>
            </div>

            <div className="adminCardInfo" style={{ display: moreInfoShow ? 'flex' : 'none' }}>

                <div className="adminCardFields">
                    <span >Title:</span>
                    <span >Img:</span>
                    <span >Author name:</span>
                    <span >Author pic:</span>
                    <span >Price:</span>
                    <span >Duration:</span>
                    <span >Hashtags:</span>
                    <span >City:</span>
                </div>

                <div style={{ display: editShowPanel ? 'none' : 'flex' }} className="adminElementInfo">
                    <span >{title}</span>
                    <span >{img}</span>
                    <span >{authorName}</span>
                    <span >{authorPic}</span>
                    <span >{price}</span>
                    <span >{duration}</span>
                    <span >{hashtags}</span>
                    {cityId !== undefined && <span >{cityId.name}</span>}
                </div>

                <form style={{ display: editShowPanel ? 'flex' : 'none' }}>
                    <span><input type="text" placeholder={title} name="title" onChange={getInput}></input></span>
                    <span><input type="text" placeholder={img} name="img" onChange={getInput}></input></span>
                    <span><input type="text" placeholder={authorName} name="authorName" onChange={getInput}></input></span>
                    <span><input type="text" placeholder={authorPic} name="authorPic" onChange={getInput}></input></span>
                    <span><input type="text" placeholder={price} name="price" onChange={getInput}></input></span>
                    <span><input type="text" placeholder={duration} name="duration" onChange={getInput}></input></span>
                    <span><input type="text" placeholder={hashtags} name="hashtags" onChange={getInput}></input></span>
                    {/* <span><input type="text" placeholder={cityId} name="cityId" onChange={getInput}></input></span> */}
                    <span>
                        <select name="cityId" onChange={getInput}>
                            <option selected disabled>Select a City</option>
                            {
                                props.citiesArray.map(city => {
                                    return <option key={city._id} value={city._id}>{city.name}</option>
                                })
                            }
                        </select>
                    </span>
                    <button onClick={sendModify} style={{ display: editShowPanel ? 'block' : 'none' }} className="adminConfirmM">Confirm</button>
                </form>


            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        citiesArray: state.adminReducer.citiesArrayOrItineraries
    }
}

const mapDispatchToProps = {
    deleteItinerary: adminActions.deleteElement,
    modifyItinerary: adminActions.modifyElement
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCard)


