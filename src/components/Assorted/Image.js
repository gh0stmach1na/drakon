import LazyLoad from 'react-lazy-load';

export const Image = ({ imgSrc, position, size, width, marginRight }) => {
  // TODO: test variations
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
  // TODO: does lazyload work better with bg image or <img> ?
  return (
    <LazyLoad>
      <div 
        style={{
          width: `${width}`,
          ...sizeConfig[size],
          textAlign: 'center',
          marginRight: `${marginRight ? marginRight : '10px'}`,
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'contain',
          backgroundPosition: `${position ? position : 'center'}`,
          backgroundRepeat: 'no-repeat',
          minHeight: '100px'
        }}>
      </div>
    </LazyLoad>
  )
}