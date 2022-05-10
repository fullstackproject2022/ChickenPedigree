# Peckit: The Chicken Pedigree
---

## Description
PeckIt offers a full web-based solution towards maintaining and managing the chicken pedigree of the Løvlie research team at Linköping University.

Its simple, easy to use nature ensured an enjoyable user experience, which vastly improves over the labarious work of managing the pedigree over numerous external data sheets.

PeckIt aims to reduce the time that students and researchers within the group will spend on these tasks, thereby freeing up additional time for more important research matters.
Although PeckIt only caters to the Løvlie research team, its thought and implimentation open up the door towards future wider applications, such as in farming.


## Installing
* Download from github https://github.com/fullstackproject2022/ChickenPedigree.
* Ensure `npm` is configured on the system
* If required to install dependencies manually:
	> automatically install all dependencies
	```
		npm i
	```

## Executing the program (Terminal)
* Step 1: Open a UNIX terminal e.g., GitBash
* Step 2: Make sure npm is installed
* Step 2: Download the appropriate NPM modules according to the package.json file (`npm i`)
* Step 3: (Optional) Download nodemon globally using npm.
* Step 4:
	* Build production code via CLI:
	```
		npm run build
	```
	* Then run:
		```
			npm run concurrent
		```	
			
* Step 4: The web app should now run.
* Step 5: If the web app did not open automatically, then navigate manually to the following address:
			```
				http://localhost:8080
			```
* Step 6: Enjoy!

## Dependencies

### Dev-Dependencies
* @babel/core: v7.17.9
* @babel/plugin-transform-runtime: v7.17.0
* @babel/preset-env: v7.16.11
* @babel/preset-react: v7.16.7
* babel-loader: v8.2.4
* css-loader: v6.7.1
* file-loader: v6.2.0
* html-webpack-plugin: v5.5.0
* nodemon: v2.0.15
* sass: v1.50.0
* sass-loader: v12.6.0
* style-loader: v3.3.1
* svg-inline-loader: v0.8.2
* webpack: v5.72.0
* webpack-bundle-analyzer: v4.5.0
* webpack-cli: v4.9.2
* webpack-dev-server": v4.8.1


### Dependencies
* @emailjs/browser: v3.6.2
* bcryptjs: v2.4.3
* concurrently: v7.1.0
* dotenv: v16.0.0
* express: v4.17.3
* jsonwebtoken: v8.5.1
* jwt-decode: v3.1.2
* mongoose: v6.2.10
* prop-types: v15.8.1
* react: v18.0.0
* react-dom: v18.0.0
* react-icons: v4.3.1

## Authors
Sam Hurenkamp, Ramin Darudi, Sandra Kaljula, Mark Harvey

## Version History
* 1.0.0
    * Initial Release

## License
ISC
