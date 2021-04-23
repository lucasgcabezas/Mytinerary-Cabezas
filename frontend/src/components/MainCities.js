import { useEffect } from 'react';
import { connect } from 'react-redux'

import Preloader from './Preloader'
import City from './City'
import cityActions from '../redux/actions/cityActions'


const MainCities = ({ loadAllCities, filterCity, loading, citiesFiltered }) => {

    useEffect(() => {
        loadAllCities()
    }, []);

    return (
        <>
            {
                loading
                    ? < Preloader />
                    : <div className="citiesContainer">
                        <div className="filterContainer">
                            <input className="cityFilter" placeholder="What is the destination of your dreams?" onChange={(e) => filterCity(e.target.value)}></input>
                        </div>
                        {
                            citiesFiltered.length === 0
                                ? <div className="notCities"><div style={{ backgroundImage: 'url("/assets/suitcase.png")' }} className="img" ></div><p>The destination you are looking for is not available yet!</p></div>
                                : citiesFiltered.map((city) => <City key={city._id} city={city} />)
                        }
                    </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        citiesFiltered: state.cityReducer.citiesFiltered,
        loading: state.cityReducer.loading
    }
}

const mapDispatchToProps = {
    loadAllCities: cityActions.allCities,
    filterCity: cityActions.filterCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCities)