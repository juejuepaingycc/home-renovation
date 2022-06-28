import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function ScaleUp() {
  return (
    <Svg 
      viewBox="0 0 42 42" 
      width={hp(2)} 
      height={hp(2)} >
      <Path 
        fill='#fff' 
        d="M42 19H23V0h-4v19H0v4h19v19h4V23h19z" />
    </Svg>
  );
}

export default ScaleUp;
