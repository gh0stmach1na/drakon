import LazyLoad from 'react-lazy-load';

export const Image = ({ imgSrc, position, size, width }) => {
  // TODO: test various 
  const sizeConfig = {
    sm: {
      width: '100px',
      height: '50px',
    },
    m: {
      width: '100px',
      height: '100px'
    },
    l: {
      width: '300px',
      height: '300px',
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
          marginRight: '10px',
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