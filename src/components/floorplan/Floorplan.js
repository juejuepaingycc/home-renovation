import React from 'react';
import {
    View,
} from 'react-native';

// Components
import styles from './Style';

// Rooms
import Toilet from '../areas/rooms/Toilet'
import Bedroom from '../areas/rooms/Bedroom';
import Kitchen from '../areas/rooms/Kitchen';
import LivingRoom from '../areas/rooms/LivingRoom';

// Walls
import HardWall from '../lines/walls/hardWall/HardWall';
import Wall1 from '../lines/walls/wall/Wall1';
import Wall2 from '../lines/walls/wall/Wall2';
import Wall3 from '../lines/walls/wall/Wall3';
import Wall4 from '../lines/walls/wall/Wall4';

// Doors
import Door1 from '../lines/doors/Door1';
import Door2 from '../lines/doors/Door2';
import Door3 from '../lines/doors/Door3';

export default function Floorplan() {

    return (
        <View style={styles.floorplan}>
            
            <Bedroom  />
            <Toilet />
            <Kitchen />
            <LivingRoom />
         
            <View style={styles.wall}>
                <HardWall />
                <Wall1 />
                <Wall2 />
                <Wall3 />
                <Wall4 />
                <Door1 />
                <Door2 />
                <Door3 />
            </View>
        </View>
    )

}