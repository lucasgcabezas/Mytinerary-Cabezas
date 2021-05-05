import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import adminActions from "../../redux/actions/adminActions"
import AdminCardItinerary from "./AdminCardItinerary"
import Preloader from "../Preloader"


const AdminSection = (props) => {

    const [newElement, setNewElement] = useState({ name: '', img: '', country: '', phrase: '' })

    const [newElementButton, setNewElementButton] = useState(false)

    useEffect(() => {
        props.cleanAdminStore()     
        props.loadAllCities("itineraries")
        props.getAllCities()
        return () => props.cleanAdminStore()     

    }, [])

    const getInput = e => { setNewElement({ ...newElement, [e.target.name]: e.target.value }) }

    const sendNewElement = e => {
        e.preventDefault()
        props.sendNewCity(newElement)
        setNewElement({ name: '', img: '', country: '', phrase: '' })
        // setNewElementButton(false)
    }

    return (
        <div className="adminSection">
            <div className="adminTitle">
                <h2>Cities</h2>
                <button onClick={() => setNewElementButton(!newElementButton)} style={{ backgroundColor: !newElementButton ? '#118311' : 'red' }}>{!newElementButton ? 'Add new city +' : ' Close X'}</button>
            </div>
            {
                props.preloader 
                    ? <Preloader />
                    : props.allCities.map((city, i) => <AdminCardItinerary key={city._id} city={city} />)
            }
            <div className={newElementButton ? "newCityModalVisible" : "newCityModalHidden"}>
                <form>
                    <span>Complete to add new city</span>
                    <input type="text" placeholder="City name" name="name" value={newElement.name} onChange={getInput}></input>
                    <input type="text" placeholder="Url img" name="img" value={newElement.img} onChange={getInput}></input>
                    <input type="text" placeholder="Country" name="country" value={newElement.country} onChange={getInput}></input>
                    <input type="text" placeholder="Phrase" name="phrase" value={newElement.phrase} onChange={getInput}></input>
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
        preloaderCity: state.adminReducer.preloaderCity
    }
}

const mapDispatchToProps = {
    loadAllCities: adminActions.getCities,
    sendNewCity: adminActions.sendNewCity,
    getAllCities: adminActions.getAllCities,
    cleanAdminStore: adminActions.cleanAdminStore
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSection)

