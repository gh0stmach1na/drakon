import LazyLoad from 'react-lazy-load';

export const Image = ({ imgSrc, position = 'center', size, width, marginRight, alt = '' }) => {
  const sizeConfig = {
    sm: {
      width: '100px',
      height: '50px',
    },
    m: {
      width: '200px',
      height: '100px'
    },
    l: {
      width: '250px',
      height: '250px',
    },
  }

  const style = {
    width: width || (sizeConfig[size] && sizeConfig[size].width),
    height: sizeConfig[size] && sizeConfig[size].height,
    objectFit: 'contain',
    objectPosition: position,
    display: 'block',
    marginRight: marginRight ? marginRight : '10px',
    textAlign: 'center',
  }

  return (
    <LazyLoad>
      <img 
        src={imgSrc} 
        alt={alt}
        style={style}
        loading="lazy"
      />
    </LazyLoad>
  )
}