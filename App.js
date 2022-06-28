import React, {useState, useEffect} from 'react';
import { BackHandler, LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {AuthContext} from '@context/Context';
import { MODE_SELECTING_AREA } from './constants';
import Content from './src/main/Content';

const App = () => {

  const [selectAllStatus, setSelectAllStatus] = useState('') // to toggle "SELECT ALL AREA" button
  const [selectedCount, setSelectedCount] = useState(0)      // Select Area count
  const [mode, setMode] = useState(MODE_SELECTING_AREA)      // ongoing process at the moment
  const [selectedDoor, setSelectedDoor] = useState(0)        // Any door selected or not
  const [lrLaying, setLrLaying] = useState(null)             // change Living Room laying
  const [holdingFurniture, setHoldingFurniture] = useState([]) // furniture that is selected from Catalog and currently holding before placing on Area
  const [dropCoords, setDropCoords] = useState({x: 0, y: 0})  // Position tapped on Living Room Area that will be used to place furniture item on the area

  const context = {
    selectAllStatus,
    selectedCount,
    mode,
    lrLaying,
    selectedDoor,
    holdingFurniture,
    dropCoords,
    changeSelectAllStatus: val => {
      setSelectAllStatus(val);
    },
    changeCount: val => {
      setSelectedCount(val)
    },
    changeMode: val => {
      setMode(val)
    },
    changeSelectedDoor: val => {
      setSelectedDoor(val)
    },
    changeLrLaying: val => {
      setLrLaying(val)
    },
    changeHoldingFurniture: val => {
      setHoldingFurniture(val)
    },
    changeDropCoords: val => {
      setDropCoords(val)
    }
  }

  useEffect(() => {
    LogBox.ignoreAllLogs();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  return (
    <AuthContext.Provider value={context}>
      <GestureHandlerRootView>
        <Content />
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}

export default App;
