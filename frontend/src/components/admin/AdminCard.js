import { useState } from 'react'
import { connect } from 'react-redux'
import adminActions from '../../redux/actions/adminActions'


const AdminCard = (props) => {
    const { name, country, img, phrase, _id } = props.city
    const [editShowPanel, setEditShowPanel] = useState(false)
    const [elementsToModify, setElementsToModify] = useState()


    const getInput = e => { setElementsToModify({ ...elementsToModify, [e.target.name]: e.target.value }) }

    const sendModify = e => {
        e.preventDefault()
        props.modifyCity(_id,elementsToModify)
        setEditShowPanel(false)
        e.target.parentElement.reset()
    }

    return (
        <div className="adminCard">
            <h4>Hola</h4>
            <div className="adminCardInfo">
                <span style={{ display: editShowPanel ? 'none' : 'block' }} >{name}</span>
                <span style={{ display: editShowPanel ? 'none' : 'block' }} >Name: {name}</span>
                <span style={{ display: editShowPanel ? 'none' : 'block' }} >Country: {country}</span>
                <span style={{ display: editShowPanel ? 'none' : 'block' }} >Img: {img}</span>
                <span style={{ display: editShowPanel ? 'none' : 'block' }} className="phraseAdminCard">Phrase: {phrase}</span>

                <form>
                    <span style={{ display: editShowPanel ? 'block' : 'none' }} >
                        <input type="text" valu={name} placeholder="Name" name="name" onChange={getInput}></input>
                    </span>

                    <span style={{ display: editShowPanel ? 'block' : 'none' }} >
                        <input type="text" valu={country} placeholder="Country" name="country" onChange={getInput}></input>
                    </span>

                    <span style={{ display: editShowPanel ? 'block' : 'none' }} >
                        <input type="text" valu={img} placeholder="Img" name="img" onChange={getInput}></input>
                    </span>

                    <span style={{ display: editShowPanel ? 'block' : 'none' }} >
                        <input type="text" valu={phrase} placeholder="Phrase" name="phrase" onChange={getInput}></input>
                    </span>

                    <button onClick={sendModify} style={{ display: editShowPanel ? 'block' : 'none' }} className="adminConfirmM">Edit now!</button>
                </form>
                
            </div>
            <div>
                <div className="adminCarEditDelete">
                    <span className="fas fa-edit editAdmin" onClick={() => setEditShowPanel(!editShowPanel)}></span>
                    <span className="fas fa-trash-alt deleteAdmin" onClick={() => props.deleteCity(_id)}></span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteCity: adminActions.deleteCity,
    modifyCity: adminActions.modifyCity
}

export default connect(null, mapDispatchToProps)(AdminCard)
