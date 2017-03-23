# React Native Course

## Overview

Follow react native course on Udemy :   
https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/overview  

Git :  
https://github.com/StephenGrider/ReactNativeReduxCasts  

Good platform to follow courses :  
- You can ask question in the Q&R section and wait the instructor to respond.  
- You have preview of courses to tease and show you how it looks like.
- the price is pretty attractive 17€ for 162 videos divided into almost 20 sections.
- commentaries and rates are pretty high for this course 
  
Here the instructor is **Stephen Grider** of the highest rated React Native course.  
He has teached front end javascript to many engineers.

## Roadmap

- RN-01 : Init project
- RN-02 : Onwards
- RN-03 : Great looking apps
- RN-04 : Http request
- RN-05 : Handling component layout
- RN-06 : Authentication with Firebase
- RN-06 : Processing authentication credentials
- RN-07 : Digging deeper with redux
- RN-08 : Back to react
- RN-09 : Rendering list the right way
- RN-10 : Not done yet
- RN-11 : Handling data in React vs Redux
- RN-12 : Don't mutate that state
- RN-13 : Navigating users around
- RN-14 : Firebase as data store
- RN-15 : Code reuse - edit vs create
- RN-16 : Bonus

## Development

Amazing React native IDE (use for this course instead of doing all the starting setup) :   
- https://www.decosoftware.com/  
  
Android emulator :  
- to reload "index.android.js" you must go to dev menu "cmd + M" -> "Reload JS"
  
iOS simulator :   
- to reload "index.ios.js" you must press "cmd + R"
- to go to dev menu "cmd + D"

Upgrade react native :  
- $ cd MyProject
- $ react-native-git-upgrade 0.42.0

Init a new project with latest available react (15.4.2 currently) & react native version (0.42.0 currently) :
- $ cd MyProject
- $ react-native init Project

To make this project work you must intall thoses modules :
- $ npm install firebase
- $ npm install axios
- $ npm install redux
- $ npm install react-redux

## Application "List of Albums" 

[small demo video](albums.gif)

First cross platform application rendered on iOS & Android.  
Main notions learn during this course :
- class import & export
- destructured import
- Functional component : return some static amount of JSX & pass some props
- Class based component : component life cycle & states & setState()
- map function : called on an array and return some JSX for each item of the array (ex: array.map(item => <Text>item.title</Text>))
- npm install Axios : asynchronous http call 
- styling attributes
- flexBox & justifyContent
- Linking library from 'react-native' to start url in native webview

## Application "Firebase Log in & Log out" 

[small demo video](login_logout.gif)

Simple application that handle log in & log out from firebase.   
Main notions learn during this course :  
- import folder library 
- create firebase account "vincent.chann.engineer@gmail.com"
- log in & log out from firebase 
- handle wrong login / password
- handle waiting time with Spinner (ActivityIndicator) & conditional rendering
- bugfix by upgrading to react native 0.42.0 and react 15.4.2
- handle firebase login status rendering at Application level (App.js) 

## Application "ListView & Redux"

[small demo video](redux.gif)

Simple ListView with animations that use Redux & React Redux :
- you must create a Provider that will wrap your whole View and pass it a store : 
<Provider store={createStore(reducers)}><View>[ ... ]</View></Provider>
- create some reducers in a folder and combine them in index.js thanks to 'combineReducers' :
export default combineReducers({ state1: Reducer1, state2: Reducer2 })
- create a reducer : function that will return datas (array, string, integer, ... ) and get as props of its function (state, action) => {} where state is mapStateToProp pass to connect function and action is the action called.
- create an action : function that return a plain javascript object with a type and a payload and get any props as parameters :
const getRank = (idx) => { return { type: 'rank', payload: idx } }
- mapStateToProps = (state, ownProps) => { return { stateOfComponent } }
- at the end of your component file you must :
export default connect(mapStateToProps, actions)(YourComponent)

How it works :
- You call an action on callback <TouchableWithoutFeedback onPress={() => { this.props.selectLibrary(id) }}>
- This will cause the action creactor to return an action (selectLibrary) that will be sent to all of our reducers
- then the reducers will rerun to assemble new application states
- that states automatically sent down to mapStateToProps functions
- causes our components to rerender
=> view updates on the screen

Import :
- { connect, Provider } from 'react-redux';
- { createStore, combineReducers } from 'redux';
- reducers from './reducers';
- actions from './actions';

## Application "Navigation App"

Start from scratch :
- react-native init NavigationApp
- cd NavigationApp
- react-native run-ios // it will run ios simulator
- add "local.properties" file to android project and add sdk directory : sdk.dir=/Users/vincentchann/Library/Android/sdk
- launch simulator from Android Studio or connect a phone
- react-native run-android // it will install on the android simulator
- go on the simulator and click on the icon to launch the app

New IDE : 
- https://atom.io/  

With plugins (preferences > install > packages) :
- atom-beautify
- react
