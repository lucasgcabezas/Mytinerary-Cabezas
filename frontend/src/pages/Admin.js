import React from 'react'
import AdminSection from '../components/admin/AdminSection'
import AdminSectionItinerary from '../components/admin/AdminSectionItinerary'

export default class Admin extends React.Component {

    state = {
        sectionToShow: <AdminSection />
    }

    render() {
        return (
            <div>
                <div style={{ height: '9vh' }}></div>
                <div className="adminContainer">
                    <div className="adminNav">
                        <span onClick={()=> this.setState({ sectionToShow: <AdminSection /> })}>Cities</span>
                        <span onClick={()=> this.setState({ sectionToShow: <AdminSectionItinerary />})}>Itineraries</span>
                        <span>Users</span>
                    </div>
                    {this.state.sectionToShow}
                </div>
            </div>
        )
    }
}

