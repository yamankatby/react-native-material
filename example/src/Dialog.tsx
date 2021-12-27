import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
  Text,
  TextInput,
  VStack,
} from "@react-native-material/core";

const DialogScreen = () => {
  const [simpleDialogVisible, setSimpleDialogVisible] = useState(false);
  const [formDialogVisible, setFormDialogVisible] = useState(false);

  return (
    <>
      <VStack style={{ margin: 16 }} items="start" spacing={2}>
        <Button title="Open Simple Dialog" onPress={() => setSimpleDialogVisible(true)} />
        <Button title="Open Form Dialog" onPress={() => setFormDialogVisible(true)} />
      </VStack>

      <Dialog visible={simpleDialogVisible} onDismiss={() => setSimpleDialogVisible(false)}>
        <DialogHeader title="Dialog Header" />
        <DialogContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus excepturi exercitationem id illo in
            incidunt necessitatibus officiis rem?
          </Text>
        </DialogContent>
        <DialogActions>
          <Button title="Cancel" compact variant="text" onPress={() => setSimpleDialogVisible(false)} />
          <Button title="Ok" compact variant="text" onPress={() => setSimpleDialogVisible(false)} />
        </DialogActions>
      </Dialog>

      <Dialog visible={formDialogVisible} onDismiss={() => setFormDialogVisible(false)}>
        <DialogHeader title="Form Dialog" />
        <DialogContent>
          <VStack>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
            <TextInput label="Email" variant="standard" />
          </VStack>
        </DialogContent>
        <DialogActions>
          <Button title="Cancel" compact variant="text" onPress={() => setFormDialogVisible(false)} />
          <Button title="Ok" compact variant="text" onPress={() => setFormDialogVisible(false)} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogScreen;

