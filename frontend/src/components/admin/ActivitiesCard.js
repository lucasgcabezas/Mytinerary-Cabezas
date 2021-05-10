import { useState } from 'react'
import { connect } from 'react-redux'
import adminActions from '../../redux/actions/adminActions'
import Preloader from '../Preloader'


const ActivitiesCard = (props) => {
    const { _id, name, img, itineraryId } = props.activity
    const [editShowPanel, setEditShowPanel] = useState(false)
    const [moreInfoShow, setMoreInfoShow] = useState(false)
    const [elementsToModify, setElementsToModify] = useState()


    let moreInfoButton = moreInfoShow ? 'fas fa-times-circle closeButton ' : 'fas fa-plus-circle moreButton'

    const getInput = e => {
        setElementsToModify({ ...elementsToModify, [e.target.name]: e.target.value })

    }

    const sendModify = e => {
        e.preventDefault()
        props.modifyItinerary("activities", _id, elementsToModify)
        setEditShowPanel(false)
        // e.target.parentElement.reset()
    }


    return (
        <div className="adminCard">
            <div className="adminCardHeader">
                <span className={moreInfoButton} onClick={() => setMoreInfoShow(!moreInfoShow)}></span>
                <h4>{name}</h4>
                <div>
                    <div className="adminCarEditDelete">
                        <span className="fas fa-edit editAdmin" onClick={() => setEditShowPanel(!editShowPanel)}></span>
                        <span className="fas fa-trash-alt deleteAdmin" onClick={() => props.deleteItinerary("activities", _id)}></span>
                    </div>
                </div>
            </div>

            <div className="adminCardInfo" style={{ display: moreInfoShow ? 'flex' : 'none' }}>

                <div className="adminCardFields">
                    <span >Title:</span>
                    <span >Img:</span>
                    <span >Itinerary:</span>
                </div>

                <div style={{ display: editShowPanel ? 'none' : 'flex' }} className="adminElementInfo">
                    <span >{name}</span>
                    <span >{img}</span>
                    {itineraryId !== undefined && <span >{itineraryId.title}</span>}
                </div>

                <form style={{ display: editShowPanel ? 'flex' : 'none' }}>
                    <span><input type="text" placeholder={name} name="name" onChange={getInput}></input></span>
                    <span><input type="text" placeholder={img} name="img" onChange={getInput}></input></span>
                    <span>
                        <select name="itineraryId" onChange={getInput}>
                        <option selected defaultValue disabled>Select a itinerary</option>
                            {
                                props.itinerariesArray.map(itinerary => {
                                    return <option key={itinerary._id} value={itinerary._id}>{itinerary.title}</option>
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
        itinerariesArray: state.adminReducer.citiesArrayOrItineraries
    }
}

const mapDispatchToProps = {
    deleteItinerary: adminActions.deleteElement,
    modifyItinerary: adminActions.modifyElement
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesCard)


