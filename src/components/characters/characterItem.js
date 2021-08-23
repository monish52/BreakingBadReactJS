import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div className="card">
            <div>
                <div>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Name: </strong>{item.name}
                        </li>
                        <li>
                            <strong>Date of birth: </strong>{item.birthday}
                        </li>
                        <li>
                            <strong>Status: </strong>{item.status}
                        </li>
                        <li>
                            <strong>Occupation: </strong>{item.occupation.map(occu=>(
                                <p>{occu}</p>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default CharacterItem

//name, occupation, date of birth & status of the character
