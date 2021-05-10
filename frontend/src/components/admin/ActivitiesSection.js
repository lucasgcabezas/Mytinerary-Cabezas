import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import adminActions from "../../redux/actions/adminActions"
import ActivitiesCard from "./ActivitiesCard"
import Preloader from "../Preloader"


const ActivitiesSection = (props) => {

    const [newElement, setNewElement] = useState({ name: '', img: '', itineraryId: '' })

    const [newElementButton, setNewElementButton] = useState(false)

    useEffect(() => {
        props.cleanAdminStore()
        props.loadAllCities("activities")
        props.getAllCities("itineraries")
        return () => props.cleanAdminStore()
    }, [])

    const getInput = e => {
        setNewElement({ ...newElement, [e.target.name]: e.target.value })

    }

    const sendNewElement = e => {
        e.preventDefault()
        props.sendNewCity("activities", newElement)
        setNewElement({ name: '', img: '', itineraryId: '' })
        // setNewElementButton(false)
    }

    return (
        <div className="adminSection">
            <div className="adminTitle">
                <h2>Activities</h2>
                <button onClick={() => setNewElementButton(!newElementButton)} style={{ backgroundColor: !newElementButton ? '#118311' : 'red' }}>{!newElementButton ? 'Add activity' : ' Close X'}</button>
            </div>
            {
                props.preloader && props.preloaderCity
                    ? <Preloader />
                    : props.allCities.map((activity, i) => <ActivitiesCard key={activity._id} activity={activity} />)
            }
            <div className={newElementButton ? "newCityModalVisible" : "newCityModalHidden"}>
                <form>
                    <span>Complete to add new Activity</span>
                    <input type="text" placeholder="Activity title" name="name" value={newElement.name} onChange={getInput}></input>
                    <input type="text" placeholder="Url img" name="img" value={newElement.img} onChange={getInput}></input>
                    <select name="itineraryId" onChange={getInput}>
                        <option selected defaultValue value="" disabled>Itinerary of Activity</option>
                        {
                            props.itinerariesArray.map(itinerary => {
                                return <option key={itinerary._id} value={itinerary._id} >{itinerary.title}</option>
                            })
                        }
                    </select>

                    <button onClick={sendNewElement}>Send new</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allCities: state.adminReducer.arrayOf,
        preloader: state.adminReducer.preloader,
        preloaderCity: state.adminReducer.preloaderCityOrIti,
        itinerariesArray: state.adminReducer.citiesArrayOrItineraries
    }
}

const mapDispatchToProps = {
    loadAllCities: adminActions.getAllElements,
    sendNewCity: adminActions.sendNewElement,
    getAllCities: adminActions.getForSelect,
    cleanAdminStore: adminActions.cleanAdminStore
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesSection)

