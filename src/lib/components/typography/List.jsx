import React from 'react';

const MyList = () => {
  return (
    <ul
      css={{
        listStyle: 'none',
        marginBottom: '0',
        marginLeft: '0',
        marginRight: '1.5rem',
        marginTop: '1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'left',
        alignItems: 'center',

        'li': {
          padding: '0 2rem 1rem 0',
          marginBottom: '1.5rem',
          marginTop: 0,
        }
      }}
    />
  );
};

export default MyList;
