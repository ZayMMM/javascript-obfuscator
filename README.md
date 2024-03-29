# javascript-obfuscator
This project demonstrates how to use the JavaScript Obfuscator library to obfuscate JavaScript code in Node.js/Express.js application.

## Overview
JavaScript obfuscation is the process of converting readable JavaScript code into a less readable version to protect it from reverse engineering and unauthorized use. The JavaScript Obfuscator library provides tools and options to obfuscate JavaScript code effectively.

In this project, we have a simple Node.js application with an Express.js server (`app.js`) and a sample service module (`service/service.js`). We use the JavaScript Obfuscator library to obfuscate the code in the `service` module during the build process.

## Setup
To set up and run the project, follow these steps:

1. Clone the repository to your local machine:
```
git clone https://github.com/ZayMMM/javascript-obfuscator.git
```

3. Navigate to the project directory:
```
cd javascript-obfuscator
```

5. Install dependencies:
```
npm install
```


## Usage
To build the production application, which includes obfuscating the JavaScript code in the `service` module, run:
```
npm run build
```
This command will obfuscate the JavaScript code in the `service` module using the JavaScript Obfuscator library.

To start the application in development mode with automatic restart using `nodemon`, run:
```
npm start
```
This command will start the Express.js server and automatically restart it whenever changes are made to the code.

## Reference Repository
You can find additional resources and related projects in the [Reference Repository](https://github.com/javascript-obfuscator/javascript-obfuscator).

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or new features you'd like to see in the project.

## License
This project is licensed under the GNU License. See the [LICENSE](LICENSE) file for details.






