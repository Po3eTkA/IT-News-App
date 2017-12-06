import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.style';

function Button({
  type, onClick, children, round, marginLeft, marginBottom, activeSortKey, remove, mediaQuery,
}) {
  return (
    <StyledButton
      type={type}
      round={round}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      remove={remove}
      mediaQuery={mediaQuery}
      onClick={onClick}
      activeSortKey={activeSortKey === children.toLowerCase() ? activeSortKey : null}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  round: false,
  marginLeft: false,
  marginBottom: false,
  remove: false,
  mediaQuery: false,
  activeSortKey: null,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  round: PropTypes.bool,
  marginLeft: PropTypes.bool,
  marginBottom: PropTypes.bool,
  remove: PropTypes.bool,
  mediaQuery: PropTypes.bool,
  activeSortKey: PropTypes.string,
};

export default Button;
