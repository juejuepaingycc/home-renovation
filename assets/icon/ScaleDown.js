import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function ScaleDown() {
  return (
    <Svg 
      viewBox="0 0 24 24" 
      width={hp(2)} 
      height={hp(2)} >
      <Path
        d="M3.996 13H20a1 1 0 0 0 0-2H3.996a1 1 0 0 0 0 2Z"
        fill="#fff"
        fillRule="nonzero"
      />
    </Svg>
  );
}

export default ScaleDown;
