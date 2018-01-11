import React, { Component } from 'react';

const stylesDefault = icon => ({
  width: 86,
  height: 86,
  backgroundColor: '#FFFFFF',
  backgroundImage: `url(${icon})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 43,
  marginLeft: 11,
  marginRight: 11,
  marginTop: 5,
  marginBottom: 5,
  boxShadow: '0px 0px 6px 1px #dcdcdc',
  overflow: 'visible',
});

const stylesHighlighted = icon => ({
  width: 86,
  height: 86,
  backgroundColor: '#FFFFFF',
  backgroundImage: `url(${icon})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 48,
  marginLeft: 6,
  marginRight: 6,
  boxShadow: '0px 0px 6px 1px #dcdcdc',
  overflow: 'visible',
  border: '5px solid #36c8be',
  animation: 'borderAnimation 1s infinite',
});

const textStyles = visible => ({
  fontWeight: 500,
  marginTop: 1,
  position: 'absolute',
  color: '#36c8be',
  fontSize: 30,
  letterSpacing: 0,
  width: 300,
  textAlign: 'center',
  left: '50%',
  marginLeft: '-150px',
  opacity: visible ? 1 : 0,
  transition: 'opacity 60ms',
});
const Text = ({ text, visible }) => (
  <div style={textStyles(visible)}>{text}</div>
);

const wrapperStyles = {
  position: 'relative',
  overflow: 'visible',
};

class DockButton extends Component {
  render() {
    const { icon, isHighlighted, text } = this.props;
    const styles = isHighlighted
      ? stylesHighlighted(icon)
      : stylesDefault(icon);

    return (
      <div style={wrapperStyles}>
        <div style={styles} />
        <Text text={text} visible={isHighlighted} />
      </div>
    );
  }
}

export default DockButton;
