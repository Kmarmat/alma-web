import "./cards.scss"
import React from 'react'

const Cards = ({data}) => {
  return (
    <div className="cards">

      <div className="w-row">
        <div className="columnImg">
          <img
            src={data.src}
            loading="lazy"
            width="163"
            sizes="(max-width: 479px) 70vw, (max-width: 767px) 163px, (max-width: 991px) 134.1640625px, 163px"
            alt="Medical API example data"
            srcSet={data.srcSet}
            className="image-84"
          />
        </div>
        <div className="medical-api">
          <h2 className="heading-10">{data.heading}</h2>
          <p className="paragraph-8">
            {data.desc}
            <br />
            &zwj;
            <br />
            &zwj;
          </p>
        </div>
      </div>
      <div className="btn">
        <div className="text-block">Learn More</div>
        <img
          src="https://assets-global.website-files.com/640036547d68f8c201789d8c/64bc7e7c913366cc343f4f15_arrow-up-right.svg"
          loading="lazy"
          alt="Up arrow icon"
        />
      </div>
  
    </div>
  )
}

export default Cards
