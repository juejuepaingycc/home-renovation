
import React from 'react';
import {
    View,
    Image,
    Modal,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from './Style';

export default function RewardModal({
    closeModal,
    claimHandler
  }) {

    return (
        <Modal
            transparent={true}
            visible={true}
            animationType="fade">
            <View style={styles.modalView}>
                <View style={styles.rewardModalBg}>
                    <Image
                        source={require('@assets/images/ezcash.png')}
                        style={styles.logo}  />
                    <Text style={styles.title2}>
                        You have received 300 ezcash
                    </Text>
                    <Text style={styles.description}>
                        You can use it to redeem rewards at our Shopez store
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.claimBtn}
                        onPress={claimHandler}>
                        <Text style={styles.confirm}>
                            CLAIM EZCASH
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
)}