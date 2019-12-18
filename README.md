# Study Exercices' App

This project was developed under the pretext of studying the react native framework. It was created from the Udemy's react native course and is intended only to test key navigation and communication features between components and to store the notes produced during the course. To facilitate my learning, the notes were made in Brazilian Portuguese, and will not be translated to english.

Have in mind that this project was not created as a real one, witch means that it has comments on code and does not follow any type of structure (I acctualy use many differents structures so I can test a lot of things and understand how each of then works).

Finnally, this was only tested in an Android emulator due to lack of access to a MAC machine.

## Getting started

### Install the Android Emulator


## Run this project

To run, you need first run the Android emulator on your machine, and then run this rect-native project.

**NOTE:** this project was tested using the **Nexus_5X_API_29_x86** emulator.

### Start the emulator

- Open your commandline;
- Run **emulator -no-snapshot -avd** plus your emulator (in my case, **emulator -no-snapshot -avd Nexus_5X_API_29_x86** );

### Start this project

- Open your commandline;
- Navigate to the project folder;
- Run **react-native run-android** if you wanna run android directly;
- Run **npm run android** if you want to clean the Android`s build folder first and then run the project;

**NOTE:** if you run the "run android" script, it will be question if you want to delete the build folder from the ./android. There is a bug happening in the build and for it to works the content of this folder must be deleted every time the build happens.