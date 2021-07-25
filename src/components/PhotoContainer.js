import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import {useParams} from 'react-router-dom';

const PhotoContainer = ({data}) => {

    let {search} = useParams();
    if(search === 'React-Gallery-App') {
      search = 'mountain';
    }
    let dataObject = data[`${search}`]


    let photos='';
    if(dataObject) {
        let photosMap = dataObject.map(image => <Photo id={image.id} farmID={image.farm} serverID={image.server} secret={image.secret} title={image.title} key={image.id}/>)
        photos = photosMap;
    }
    let photosExist = photos.length;


    return (
        <div className="photo-container">
                <h2>{photosExist ? search : 'Loading...'}</h2>
                <ul>
                    {photosExist ? photos : <NotFound query={search}/>}
                </ul>
        </div>
    );
};

export default PhotoContainer;
