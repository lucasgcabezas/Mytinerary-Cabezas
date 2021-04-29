import React from 'react'
import AdminSection from '../components/AdminSection'

export default class Admin extends React.Component {

    state = {
        sectionToShow: "cities"
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'var(--fcolor)', height: '10vh' }}></div>
                <div className="adminContainer">
                    <div className="adminNav">
                        <span>Cities</span>
                        <span>Itineraries</span>
                        <span>Users</span>
                    </div>
                    <AdminSection />
                </div>
            </div>
        )
    }
}

