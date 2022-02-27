import {  useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CreatePlaceModal from '../CreatePlaceModal';
import '../Places/Places.css'
const SearchResults = () => {
    const searchResults = useSelector(state => Object.values(state.searchResults))

    let displayResults;
    if (Object.keys(searchResults).length > 0) {
        displayResults = (
            <>
                {searchResults?.map((place) => (
                            <div key={place.id} className='places-container'>
                                <div className='places-images-container'>
                                    <div key={place.images[0]?.id} className='places-image-div'>
                                    <NavLink to={`/places/${place.id}`}>
                                            <img src={place.images[0]?.url}
                                            alt={place.images[0]?.name}
                                            className='places-images'
                                            onError={event => {
                                                event.target.src = "https://res.cloudinary.com/dxubahnmi/image/upload/v1644967329/FocusSpace/1-default.jpg"
                                                event.onerror = null
                                            }}/>
                                        </NavLink>
                                    </div>
                                </div>
                                <div key={place.id} className='places-title'>
                                    {place.name}
                                    <div key={place.city} className='places-address'>
                                        {place.city} {place.state}
                                    </div>
                                <div>
                                    ${place.price} / hour
                                </div>
                                </div>
                            </div>
                        ))}
            </>
        )
    }
    else {
        displayResults = (
            <div>
                <h1>Nothing here yo</h1>
            </div>
        )
    }
        return (
            <div className='page-container'>
               <div className='create-place-button-div'>
                   <CreatePlaceModal />
                </div>
                {displayResults}
            </div>
        )
    };

export default SearchResults;
