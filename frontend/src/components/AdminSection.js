import { useEffect } from "react"
import { connect } from 'react-redux'
import adminActions from "../redux/actions/adminActions"
import AdminCard from "./AdminCard"


const AdminSection = (props) => {

    useEffect(() => {
        props.loadAllCities()
        // return () => { cleanup }    
    }, [])



    return (
        <div className="adminSection">
            <div className="adminTitle">
                <h2>Cities</h2>
                <button>Add new city +</button>
            </div>
            {
                props.preloader
                    ? <p>hola</p>
                    : props.allCities.map((city,i) => <AdminCard key={city._id} city={city}/>)
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        allCities: state.adminReducer.arrayOf,
        preloader: state.adminReducer.preloader
    }
}

const mapDispatchToProps = {
    loadAllCities: adminActions.getCities
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSection)

