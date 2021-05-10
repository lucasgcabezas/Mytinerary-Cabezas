import React from 'react'
import CitiesSection from '../components/admin/CitiesSection'
import ItenerarySection from '../components/admin/ItenerarySection'
import ActivitiesSection from '../components/admin/ActivitiesSection'

export default class Admin extends React.Component {

    state = <CitiesSection />

    render() {
        return (
            <div>
                <div style={{ height: '9vh' }}></div>
                <div className="adminContainer">
                    <div className="adminNav">
                        <span onClick={() => this.setState(<CitiesSection />)}>Cities</span>
                        <span onClick={() => this.setState(<ItenerarySection />)}>Itineraries</span>
                        <span onClick={() => this.setState(<ActivitiesSection />)}>Activities</span>
                    </div>
                    {this.state}
                </div>
            </div>
        )
    }
}

