import React, { useState, useEffect, useContext, createRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StatusBar,
  Linking,
  DeviceEventEmitter
} from 'react-native';
import PanPinchView from "react-native-pan-pinch-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Components
import Grid from '../components/grid/Grid'
import CatalogModal from '../components/catalog/catalogModal/CatalogModal';
import RewardModal from '../components/modal/RewardModal';
import Floorplan from '../components/floorplan/Floorplan';
import ConfirmModal from '../components/modal/ConfirmModal';
import styles from './Style';
import {AuthContext} from '@context/Context';
import { 
  MODE_HACKING_DOOR, 
  MODE_DROPPING_ITEM, 
  MODE_FINISHING_FLOOR,
  MODE_SELECTING_AREA, 
  MODE_TRANSFORMING_ITEM,
  HACKING_OPTIONS,
  FLOOR_FINISHES_OPTIONS
} from '../../constants';

// Icons
import Rotate from '@assets/icon/Rotate';
import ScaleUp from '@assets/icon/ScaleUp';
import ScaleDown from '@assets/icon/ScaleDown';

export default function Content () {

  const [selectAll, setSelectAll] = useState(false)
  const [title, setTitle] = useState('Area to Renovate')
  const [description, setDescription] = useState('Please indicate the area that you want to renovate')
  const [hackingOptions, setHackingOptions] = useState(HACKING_OPTIONS)
  const [floorOptions, setFloorOptions] = useState(FLOOR_FINISHES_OPTIONS)
  const [selectedLaying, setSelectedLaying] = useState(floorOptions[0])
  const [showHackingModal, setShowHackingModal] = useState(false)
  const [showFloorModal, setShowFloorModal] = useState(false)
  const [showCatalog, setShowCatalog] = useState(false)
  const [reward, setReward] = useState(false)

  const {
    changeSelectAllStatus, 
    changeLrLaying,
    selectedDoor, 
    mode, 
    changeMode, 
    changeCount, 
    selectedCount
  } = useContext(AuthContext);


  useEffect(() => {
    if(mode == MODE_DROPPING_ITEM) {
      setTitle('Furniture')
      setDescription('You can drag, rotate and resize furniture')
    }
  }, [mode])

  useEffect(() => {
    if(selectedCount == 0) {
      setSelectAll(false)
    }
    else if(selectedCount == 4) {
      setSelectAll(true)
    }
  }, [selectedCount])

  const CONTAINER = {
    width: wp(95),
    height: hp(55)
  }
      
  const CONTENT = {
    width: wp(100),
    height: hp(100)
  }

  const selectAllArea = () => {
    setSelectAll(true)
    changeSelectAllStatus('select')
    changeCount(4)
  }

  const unselectAllArea = () => {
    setSelectAll(false)
    changeSelectAllStatus('unselect')
    changeCount(0)
  }

  const confirmSelectingArea = () => {
    unselectAllArea()
    setShowHackingModal(true)
  }

  const chooseHackingOption = (item) => {
    let temp = hackingOptions.map((option) => {
      if(option.name == item.name) {
        option.selected = true
      }
      else option.selected = false
      return option
    })
    setHackingOptions(temp)
  }

  const hackDoor = () => {
    if(hackingOptions[0].selected) { // 'Yes' option
      setShowHackingModal(false)
      setTitle('Hacking')
      setDescription('Select a door you wish to remove');
      changeMode(MODE_HACKING_DOOR) // MODE_HACKING_DOOR => detect gestures only on Doors
    }
    else { // 'No' => show catalog to add furniture
      setShowHackingModal(false)
      setShowFloorModal(true)
    }
  }

  const nextHandler = () => {
    if(mode == MODE_HACKING_DOOR) { // Done hacking door and show catalog to add furniture
      setShowFloorModal(true)
    }
    else { // Done finishing floor
      setShowCatalog(true)
    }
  }

  const chooseFloorOption = (item) => {
    let temp = floorOptions.map((option) => {
      if(option.name == item.name) {
        option.selected = true
        setSelectedLaying(option)
      }
      else option.selected = false
      return option
    })
    setFloorOptions(temp)
  }

  const finishFloor = () => {
    setShowFloorModal(false)
    changeLrLaying(selectedLaying)
    setTitle('Floor Finishes')
    setDescription(`Set ${selectedLaying.name} to Living Room`);
    changeMode(MODE_FINISHING_FLOOR)
  }

  const holdItem = (item) => {
    setShowCatalog(false)
    setTitle('Living Room')
    setDescription(`Please click on the area for placement of ${item.name}`)
  }

  const rotateHandler =() => {
    DeviceEventEmitter.emit('rotate.sofa', 'true');
  }

  const scaleUpHandler =() => {
    DeviceEventEmitter.emit('scale.up', 'true');
  }

  const scaleDownHandler =() => {
    DeviceEventEmitter.emit('scale.down', 'true');
  }

  const chooseFloorHandler = () => {
    setShowFloorModal(true)
  }

  const doneHandler = () => {
    setReward(true)
  }

  const claimHandler = () => {
    setReward(false)
    let url = 'https://www.homeez.com/home'
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } 
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />

      {showHackingModal && (
        <ConfirmModal
          title='Hacking'
          description='Are there any door(s) to be removed? Please indicate on the Floor Plan'
          options={hackingOptions}
          closeModal={()=> setShowHackingModal(false)}
          nextHandler={hackDoor}
          chooseOption={chooseHackingOption}
          />
      )}

      {showFloorModal && (
        <ConfirmModal
          title='Floor Finishes'
          description='Select the floor finishes for the area for Living Room'
          options={floorOptions}
          closeModal={()=> setShowFloorModal(false)}
          nextHandler={finishFloor}
          chooseOption={chooseFloorOption}
          />
      )}

      {showCatalog && (
        <CatalogModal
          closeModal={()=> setShowCatalog(false)}
          holdItem={holdItem}
          />
      )}

      {reward && (
        <RewardModal
          closeModal={()=> setReward(false)}
          claimHandler={claimHandler}
          />
      )}

      <View style={styles.descContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>
          {description}
        </Text>
      </View>

      <View style={styles.mainContent}>
        <PanPinchView
          minScale={0.8}
          initialScale={1}
          containerDimensions={{
            width: CONTAINER.width,
            height: CONTAINER.height,
          }}
          contentDimensions={{ 
            width: CONTENT.width, 
            height: CONTENT.height
          }} >
          <Grid />
          <Floorplan /> 
        </PanPinchView>
      </View>

      {mode == MODE_FINISHING_FLOOR && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.chooseBtn}
          onPress={chooseFloorHandler}>
          <Text style={styles.confirm}>Choose Floor</Text>
        </TouchableOpacity>
      )}

     {mode == MODE_SELECTING_AREA ?
        <View style={styles.footer}>
          {selectAll ?
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.selectBtn}
              onPress={unselectAllArea}>
              <Text style={styles.selectAll}>
                UNSELECT ALL AREA
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.selectBtn}
              onPress={selectAllArea}>
                <Text style={styles.selectAll}>
                  SELECT ALL AREA
                </Text>
            </TouchableOpacity>
          }
          <View style={styles.areaRow}>
            <Text style={styles.selected}>Selected Area: </Text>
            <Text style={styles.selected}>{selectedCount}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.confirmBtn}
            onPress={confirmSelectingArea}>
              <Text style={styles.confirm}>Confirm</Text>
          </TouchableOpacity>
        </View>
        : mode == MODE_HACKING_DOOR || mode == MODE_FINISHING_FLOOR ?
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.confirmBtn, 
              {
                backgroundColor: 
                (mode == MODE_HACKING_DOOR && selectedDoor == 0 )
                ? 'rgba(238, 49, 38, 0.3)' : 'rgb(238, 49, 38)'
              }]}
            onPress={nextHandler}
            disabled={mode == MODE_HACKING_DOOR && selectedDoor == 0}>
            <Text style={styles.confirm}>Next</Text>
          </TouchableOpacity>
        </View>
        : mode == MODE_TRANSFORMING_ITEM ?
          <View style={styles.footer}>
            <View style={styles.row}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.rotateBtn}
                onPress={rotateHandler}>
                  <Rotate />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.rotateBtn}
                onPress={scaleUpHandler}>
                  <ScaleUp />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.rotateBtn}
                onPress={scaleDownHandler}>
                  <ScaleDown />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.confirmBtn}
              onPress={doneHandler}>
                <Text style={styles.confirm}>Done</Text>
            </TouchableOpacity>
          </View>
        : null }
      </View>
    )
  }