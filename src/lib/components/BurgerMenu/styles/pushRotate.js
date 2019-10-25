const styles = {
  pageWrap: (isOpen, width, right) => ({
    MozTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0) rotateY(15deg)`
      : `translate3d(${width}, 0, 0) rotateY(-15deg)`,
    MsTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0) rotateY(15deg)`
      : `translate3d(${width}, 0, 0) rotateY(-15deg)`,
    OTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0) rotateY(15deg)`
      : `translate3d(${width}, 0, 0) rotateY(-15deg)`,
    WebkitTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0) rotateY(15deg)`
      : `translate3d(${width}, 0, 0) rotateY(-15deg)`,
    transform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0) rotateY(15deg)`
      : `translate3d(${width}, 0, 0) rotateY(-15deg)`,
    transformOrigin: right ? '100% 50%' : '0% 50%',
    transformStyle: 'preserve-3d',
    transition: 'all 0.5s'
  }),

  outerContainer: (isOpen) => ({
    perspective: '1500px',
    overflow: isOpen ? '' : 'hidden'
  })
};

export default styles;
