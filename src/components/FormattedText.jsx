import React from 'react';

/**
 * Renders text with support for '/n' as a newline character.
 */
export const FormattedText = ({ text }) => {
  if (!text) return null;
  
  // Split the text by '/n' and join with <br /> tags
  return text.split('/n').map((line, index, array) => (
    <React.Fragment key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
};
