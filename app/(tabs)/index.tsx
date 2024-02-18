import { StyleSheet, NativeEventEmitter, NativeModules, } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { BleManager } from 'react-native-ble-plx';
import { RTCView, mediaDevices } from 'react-native-webrtc';

export default function TabOneScreen() {
  const manager = new BleManager();


  useEffect(() => {
    // BLEデバイスのスキャンを開始
    const scanAndConnect = () => {
      manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          // スキャン中にエラーが発生した場合の処理
          console.log(error);
          return;
        }
        console.log(device?.name);
        // 特定のデバイスを見つけた場合（例: デバイス名でフィルタリング）
        if (device?.name === 'mac') {
          // スキャンを停止
          manager.stopDeviceScan();

          // デバイスに接続
          device.connect()
            .then((device) => {
              return device.discoverAllServicesAndCharacteristics();
            })
            .then((device) => {
              console.log(device.id);
              // ここでデータの読み書きなど、必要な操作を行います
              // 例: 特定のサービスの特定のキャラクタリスティックからデータを読み取る
            })
            .catch((error) => {
              // 接続やデータ交換中のエラー処理
              console.log(error);
            });
        }
      });
    };

    scanAndConnect();

    return () => manager.destroy(); // コンポーネントのアンマウント時にリソースを解放
  }, []);
  const [stream, setStream] = useState<any>(null);

  const getVideoStream = async () => {
    try {
      const constraints = { audio: true, video: true };

      const newStream = await mediaDevices.getUserMedia(constraints);
      setStream(newStream);


    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    getVideoStream();
  }, [mediaDevices]);

  return (
    <View style={styles.container}>
      {stream && <RTCView streamURL={stream.toURL()} style={styles.video} />}
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
