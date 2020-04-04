import React, { useEffect, useState } from "react";
import "./SwitchConsole.css";

export default function SwitchConsole({ inputEvent }) {
  const [buttonStates, setButtonStates] = useState({
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
    KeyO: false,
    KeyP: false,
    KeyK: false,
    KeyL: false,
    ArrowUp: false,
    ArrowLeft: false,
    ArrowDown: false,
    ArrowRight: false,
  });

  useEffect(() => {
    if (!inputEvent) return;

    setButtonStates({
      ...buttonStates,
      [inputEvent.code]: inputEvent.type === "keydown",
    });
  }, [inputEvent]);

  function getLeftStickStyles() {
    let translateX = "translateX(0px)";
    let translateY = "translateX(0px)";
    if (buttonStates.KeyD) {
      translateX = "translateX(300px)";
    } else if (buttonStates.KeyA) {
      translateX = "translateX(-300px)";
    }

    if (buttonStates.KeyS) {
      translateY = "translateY(300px)";
    } else if (buttonStates.KeyW) {
      translateY = "translateY(-300px)";
    }

    return {
      fill: "#3a3c3b",
      transform: `${translateX} ${translateY}`,
    };
  }

  function getRightStickStyles() {
    let translateX = "translateX(0px)";
    let translateY = "translateX(0px)";
    if (buttonStates.ArrowRight) {
      translateX = "translateX(300px)";
    } else if (buttonStates.ArrowLeft) {
      translateX = "translateX(-300px)";
    }

    if (buttonStates.ArrowDown) {
      translateY = "translateY(300px)";
    } else if (buttonStates.ArrowUp) {
      translateY = "translateY(-300px)";
    }

    return {
      fill: "#3a3c3b",
      transform: `${translateX} ${translateY}`,
    };
  }

  function getButtonFlashStyle(buttonState, currentColor) {
    return {
      fill: buttonState ? "#FFFFFF" : currentColor,
    };
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="2208.47px"
      version="1.1"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 25453 10856"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Capa_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <g id="_2497485212656">
          <path className="fil0 str0" d="M25453 2317c0,-1274 -1043,-2317 -2317,-2317l0 2317 2317 0z" />
          <path className="fil0 str0" d="M0 2317c0,-1274 1043,-2317 2317,-2317l0 2317 -2317 0z" />
          <path
            className="fil0 str0"
            d="M4020 77l17732 0c0,209 154,385 355,418l0 10361 -18511 0 0 -10356c233,0 424,-190 424,-423z"
          />
          <path
            style={{ fill: "#000000" }}
            className="fil1 str0"
            d="M4398 421l17055 0c124,0 225,101 225,225l0 9498c0,124 -101,225 -225,225l-1057 0 0 -96c0,-59 -48,-106 -106,-106l-648 0c-58,0 -106,47 -106,106l0 96 -9484 0 0 -243c0,-80 -84,-146 -189,-146 -104,0 -188,66 -188,146l0 243 -3360 0 0 -96c0,-59 -48,-106 -106,-106l-648 0c-59,0 -106,47 -106,106l0 96 -1057 0c-124,0 -225,-101 -225,-225l0 -9498c0,-124 101,-225 225,-225z"
          />
          <rect className="fil2 str0" x={5485} y={1204} width={14732} height={8277.8} />
          <path
            style={{ fill: "#8fd4e3" }}
            className="fil3 str0"
            d="M22107 77l997 0c1257,0 2286,1029 2286,2286l0 6207c0,1257 -1029,2286 -2286,2286l-997 0 0 -10779z"
          />
          <path
            style={{ fill: "#99dab0" }}
            className="fil3 str0"
            d="M2354 77l1228 0 0 10779 -1228 0c-1257,0 -2286,-1029 -2286,-2286l0 -6207c0,-1257 1029,-2286 2286,-2286z"
          />
          <rect className="fil4 str0" x={2735} y={949} width={566} height={201} />
          <circle style={{ fill: "#4f5153" }} className="fil5 str1" cx={1846} cy={2669} r={841} />
          <circle style={getLeftStickStyles()} className="analog-stick fil6 str1" cx={1846} cy={2669} r={674} />
          <circle style={{ fill: "#8c9294" }} className="fil7 str0" cx={23061} cy={7897} r={421} />
          <circle style={{ fill: "#3a3c3b" }} className="fil8 str0" cx={1915} cy={4859} r={392} />
          <circle style={{ fill: "#3a3c3b" }} className="fil8 str0" cx={2793} cy={5669} r={392} />
          <circle style={{ fill: "#3a3c3b" }} className="fil8 str0" cx={1920} cy={6489} r={392} />
          <circle style={{ fill: "#3a3c3b" }} className="fil8 str0" cx={1084} cy={5674} r={392} />
          <polygon className="fil9 str0" points="1915,4693 1987,4818 2059,4943 1915,4943 1770,4943 1842,4818 " />
          <polygon className="fil9 str0" points="2960,5669 2835,5741 2710,5813 2710,5669 2710,5525 2835,5597 " />
          <polygon className="fil9 str0" points="917,5674 1042,5602 1167,5530 1167,5674 1167,5819 1042,5746 " />
          <polygon className="fil9 str0" points="1920,6656 1848,6531 1776,6406 1920,6406 2064,6406 1992,6531 " />
          <rect
            style={{ fill: "#434a4a" }}
            className="fil8 str0"
            x={2184}
            y={7375}
            width={667}
            height={667}
            rx={53}
            ry={53}
          />
          <circle style={{ fill: "#303435" }} className="fil10 str2" cx={2517} cy={7709} r={217} />
          <circle style={{ fill: "#3d4142" }} className="fil8" cx={23061} cy={7897} r={328} />
          <polygon
            className="fil4 str0"
            points="22953,949 22771,949 22771,766 22570,766 22570,949 22387,949 22387,1150 22570,1150 22570,1332 22771,1332 22771,1150 22953,1150 "
          />
          <circle
            style={getButtonFlashStyle(buttonStates.KeyO, "#5774b8")}
            className="transitionFill fil8 str0"
            cx={23673}
            cy={2074}
            r={392}
          />
          <circle
            style={getButtonFlashStyle(buttonStates.KeyP, "#ec5c5c")}
            className="transitionFill fil8 str0"
            cx={24552}
            cy={2884}
            r={392}
          />
          <circle
            style={getButtonFlashStyle(buttonStates.KeyL, "#e8d651")}
            className="transitionFill fil8 str0"
            cx={23678}
            cy={3704}
            r={392}
          />
          <circle
            style={getButtonFlashStyle(buttonStates.KeyK, "#5eb08a")}
            className="transitionFill fil8 str0"
            cx={22842}
            cy={2889}
            r={392}
          />
          <circle style={{ fill: "#4f5153" }} className="fil11 str1" cx={23720} cy={5873} r={841} />
          <circle style={getRightStickStyles()} className="analog-stick fil12 str1" cx={23720} cy={5873} r={674} />
          <polygon
            className="fil13"
            points="22861,3019 22824,3019 22824,2907 22727,2759 22771,2759 22843,2877 22916,2759 22958,2759 22861,2907 "
          />
          <polygon
            className="fil13"
            points="23673,2041 23735,1945 23778,1945 23695,2068 23789,2204 23743,2204 23672,2095 23602,2204 23557,2204 23650,2067 23566,1945 23611,1945 "
          />
          <path
            className="fil13"
            d="M24502 2918l97 0 -48 -121 -49 121zm-38 95l-41 0 113 -258 32 0 112 258 -41 0 -27 -63 -122 0 -26 63z"
          />
          <path
            className="fil13"
            d="M23655 3823l45 0c31,0 64,-9 64,-45 0,-30 -21,-43 -61,-43l-48 0 0 88zm0 -119l47 0c28,0 51,-12 51,-40 0,-28 -22,-39 -57,-39l-41 0 0 79zm-36 -109l89 0c39,0 81,16 81,65 0,29 -18,49 -45,57l0 1c33,4 57,26 57,62 0,50 -43,74 -97,74l-85 0 0 -259z"
          />
          <path
            style={{ fill: "#090b0c" }}
            className="fil14"
            d="M23123 7995c0,9 -4,13 -12,13l-100 0c-9,0 -13,-4 -13,-13l0 -75c0,-9 4,-12 13,-12l100 0c8,0 12,3 12,12l0 75zm132 -122c-62,-53 -124,-106 -186,-158 -6,-6 -11,-6 -16,0 -63,52 -125,105 -187,158 -11,10 -7,22 8,22l24 0c9,0 13,4 13,13l0 162c0,9 3,13 12,13l275 0c9,0 13,-4 13,-13l0 -162c0,-9 3,-13 12,-13l24 0c15,0 20,-12 8,-22z"
          />
        </g>
      </g>
    </svg>
  );
}
