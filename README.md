# react-pretty-loading
用于在react中显示加载动画

### 在线预览组件

[在线预览](https://52kpm06q2k.codesandbox.io/)

### 动画来源

感谢作者`yangshun`收集的[awesome-spinners](https://github.com/yangshun/awesome-spinners)收集的动画

### 使用指南

在导入组件时只需要导入需要的组件，这样在打包时可以缩小代码体积
```
npm install --save react-pretty-loading
```

```
import React from "react";
import { render } from "react-dom";
import { BallClipRotateMultiple } from "react-pretty-loading";

class App extends React.Component {
  state = {
    loading: false
  };
  render() {
    const { loading } = this.state;
    return (
      <div className="container">
        <h1>react-pretty-loading</h1>
        <BallClipRotateMultiple loading={loading} center />
      </div>
    );
  }
}
```

### 组件选项

#### 通用属性

参数 | 说明 | 类型 | 默认值
---------- | ----------- | ----------- | -----------
loading | 是否显示动画 | Boolean | false
center | 动画是否居中 | Boolean | false
color | 动画颜色 | String | #fff
width | 动画大小 | Number | 详情查看各个组件默认值

#### 组件列表

* Ball8Bits
* Ball8bits
* BallClipRotate
* BallClipRotateMultiple
* BallClipRotatePulse
* BallAtom
* BallBeat
* BallCircus
* BallClimbingDot
* BallElasticDots
* BallFall
* BallFussion
* BallGridBeat
* BallGridPulse
* BallNewtonCradle
* BallPulse
* BallPulseRise
* BallPulseSync
* BallRotate
* BallRunningDots
* BallScale
* BallScaleMultiple
* BallScalePulse
* BallScaleRipple
* BallScaleRippleMultiple
* BallSpin
* BallSpinClockWise

