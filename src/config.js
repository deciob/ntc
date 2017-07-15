// @flow

export type BaseConfig = {
  height: number,
  margin: {
    top: number,
    right: number,
    bottom: number,
    left: number,
  },
  transitionDuration: number,
  transitionStepSeed: number,
  width: number,
  xAccessor: ({[string]: number | string}) => number | string,
  xAxis: void | (any) => any,
  xAxisShow: boolean,
  xDomain: void | [number, number],
  yAccessor: ({[string]: number | string}) => number | string,
  yAxis: void | (any) => any,
  yAxisShow: boolean,
  yDomain: void | [number, number],
};

export const baseConfig: BaseConfig = {
  height: 100,
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  transitionDuration: 600,
  transitionStepSeed: 40,
  width: 100,
  xAccessor: d => d.x,
  xAxis: undefined,
  xAxisShow: true,
  xDomain: undefined,
  yAccessor: d => d.y,
  yAxis: undefined,
  yAxisShow: true,
  yDomain: undefined,
};


export type BarConfig = {
  horizontal: boolean,
  quantitativeScaleType: string,
};

export const barConfig: BarConfig = {
  horizontal: false,
  quantitativeScaleType: 'linear',
};
