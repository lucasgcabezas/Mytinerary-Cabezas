import { useState } from 'react'
import { connect } from 'react-redux'
import adminActions from '../../redux/actions/adminActions'


const AdminCard = (props) => {
    const { name, country, img, phrase, _id } = props.city
    const [editShowPanel, setEditShowPanel] = useState(false)
    const [moreInfoShow, setMoreInfoShow] = useState(false)
    const [elementsToModify, setElementsToModify] = useState()

    let moreInfoButton = moreInfoShow ? 'fas fa-times-circle closeButton ' : 'fas fa-plus-circle moreButton'

    const getInput = e => { setElementsToModify({ ...elementsToModify, [e.target.name]: e.target.value }) }

    const sendModify = e => {
        e.preventDefault()
        props.modifyCity(_id, elementsToModify)
        setEditShowPanel(false)
        // e.target.parentElement.reset()
    }

    return (
        <div className="adminCard">
            <div className="adminCardHeader">
                <span className={moreInfoButton} onClick={() => setMoreInfoShow(!moreInfoShow)}></span>
                <h4>{name}</h4>
                <div>
                    <div className="adminCarEditDelete">
                        <span className="fas fa-edit editAdmin" onClick={() => setEditShowPanel(!editShowPanel)}></span>
                        <span className="fas fa-trash-alt deleteAdmin" onClick={() => props.deleteCity(_id)}></span>
                    </div>
                </div>
            </div>

            <div className="adminCardInfo" style={{ display: moreInfoShow ? 'flex' : 'none' }}>

                <div className="adminCardFields">
                    <span >Name:</span>
                    <span >Country:</span>
                    <span >Img:</span>
                    <span >Phrase:</span>
                </div>

                <div style={{ display: editShowPanel ? 'none' : 'flex' }} className="adminElementInfo">
                    <span >{name}</span>
                    <span >{country}</span>
                    <span >{img}</span>
                    <span >{phrase}</span>
                </div>
                <form style={{ display: editShowPanel ? 'flex' : 'none' }}>
                    <span><input type="text" placeholder={name} name="name" onChange={getInput}></input>  </span>
                    <span><input type="text" placeholder={country} name="country" onChange={getInput}></input>    </span>
                    <span><input type="text" placeholder={img} name="img" onChange={getInput}></input>    </span>
                    <span><input type="text" placeholder={phrase} name="phrase" onChange={getInput}></input>  </span>

                </form>
                    <button onClick={sendModify} style={{ display: editShowPanel ? 'block' : 'none' }} className="adminConfirmM">Confirm</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteCity: adminActions.deleteCity,
    modifyCity: adminActions.modifyCity
}

export default connect(null, mapDispatchToProps)(AdminCard)
