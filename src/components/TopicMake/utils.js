/*
 * @Author: LancerSung
 * @LastEditors: LancerSung
 * @Date: 2019-03-26 15:13:23
 * @LastEditTime: 2019-03-28 11:24:37
 */

// 纸张大小和页边距(mm),默认竖向
const PAPER = {
    A5: [148, 210],
    A4: [210, 297],
    A3: [297, 420],
    A2: [420, 594],
    A1: [594, 841],
    A0: [841, 1189]
  },
  MARGIN = {
    common: {
      top: 25.4,
      right: 31.8,
      bottom: 25.4,
      left: 31.8
    },
    Narrow: {
      top: 12.7,
      right: 12.7,
      bottom: 12.7,
      left: 12.7
    },
    Moderate: {
      top: 25.4,
      right: 19.1,
      bottom: 25.4,
      left: 19.1
    },
    Wide: {
      top: 25.4,
      right: 50.8,
      bottom: 25.4,
      left: 50.8
    }
  };
/**
 * @description --确定需要打印的地图容器的尺寸
 * @param {*} paper --纸张规格
 * @param {*} direction  --横幅/竖幅
 * @param {*} margin  -- 外边距
 * @param {*} dpi -- dpi
 */
export const getTemplateInnerSize = (paper, direction, dpi = 96) => {
  const innerSize = _calcInner(paper, direction);
  return {
    width: ((innerSize[0] / 25.4) * dpi).toFixed(2),
    height: ((innerSize[1] / 25.4) * dpi).toFixed(2)
  };
};

/**
 * @description --确定预览地图容器的尺寸
 * @param {*} paper
 * @param {*} direction
 * @param {*} width
 * @param {*} height
 * @param {*} dpi
 */
export const getPrevMapSize = (paper, direction, width, height, dpi = 96) => {
  const innerSize = _calcInner(paper, direction);
  const calcSize = {
    width: ((innerSize[0] / 25.4) * dpi).toFixed(2),
    height: ((innerSize[1] / 25.4) * dpi).toFixed(2)
  };
  const resSize = {
    width: calcSize.width,
    height: calcSize.height,
    scale: 1
  };
  const wScale = calcSize.width / (width - 20);
  const hScale = calcSize.height / (height - 20);

  const scale = Math.max(wScale, hScale);
  if (scale > 1) {
    resSize.width = (calcSize.width / scale).toFixed(2);
    resSize.height = (calcSize.height / scale).toFixed(2);
    resSize.scale = scale;
  }

  return resSize;
};

export const getLegendScale = (parentHeight, legendCount) => {
  let temScale = 1;
  if (legendCount * 15 > parentHeight && legendCount * 15 < 2 * parentHeight) {
    temScale = 0.5;
  } else if (legendCount * 15 > 2 * parentHeight) {
    temScale = parentHeight / (legendCount * 15);
  } else if (legendCount * 15 < parentHeight / 2) {
    temScale = 1;
  }
  return temScale;
};

export const dataURItoBlob = dataURI => {
  let byteString = atob(dataURI.split(",")[1]);
  let mimeString = dataURI
    .split(",")[0]
    .split(":")[1]
    .split(";")[0];
  let ab = new ArrayBuffer(byteString.length);
  let dw = new DataView(ab);
  for (let i = 0; i < byteString.length; i++) {
    dw.setUint8(i, byteString.charCodeAt(i));
  }
  return new Blob([ab], {
    type: mimeString
  });
};
const _calcInner = (paper, direction) => {
  let paperSize = PAPER[paper],
    marginSize = MARGIN["common"],
    resSize = [];

  resSize.push(paperSize[0] - marginSize.top - marginSize.bottom);
  resSize.push(paperSize[1] - marginSize.right - marginSize.left);

  if (direction === "H") {
    resSize.reverse();
  }
  return resSize;
};
