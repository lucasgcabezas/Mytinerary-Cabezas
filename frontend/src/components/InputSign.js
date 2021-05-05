

// const InputSign = (props) => {

//     const {error, type, inputName,getInput, passwordClass, passwordType, passwordEyeTrigger, setPasswordEyeTrigger} = props

//     return (
//         <>

//             {
//                 type === 'text' || type === 'password'
//                     && <div className="inputContainer">
//                         <input type={passwordType} placeholder={inputName} name={inputName} value={inputName} onChange={getInput}></input>
//                         {type === 'password' && <span className={passwordClass} onClick={() => setPasswordEyeTrigger(!passwordEyeTrigger)}></span>}
//                         <span className="errorSignUp">{error}</span>
//                     </div>

//                     // : <select name="country" value={country} onChange={getInput}>
//                     //     <option disabled defaultValue value=''>Countries</option>
//                     //     {
//                     //         allCountries.countries.map((c, i) => {
//                     //             return <option key={i} value={c.name} >{c.name}</option>
//                     //         })
//                     //     }
//                     // </select>

//             } 
//         </>
//     )

// }

// export default InputSign