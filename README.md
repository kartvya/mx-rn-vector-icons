# mx-rn-vector-icons

Welcome to mx-react-native-icons, the ultimate icon library for React Native! Designed to provide developers with a rich set of vector icons, mx-react-native-icons ensures your app looks sleek, modern, and visually appealing. Whether you're building a new project or enhancing an existing one, our library offers a wide array of icons to suit every need.

## Table of Contents

- [Bundled Icon Sets](#bundled-icon-sets)
- [Installation](#installation)
  - [iOS Setup](#ios-setup)
  - [Android Setup](#android-setup)

## Sponsorship

Should you find this library beneficial, kindly contemplate the option of [sponsoring](https://github.com/sponsors/oblador). Our envisioned endeavors encompass the restructuring of the repository into a monorepo architecture. This transition will empower independent versioning of icon sets, enhance performance, reduce bundle size, and simplify community contributions. Your sponsorship plays a pivotal role in materializing these advancements.

## Bundled Icon Sets

[Explore all icons](https://oblador.github.io/react-native-vector-icons/).

- [`AntDesign`](https://ant.design/) from AntFinance (_298_ icons)
- [`Entypo`](http://entypo.com) by Daniel Bruce (v1.0.1 with _411_ icons)
- [`EvilIcons`](http://evil-icons.io) designed by Alexander Madyankin & Roman Shamin (v1.10.1 with _70_ icons)
- [`Feather`](http://feathericons.com) created by Cole Bemis & Contributors (v4.28.0 featuring _286_ icons)
- [`FontAwesome`](http://fortawesome.github.io/Font-Awesome/icons/) by Dave Gandy (v4.7.0 containing _675_ icons)
- [`FontAwesome 5`](https://fontawesome.com/v5/icons/) from Fonticons, Inc. (v5.15.3 offering _1598_ free and _7848_ pro icons)
- [`FontAwesome 6`](https://fontawesome.com) designed by Fonticons, Inc. (v6.1.2 featuring _2016_ free and _16150_ pro icons)
- [`Fontisto`](https://github.com/kenangundogan/fontisto) created by Kenan Gündoğan (v3.0.4 featuring _615_ icons)
- [`Foundation`](http://zurb.com/playground/foundation-icon-fonts-3) by ZURB, Inc. (v3.0 with _283_ icons)
- [`Ionicons`](https://ionicons.com/) crafted by Ionic (v7.1.0 containing _1338_ icons)
- [`MaterialIcons`](https://fonts.google.com/icons/) by Google, Inc. (v4.0.0 featuring _2189_ icons)
- [`MaterialCommunityIcons`](https://materialdesignicons.com/) from MaterialDesignIcons.com (v6.5.95 including _6596_ icons)
- [`Octicons`](http://octicons.github.com) designed by Github, Inc. (v16.3.1 with _250_ icons)
- [`Zocial`](http://zocial.smcllns.com/) by Sam Collins (v1.4.0 with _100_ icons)
- [`SimpleLineIcons`](https://simplelineicons.github.io/) crafted by Sabbir & Contributors (v2.5.5 with _189_ icons)

## Installation

1. Install the package via npm:
   ```sh
   npm install --save react-native-vector-icons
   ```
2. Depending on the platform you're targeting (iOS/Android/Windows), follow the appropriate setup instructions.
3. If you're planning to use FontAwesome 5 or 6 icons, refer to these guides: [FontAwesome 5](FONTAWESOME5.md) | [FontAwesome 6](FONTAWESOME6.md)

### iOS Setup

To use the bundled icons on iOS, follow these steps:

- Navigate to `node_modules/react-native-vector-icons` and drag the `Fonts` folder (or select specific fonts) into your Xcode project.

  - Make sure your app is checked under "Add to targets," and if adding the whole folder, check "Create groups."
  - Not familiar with Xcode? Check out this [article](https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06).

- Edit `Info.plist` and add a property called **Fonts provided by application** (or **UIAppFonts** if Xcode autocomplete is not working):

  - <details><summary>List of all available fonts to copy & paste in Info.plist</summary>

    ```xml
    <key>UIAppFonts</key>
    <array>
      <string>AntDesign.ttf</string>
      <string>Entypo.ttf</string>
      <string>EvilIcons.ttf</string>
      <string>Feather.ttf</string>
      <string>FontAwesome.ttf</string>
      <string>FontAwesome5_Brands.ttf</string>
      <string>FontAwesome5_Regular.ttf</string>
      <string>FontAwesome5_Solid.ttf</string>
      <string>FontAwesome6_Brands.ttf</string>
      <string>FontAwesome6_Regular.ttf</string>
      <string>FontAwesome6_Solid.ttf</string>
      <string>Foundation.ttf</string>
      <string>Ionicons.ttf</string>
      <string>MaterialIcons.ttf</string>
      <string>MaterialCommunityIcons.ttf</string>
      <string>SimpleLineIcons.ttf</string>
      <string>Octicons.ttf</string>
      <string>Zocial.ttf</string>
      <string>Fontisto.ttf</string>
    </array>
    ```

  </details>

  Above step might look something like this:

  ![XCode screenshot](https://cloud.githubusercontent.com/assets/378279/12421498/2db1f93a-be88-11e5-89c8-2e563ba6251a.png)

- In Xcode, select your project in the navigator, choose your app's target, go to the **Build Phases** tab, and under **Copy Bundle Resources**, add the copied fonts.

- When using auto linking, it will automatically add all fonts to the **Build Phases**, **Copy Pods Resources**. Which will end up in your bundle.
  To avoid that, create a `react-native.config.js` file at the root of your react-native project with:

  ```javascript
  module.exports = {
    dependencies: {
      'react-native-vector-icons': {
        platforms: {
          ios: null,
        },
      },
    },
  };
  ```

_Note: Recompile your project after adding new fonts._

_Note 2: If you're getting problems with `duplicate outputs file` for fonts on ios build, try running `cd ios && pod install` after the `react-native.config.js` configuration._

### Android Setup

#### Option: With Gradle (recommended)

To make font management smoother on Android, use this method:

- Edit `android/app/build.gradle` (NOT `android/build.gradle`) and add:

  ```gradle
  apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
  ```

  To customize the fonts being copied, use:

  ```gradle
  project.ext.vectoricons = [
      iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Specify font files
  ]

  apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

  ```

<details>
<summary>Monorepo configuration</summary>

<!-- ##### Monorepo configuration -->
<br>
If working in a monorepo, point to the correct paths of the `fonts.gradle` script and of the Font files, relative to the android/app/build.gradle file. Example structure:

```text
your-monorepo/
├─ node_modules/
│  ├─ react-native-vector-icons
├─ apps/
│  ├─ YourApp/
│  │  ├─ android/
│  │  │  ├─ app/
│  │  │  │  ├─ build.gradle
```

Update paths like:

```diff
project.ext.vectoricons = [
+ iconFontsDir: "../../../../node_modules/react-native-vector-icons/Fonts",
  iconFontNames: ["YourFont.ttf", "..."]
]

- apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
+ apply from: "../../../../node_modules/react-native-vector-icons/fonts.gradle
```

⚠️ Reported [issues](https://github.com/oblador/react-native-vector-icons/issues/1281#issuecomment-1363201537) have arisen when utilizing RNVI versions earlier than 9.0.0 within a monorepo context. Therefore, it's advisable to ensure your RNVI version is 9.0.0 or later.

</details>

#### Option: Manual Integration

To manually integrate the library, follow these steps:

- Copy the contents from the `Fonts` folder and paste them into `android/app/src/main/assets/fonts` (ensure the folder name is lowercase, i.e., `fonts`).

#### Integrating Library for `getImageSource` Support

The following steps are optional and are only necessary if you intend to utilize the `Icon.getImageSource` function.

- Edit the `android/settings.gradle` file as shown below:

  ```diff
  rootProject.name = 'MyApp'

  include ':app'

  + include ':react-native-vector-icons'
  + project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
  ```

- Edit the `android/app/build.gradle` (located in the **app** folder) as shown below:

  ```diff
  apply plugin: 'com.android.application'

  android {
    ...
  }

  dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    //noinspection GradleDynamicVersion
    implementation "com.facebook.react:react-native:+"  // From node_modules

  + implementation project(':react-native-vector-icons')
  }
  ```

- Edit your `MainApplication.java` (located deep within `android/app/src/main/java/...`) as shown below (note that there are `two` places to edit):

  ```diff
  package com.myapp;

  + import com.oblador.vectoricons.VectorIconsPackage;

  ....

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage()
  +   , new VectorIconsPackage()
      );
    }
  ```

Please note that this optional step is necessary only if your **react-native app doesn't support auto-linking**; otherwise, you can skip this.

```sh
npm install mx-rn-vector-icons
```

## Usage

Icons library : https://oblador.github.io/react-native-vector-icons/

```js
import { MXicon } from 'mx-rn-vector-icons';

// ...

<MXicon
  type={'AntDesign'}
  name={'stepforward'}
  color={'#fff'}
  size={30}
  style={{ margin: 10 }}
  onPress={() => alert('Horray!')}
/>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
