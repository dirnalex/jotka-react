export function segmentsCartesianToPointsRadial(curves) {
  return curves.reduce((points, {dx1, dy1, dx2, dy2, dx, dy}, i) => {
    if (i === 0) {
      points.push({
        a: Math.atan2(dy1, dx1),
        r2: Math.sqrt(Math.pow(dx1, 2) + Math.pow(dy1, 2))
      })
    } else {
      points[i].r2 = Math.sqrt(Math.pow(dx1, 2) + Math.pow(dy1, 2));
    }
    return points.concat({
      a: Math.atan2(dy2 - dy, dx2 - dx) + Math.PI,
      r1: Math.sqrt(Math.pow(dx2 - dx, 2) + Math.pow(dy2 - dy, 2)),
      dx, dy
    });
  }, []);
}

export function curvesCartesianToDString(curves) {
  return curves.reduce((curveString, {dx1, dy1, dx2, dy2, dx, dy},) => {
    return curveString + `c ${dx1},${dy1} ${dx2},${dy2} ${dx},${dy} `
  }, '');
}

export function pointsRadialToSegmentsCartesian(points) {
  return points.reduce((curves, {a, r1, r2, dx, dy}, i, points) => {
    if (i > 0) {
      curves[i - 1].dx2 = Math.round(r1 * Math.cos(a + Math.PI) + dx);
      curves[i - 1].dy2 = Math.round(r1 * Math.sin(a + Math.PI) + dy);
      curves[i - 1].dx = dx;
      curves[i - 1].dy = dy;
    }
    if (i < points.length - 1) {
      curves.push({
        dx1: Math.round(r2 * Math.cos(a)),
        dy1: Math.round(r2 * Math.sin(a))
      });
    }
    return [...curves];
  }, []);
}

export function modifyCurve(initialSegments, {x: modX = 0, y: modY = 0}) {

  const points = segmentsCartesianToPointsRadial(initialSegments);
  const modifiedPoints = points.map(({a, r1, r2, dx, dy}, i) => {
    return {
      a: a + a * ((i % 2 === 0) ? modX : modY) * 0.3,
      r1: r1 + r1 * modY * 0.5,
      r2: r2 + r2 * modX * 0.5,
      dx,
      dy
    };
  });

  return pointsRadialToSegmentsCartesian(modifiedPoints);
}