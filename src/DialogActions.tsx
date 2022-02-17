import React from 'react';
import { StyleSheet } from 'react-native';
import { HStack } from 'react-native-flex-layout';

export interface DialogActionsProps {}

const DialogActions: React.FC<DialogActionsProps> = ({ children }) => {
  return (
    <HStack justify="end" spacing={2} style={[styles.container]}>
      {children}
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
});

export default DialogActions;
