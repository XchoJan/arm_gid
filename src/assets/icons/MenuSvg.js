import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const MenuSvg = (props) => {
  return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill={'#fff'}
        {...props}
      >
        <Path d="M5.333 22.667h21.333V20H5.333v2.667zm0-5.334h21.333v-2.667H5.333v2.667zm0-8V12h21.333V9.333H5.333z" />
      </Svg>
  );
};

export default MenuSvg;
