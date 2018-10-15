import React, { Component } from "react";

const tileStylesWithCover = cover => ({
  width: 256,
  height: 256,
  backgroundImage: `url(${cover})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
});

const tileStylesWithoutCover = {
  width: 250,
  height: 250,
  border: "3px solid #f8f8f8",
  backgroundColor: "#eeeeee",
  borderRadius: 1
};

const tileStylesWrapper = {
  display: "inline-block",
  position: "relative",
  overflow: "visible",
  marginRight: 9,
  marginLeft: 9,
  borderRadius: 1,
  boxShadow: "0px 0px 6px 1px #d1d1d1"
};

const tileStylesWrapperHighlighted = {
  display: "inline-block",
  position: "relative",
  overflow: "visible",
  padding: 4,
  border: "5px solid #00abcb",
  backgroundColor: "#ffffff",
  borderRadius: 4,
  boxShadow: "0px 0px 6px 1px #d1d1d1",
  animation: "borderAnimation 1s infinite"
};

const textStyles = visible => ({
  fontWeight: 500,
  fontStretch: "expanded",
  marginTop: -54,
  position: "absolute",
  color: "#00abcb",
  fontSize: 32,
  letterSpacing: 0,
  width: 500,
  textAlign: "center",
  left: "50%",
  marginLeft: "-250px",
  opacity: visible ? 1 : 0,
  transition: "opacity 60ms"
});
const Text = ({ text, visible }) => (
  <div style={textStyles(visible)}>{text}</div>
);

class Tile extends Component {
  render() {
    const { cover, isHighlighted, title } = this.props;
    const tileStyles = cover
      ? tileStylesWithCover(cover)
      : tileStylesWithoutCover;
    let wrapperStyles;
    if (isHighlighted) {
      wrapperStyles = tileStylesWrapperHighlighted;
    } else {
      wrapperStyles = tileStylesWrapper;
    }
    return (
      <div style={wrapperStyles}>
        <Text text={title} visible={isHighlighted} />
        <div style={tileStyles} />
      </div>
    );
  }
}

export default Tile;
