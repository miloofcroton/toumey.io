import React from 'react';

const MyLink = ({ href }) => {
  return (
    <a
      href={href}
      css={(theme) => ({
        boxSizing: 'border-box',
        margin: 5,
        padding: 8,
        textDecoration: 'none',
        fontSize: 18,
        color: 'black',
        backgroundColor: theme.darkgreen,
        border: `1px solid ${theme.black}`,

        '&:hover': {
          backgroundColor: theme.lightgreen,
        }
      })}
    />
  );
};

export default MyLink;
