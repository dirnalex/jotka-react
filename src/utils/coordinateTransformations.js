//TODO: rename file

export function getModificatorFromMouseAndElementPositions({pageX: mouseX, pageY: mouseY}, {centerPageX: elCenterX, centerPageY: elCenterY, width: elWidth, height: elHeight}) {
  if (mouseX === undefined || mouseY === undefined || elCenterX === undefined || elCenterY === undefined) return {};
  return {
    x: (mouseX - elCenterX) / elWidth,
    y: (mouseY - elCenterY) / elHeight
  };
}

export function getElementPosition({current: element}) {
  if (!element) return {};
  const boundingRect = element.getBoundingClientRect();
  return {
    centerPageX: window.scrollX + boundingRect.x + boundingRect.width / 2,
    centerPageY: window.scrollY + boundingRect.y + boundingRect.height / 2,
    width: boundingRect.width,
    height: boundingRect.height
  };
}