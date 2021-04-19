const AdminCard = ({ cityToShow: { name, country, img, phrase, _id }, borrarTarea, idForm }) => {
    return (
        <div>
            <form>
                <input placeholder={name}></input>
                <input placeholder={country}></input>
                <input placeholder={img}></input>
                <textarea placeholder={phrase} style={{ height: '150px' }}></textarea>
                <button data-idmodify={_id}>Modify!</button>
                <button onClick={borrarTarea} data-idborrar={_id}>Delete city</button>
            </form>
        </div>
    )
}
export default AdminCard