# twitter-clone  

'npx create-react-app [app-name]'  

'npm start'  

Delete App.test.js, logo.svg, setupTests.js  

'npm install @material-ui/core' (For material UI icons)

'npm i @material-ui/icons'

'npm link E:\MY_CODE\react_twitter-clone\node_modules\react' (To eliminate errors initially incase bundler might “see” two Reacts — one in application folder and one in your library folder) 

'npm i react-twitter-embed'


# Deploying on FIrebase
'firebase login'
'firebase init'
select hosting option
What do you want to use as your public directory? (public)-------> 'build'
'npm run build'
'firebase deploy'