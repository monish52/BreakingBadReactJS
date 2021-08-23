import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch';


const CharacterPage = () => {
    const {char_id}=useParams();    
    const {data: item, error, isLoading}=useFetch(`https://www.breakingbadapi.com/api/characters/${char_id}`);

    return (
        <div className="char-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {item && (
                <article>
                    <img src={item[0].img} alt="" />

                    <h2><strong> Name: </strong>{item[0].name}</h2><br />

                    <p><strong>Date of Birth: </strong> {item[0].birthday}</p><br />

                    <p><strong> Occupation: </strong>{item[0].occupation.map(occu=>(<div>{occu} </div>))}</p><br />

                    <p><strong> Status: </strong>{item[0].status}</p><br />

                    <p><strong> Nickname: </strong>{item[0].nickname}</p><br />

                    <p><strong> Potrayed by: </strong>{item[0].portrayed}</p><br />
                    
                    <p><strong> Appeared in: </strong>{item[0].appearance.map(appea=>(<div>Season {appea}</div>))}</p><br />
                </article>
            )}
        </div>
    )
}

export default CharacterPage;