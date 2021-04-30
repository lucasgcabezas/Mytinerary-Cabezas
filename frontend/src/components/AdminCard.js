import { connect } from 'react-redux'
import adminActions from '../redux/actions/adminActions'

const AdminCard = ({ city, deleteCity }) => {

    return (
        <div className="adminCard">
            <div className="adminCardInfo">
                <span>Name: {city.name}</span>
                <span>Country: {city.country}</span>
                <span>Img: {city.img}</span>
                <span className="phraseAdminCard">Phrase: {city.phrase}</span>
            </div>
            <div>
                <button>Edit</button>
                <button onClick={()=>deleteCity(city._id)}>Delete</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteCity: adminActions.deleteCity
}

export default connect(null, mapDispatchToProps)(AdminCard)
