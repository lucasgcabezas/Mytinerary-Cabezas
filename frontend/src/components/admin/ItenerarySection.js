import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import adminActions from "../../redux/actions/adminActions"
import AdminCardItinerary from "./ItinerariesCard"
import Preloader from "../Preloader"


const AdminSection = (props) => {

    const [newElement, setNewElement] = useState({ title: '', img: '', authorName: '', authorPic: '', price: '', duration: '', likes: '', hashtags: [], cityId: '' })

    console.log(newElement)

    const [newElementButton, setNewElementButton] = useState(false)

    useEffect(() => {
        props.cleanAdminStore()
        props.loadAllCities("itineraries")
        props.getAllCities()
        return () => props.cleanAdminStore()

    }, [])

    const getInput = e => {
        if (e.target.name === 'hashtags') {
            let hashtagArray = e.target.value.split(' ')
            setNewElement({ ...newElement, [e.target.name]: hashtagArray })
        } else {
            setNewElement({ ...newElement, [e.target.name]: e.target.value })
        }
    }

    const sendNewElement = e => {
        e.preventDefault()
        props.sendNewCity("itineraries", newElement)
        setNewElement({ title: '', img: '', authorName: '', authorPic: '', price: '', duration: '', likes: '', hashtags: '', cityId: '' })
        // setNewElementButton(false)
    }

    return (
        <div className="adminSection">
            <div className="adminTitle">
                <h2>Itineraries</h2>
                <button onClick={() => setNewElementButton(!newElementButton)} style={{ backgroundColor: !newElementButton ? '#118311' : 'red' }}>{!newElementButton ? 'Add itinerary' : ' Close X'}</button>
            </div>
            {
                props.preloader
                    ? <Preloader />
                    : props.allCities.map((city, i) => <AdminCardItinerary key={city._id} city={city} />)
            }
            <div className={newElementButton ? "newCityModalVisible" : "newCityModalHidden"}>
                <form>
                    <span>Complete to add new Itinerary</span>
                    <input type="text" placeholder="Itinerary title" name="title" value={newElement.title} onChange={getInput}></input>
                    <input type="text" placeholder="Url img" name="img" value={newElement.img} onChange={getInput}></input>
                    <input type="text" placeholder="Name of Author" name="authorName" value={newElement.authorName} onChange={getInput}></input>
                    <input type="text" placeholder="Pic of Author" name="authorPic" value={newElement.authorPic} onChange={getInput}></input>
                    <input type="text" placeholder="Price" name="price" value={newElement.price} onChange={getInput}></input>
                    <input type="text" placeholder="Duration" name="duration" value={newElement.duration} onChange={getInput}></input>
                    {/* <input type="text" placeholder="Hashtags" name="hashtags" value={newElement.hashtags} onChange={getInput}></input> */}
                    <input type="text" placeholder="Hashtags" name="hashtags" value={newElement.hashtags.length > 1 ? newElement.hashtags.join(' ') : newElement.hashtags} onChange={getInput}></input>
                    {/* <input type="text" placeholder="City of Itinerary" name="phrase" value={newElement.phrase} onChange={getInput}></input> */}
                    <select name="cityId" value={newElement.cityId} onChange={getInput}>
                        <option>City of Itinerary</option>
                        {
                            props.citiesArray.map(city => {
                                return <option key={city._id} value={city._id} >{city.name}</option>
                            })
                        }
                    </select>

                    <button onClick={sendNewElement}>Send!</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allCities: state.adminReducer.arrayOf,
        preloader: state.adminReducer.preloader,
        preloaderCity: state.adminReducer.preloaderCity,
        citiesArray: state.adminReducer.citiesArray
    }
}

const mapDispatchToProps = {
    loadAllCities: adminActions.getCities,
    sendNewCity: adminActions.sendNewCity,
    getAllCities: adminActions.getAllCities,
    cleanAdminStore: adminActions.cleanAdminStore
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSection)

