import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const StyleApp = "flex flex-col items-center justify-center content-center p-3 w-4/5"
const Thumbnail = ({ arr, image, index }) => {
  return (<div className="tumbnail flex">
    {
      arr.map((imgsrc, i) => (
        <img
          key={i}
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active h-12 border-2 border-solid border-cyan-200 scale-125 transition-all delay-95' : 'h-12'}
        />
      ))
    }
  </div>)
}

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className={StyleApp}>
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}><KeyboardDoubleArrowLeftIcon/></button>
        <button onClick={next}><KeyboardDoubleArrowRightIcon/></button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  )
}

function SlideShow() {

  return (
    <div className="flex p-10 ">
        <div>
        <Slideshow
        imgs={[
          'https://s3-ap-southeast-1.amazonaws.com/o77site/sansiri-single-house-setthasiri-rama5-935x745.jpg',
          'https://s3-ap-southeast-1.amazonaws.com/o77site/sansiri-single-house-setthasiri-rama5-935x745.jpg',
          'https://s3-ap-southeast-1.amazonaws.com/o77site/sansiri-single-house-setthasiri-rama5-935x745.jpg',
        ]}
      />
        </div>

    </div>
  );
}

export default SlideShow;
