
# Expo v50でのWebRTCとBluetoothの実装

Expo v50でのWebRTCとBluetoothの実装  
特にWebRTCは2014.2.18現在ではエラーが出るので、その対応を参考として共有します。

```bash
npx expo install react-native-ble-plx
npx expo install @config-plugins/react-native-webrtc 
npx expo install react-native-webrtc
```
react-native-webrtcは2014.2.18現在ではサポートされていないため、event-target-shimを最新版に上書きする必要がある。
```bash
npx expo install  event-target-shim@latest
```

おそらく、これだけではエラーになるので以下のコマンドでプロジェクトをクリーンアップしてみてください。
```bash
rm -rf node_modules package-lock.json
npm install
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
npx expo prebuild
npx expo run:ios --device
```


### 💻 作成者側環境  
m1 mac
node v20.10.0  
ruby v3.3.0 
CocoaPods 1.15.2
xcode v15.2  
rbenv 1.2.0
gem 3.5.3


