const styles = {
  menuWrap: (isOpen) => ({
      MozTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
      MsTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
      OTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
      WebkitTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
      transform: isOpen ? '' : 'translate3d(0, -100%, 0)',
      transition: 'all 0.5s ease-in-out'
  }),

  pageWrap: (isOpen, width, right) => ({
    MozTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0)`
      : `translate3d(${width}, 0, 0)`,
    MsTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0)`
      : `translate3d(${width}, 0, 0)`,
    OTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0)`
      : `translate3d(${width}, 0, 0)`,
    WebkitTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0)`
      : `translate3d(${width}, 0, 0)`,
    transform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0)`
      : `translate3d(${width}, 0, 0)`,
    transition: 'all 0.5s'
  }),

  outerContainer: (isOpen) => ({
    perspective: '1500px',
    perspectiveOrigin: '0% 50%',
    overflow: isOpen ? '' : 'hidden'
  })
};

export default styles;
