const AdminCard = ({ city }) => {
    return (
        <div className="adminCard">
            <div className="adminCardInfo">
                <span>Name: {city.name}</span>
                <span>Country: {city.country}</span>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default AdminCard