"use strict";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "@babel/polyfill";
import powerbi from "powerbi-visuals-api";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import ReactCard from "./component";
import "./../style/visual.less";

export class Visual implements IVisual {
  private target: HTMLElement;
  private reactRoot: React.ComponentElement<any, any>;

  constructor(options: VisualConstructorOptions) {
    this.reactRoot = React.createElement(ReactCard, {});
    this.target = options.element;

    ReactDOM.render(this.reactRoot, this.target);
  }

  public update(options: VisualUpdateOptions) {}
}
