# 🚀 Bottom Panel React Component

A fully customizable React bottom panel component that allows you to create dynamic and interactive panels for your web applications.

Check out the [Example](https://bottom-panel-react.vercel.app/) to see it in action.

## Getting Started 😁

### Installation

Install the package locally using npm:

```bash
npm install bottom-panel-react
```

- Usage
```javascript
import BottomPanel from "bottom-panel-react";

const YourComponent = () => {
  return (
    <div className={style.container}>
      <BottomPanel
        panelState={"bottom"} // Set Initial State of Panel from ["top", "bottom", "middle"]
        getPanelState={(value) => { }} // Get the Current State of Panel
      >
        {/* 
          Your Components that you want to render inside Bottom Panel
         */}
      </BottomPanel>
    </div>
  );
};

export default YourComponent;
```
## Customizing Bottom Panel Component 💥
You can customize the Bottom Panel component by passing various props:

### BottomPanel Props 

| Prop Name          | Default Value         | Type                  | Description                                   |
|------------------- |----------------------- |----------------------- |-----------------------------------------------|
| `panelClass`       | "" (empty string)     | string                | CSS class for custom styling of the panel's body.    |
| `panelBodyCSS`     | {} (empty object)     | object                | Custom CSS styles for the panel body.         |
| `panelDragIcon`    | null                  | element               | Icon element for dragging the panel.          |
| `topHeight`        | null                  | number                | Height of the panel when in the "top" state.  |
| `bottomHeight`     | null                  | number                | Height of the panel when in the "bottom" state. |
| `middleHeight`     | null                  | number                | Height of the panel when in the "middle" state. |
| `isVisible`        | true                  | bool                  | Controls the visibility of the panel.         |
| `isKeysFunctional` | true                  | bool                  | Enables key functionality for the panel(Use of Arrow Keys Up and Down).      |
| `isNavigationButtons` | true               | bool                  | Enables navigation buttons for the panel.     |
| `isMiddleFunctional` | true                | bool                  | Enables functionality for the "middle" state. |
| `throttleTime`     | 5                     | number                | Throttle time for certain panel actions(Delay between the consecutive renders, Effects smoothness of the panel).      |
| `panelState`       | "bottom"              | string (enum: "bottom", "top", "middle") | The current state of the panel.   |
| `getPanelState`    | () => {}               | func                  | A function to get the current panel state.    |

Code example of BottomPanel Component: [Example](https://github.com/AkshitGuptaIITR/Bottom-Panel-React/blob/main/src/Components/LandingPage/LandingPage.jsx)

## Issues & Bugs 😵‍💫

- Having trouble using component? Raise an issue [here](https://github.com/AkshitGuptaIITR/Bottom-Panel-React/issues)
- Need Help using the component? Feel free to [drop an email](mailto:gakshit92@gmail.com).
