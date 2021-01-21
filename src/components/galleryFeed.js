import React, { useEffect, useState } from "react";
import ImgModal from "./imgModal";

import Twimage from '../../static/images/bella-edward-trees-jan-21-code.png';

const featuredImagesData = [
    {id: 1, title: "In the Trees", date: "Jan 18 2021", path: Twimage},
    {id: 1, title: "In the Trees", date: "Jan 18 2021", path: Twimage},
    {id: 1, title: "In the Trees", date: "Jan 18 2021", path: Twimage},
    {id: 2, title: "In the Trees 2", date: "Jan 18 2021", path: Twimage}
]

export default function GalleryFeed() {
    const [featuredImages, setFeaturedImages] = useState(featuredImagesData)

    // useEffect(() => {
    //     getFeaturedImages();
    // }, []);

    // const getFeaturedImages = () => {
    //     setFeaturedImages(featuredImages);
    // }

    const featuredImagesRenderer = () => {
        return featuredImages.map((featuredImage) => <ImgModal key={featuredImage.id} title={featuredImage.title} date={featuredImage.date} path={featuredImage.path} />);
    }

    return (
      <div className='galleryFeed'>
        <h1>Gallery Feed</h1>
        <div className="featuredImagesContainer">
            {featuredImagesRenderer()}
        </div>
        {/* <ImgModal /> */}
      </div>
    );

}
