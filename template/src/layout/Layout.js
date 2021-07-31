import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Layout = ({
  children, style, bottomSafeArea, topSafeArea,
}) => {
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      ...(bottomSafeArea && { paddingBottom: insets.bottom }),
      ...(topSafeArea && { paddingTop: insets.top })
    },
    viewContainer: {
      flex: 1
    },
  });

  return (
    <View style={[styles.container, style]}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.viewContainer}>
        {children}
      </View>
    </View>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  bottomSafeArea: PropTypes.bool,
  topSafeArea: PropTypes.bool,

};

Layout.defaultProps = {
  style: {},
  bottomSafeArea: false,
  topSafeArea: false,
};

export default Layout;
