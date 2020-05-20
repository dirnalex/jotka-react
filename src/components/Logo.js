import React, {useContext, useRef} from 'react';
import {curvesCartesianToDString, modifyCurve} from '../utils/svgCurveTransformations';
import {MousePositionContext} from '../App';
import {getElementPosition, getModificatorFromMouseAndElementPositions} from '../utils/coordinateTransformations';

//TODO: make calculations happen less time
//TODO: make input of path as string (or svg input?)
const Logo = ({className}) => {
  const mousePosition = useContext(MousePositionContext);
  const logoRef = useRef(null);
  return (
    <svg ref={logoRef} className={`logo ${className}`} viewBox="0 0 593 371">
      <path d={`
        M 0,0
        h 286
        v 371
        h -286
        v -136
        ${curvesCartesianToDString(modifyCurve([
        {dx1: 24, dy1: 31, dx2: 70, dy2: 52, dx: 123, dy: 52},
        {dx1: 78, dy1: 0, dx2: 142, dy2: -45, dx: 142, dy: -101},
        {dx1: 0, dy1: -56, dx2: -64, dy2: -101, dx: -142, dy: -101},
        {dx1: -53, dy1: 0, dx2: -99, dy2: 20, dx: -123, dy: 51}
      ], getModificatorFromMouseAndElementPositions(mousePosition, getElementPosition(logoRef))))}
        z
      `}/>
      <path d={`
        M 307,0
        h 286
        v 16
        ${curvesCartesianToDString(modifyCurve([
        {dx1: -129, dy1: 7, dx2: -234, dy2: 72, dx: -266, dy: 159},
        {dx1: 8, dy1: 0, dx2: 10, dy2: 0, dx: 33, dy: 0},
        {dx1: 116, dy1: 2, dx2: 202, dy2: 82, dx: 233, dy: 195}
      ], getModificatorFromMouseAndElementPositions(mousePosition, getElementPosition(logoRef))))}
        h -172
        ${curvesCartesianToDString(modifyCurve([
        {dx1: 0, dy1: 0, dx2: 0, dy2: -20, dx: 0, dy: -25},
        {dx1: 0, dy1: -82, dx2: -46, dy2: -148, dx: -104, dy: -150}
      ], getModificatorFromMouseAndElementPositions(mousePosition, getElementPosition(logoRef))))}
        h -10
        z
      `}/>
    </svg>
  );
};

Logo.propTypes = {};

export default Logo;