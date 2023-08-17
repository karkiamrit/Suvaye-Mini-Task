import { useMemo } from "react";

const Button = ({
  rectangle10,
  prop,
  showDiv,
  buttonPosition,
  buttonWidth,
  buttonHeight,
  buttonTop,
  buttonLeft,
  buttonTransform,
  buttonTransformOrigin,
  rectangleIconHeight,
  rectangleIconWidth,
  rectangleIconTop,
  rectangleIconRight,
  rectangleIconBottom,
  rectangleIconLeft,
  divTop,
  divLeft,
  divFontWeight,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      position: buttonPosition,
      width: buttonWidth,
      height: buttonHeight,
      top: buttonTop,
      left: buttonLeft,
      transform: buttonTransform,
      transformOrigin: buttonTransformOrigin,
    };
  }, [
    buttonPosition,
    buttonWidth,
    buttonHeight,
    buttonTop,
    buttonLeft,
    buttonTransform,
    buttonTransformOrigin,
  ]);

  const rectangleIconStyle = useMemo(() => {
    return {
      height: rectangleIconHeight,
      width: rectangleIconWidth,
      top: rectangleIconTop,
      right: rectangleIconRight,
      bottom: rectangleIconBottom,
      left: rectangleIconLeft,
    };
  }, [
    rectangleIconHeight,
    rectangleIconWidth,
    rectangleIconTop,
    rectangleIconRight,
    rectangleIconBottom,
    rectangleIconLeft,
  ]);

  const div2Style = useMemo(() => {
    return {
      top: divTop,
      left: divLeft,
      fontWeight: divFontWeight,
    };
  }, [divTop, divLeft, divFontWeight]);

  return (
    <div
      className="relative w-[118px] h-[38px] text-center text-[16px] text-darkslategray-100 font-vazirmatn"
      style={buttonStyle}
    >
      <img
        className="absolute h-[110.53%] w-full top-[0%] right-[0%] bottom-[-10.53%] left-[0%] rounded-2xl max-w-full overflow-hidden max-h-full"
        alt=""
        src={rectangle10}
        style={rectangleIconStyle}
      />
      {showDiv && (
        <div className="absolute top-[18.42%] left-[16.1%]" style={div2Style}>
          {prop}
        </div>
      )}
      
    </div>
  );
};

export default Button;
