import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

const Loader = ({ isLoading = false }) => {
    if (isLoading) {
        return (
            <Modal transparent visible={isLoading} >
                <View style={{ ...commonStyles.loader, backgroundColor: "rgba(0,0,0,0.3)" }}>
                    <ActivityIndicator color={colors.themeMain} />
                </View>
            </Modal>
        );
    }
    return null;
};

export default Loader;
