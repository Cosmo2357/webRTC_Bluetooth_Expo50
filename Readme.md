
# Expo QR boilerplate

QR code reader boilerplate with Expo.  

### 💻 作成者側環境  
m1 mac
node v20.10.0  
ruby v3.3.0 
CocoaPods 1.15.2
xcode v15.2  
rbenv 1.2.0
gem 3.5.3

m1 macの場合はrbenvでrubyをインストールしてgemを使ってcocoapodsをインストールするのがおすすめ。

### 起動方法
```bash
$ npm install
$ npx expo run:ios --device

npx expo prebuild
```

npm install event-target-shim@latest --save


### Icon library
https://oblador.github.io/react-native-vector-icons/

### State manager
zustand


### other commands
バージョンアップに伴い、コマンドが複数存在するが、基本的には開発は上記のコマンドで問題ないはず。

```bash
how to solve typical problems 
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install node modules
npm install

# Navigate to ios directory
cd ios

# Remove Pods and Podfile.lock
rm -rf Pods Podfile.lock

# Install Pods
pod install

# Navigate back to the root directory
cd ..
```


```bash
npm run android
npm run ios
//$ npm run web
npx expo start
npx expo start --android,
npx expo start --ios,
npx expo start --web
npx expo run:android
npx expo run:ios
npx expo run:ios --device
eas build --platform ios --local

# キャッシュをクリアして起動
npx expo start -c

npx expo prebuild 


rm -rf ~/Library/Caches/CocoaPods/ ; rm -rf Pods ; pod install