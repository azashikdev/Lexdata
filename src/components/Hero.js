const Hero = () => {
    return(
        <>
        <div className="hero">
         <div className="left-part">
         <h2 className="hero-text"><span className="fas fa-key-skeleton"></span><span className="unlock">Unlock</span><br/> <span className="unlock">Data</span> Precision</h2>
         <p>LexData Labs enhances machine learning with precise data services, including data entry, labelling,<br/> verification, and management. We excel in advanced annotation techniques such as polygon, polyline,<br/> and bounding box methods, focusing on improving image and geospatial mapping solutions.</p>
         </div>
         <div className="right-side">
           <ul>
            <li><i class="far fa-car"></i>Automotive</li>
            <li><i class="fas fa-robot"></i>Robotics</li>
            <li><i class="far fa-file-contract"></i>Document automation</li>
            <li className="4th lastfinal"><i class="fal fa-skating"></i>Fintech</li>
            <li className="last"><i class="far fa-car"></i>Automotive</li>
            <li className="last"><i class="far fa-car"></i>Automotive</li>
            <li className="last "><i class="far fa-car"></i>Automotive</li>
            <li className="last lastfinal"><i class="far fa-car"></i>Automotive</li>
           </ul>
         </div>
        </div>
        </>
    )
}

export default Hero;