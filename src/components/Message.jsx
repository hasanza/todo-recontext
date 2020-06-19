import React from 'react';
import FlashMessage from 'react-flash-message';


export const Message = ({submitted, deleted}) => {
    if (submitted) {
      return (
        <FlashMessage duration={1830}>
          <p className='submitted'>
            <strong> Todo Inserted </strong>
          </p>
        </FlashMessage>
      );
    } else if (deleted) {
      return (
        <FlashMessage duration={1830}>
          <p className="deleted">
            <strong> Todo Removed </strong>
          </p>
        </FlashMessage>
      );
    } else return null;
  };