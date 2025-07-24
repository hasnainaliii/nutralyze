import { useState } from 'react';
import { View, Text } from 'react-native';
import { CameraPermissionStatus } from 'react-native-vision-camera';

function CameraPermissons() {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');

  const [microPhonePermissionStatus, setMicroPhoneStatus] =
    useState<CameraPermissionStatus>('not-determined');

  return (
    <View>
      <Text>CameraPermissons</Text>
    </View>
  );
}

export default CameraPermissons;
