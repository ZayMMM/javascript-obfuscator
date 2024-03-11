//J avaScript Obfuscator -> https://github.com/javascript-obfuscator/javascript-obfuscator

const fs = require("fs");
const JavaScriptObfuscator = require("javascript-obfuscator");

// Path to the service directory
const serviceDirectory = "./service";

// Path to the obfuscated directory
const obfuscatedDirectory = "./service/obfuscated";

// Read all files in the service directory
fs.readdirSync(serviceDirectory).forEach((file) => {
  // Check if the file is a JavaScript file
  if (file.endsWith(".js")) {
    // Read the contents of the file
    const filePath = `${serviceDirectory}/${file}`;
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Obfuscate the file contents
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(fileContents, {
      // Obfuscation options
      compact: true,
      controlFlowFlattening: false,
      controlFlowFlatteningThreshold: 0.75,
      deadCodeInjection: false,
      deadCodeInjectionThreshold: 0.4,
      debugProtection: false,
      debugProtectionInterval: 0,
      disableConsoleOutput: false,
      domainLock: [],
      domainLockRedirectUrl: "about:blank",
      forceTransformStrings: [],
      identifierNamesCache: null,
      identifierNamesGenerator: "hexadecimal",
      identifiersDictionary: [],
      identifiersPrefix: "",
      ignoreImports: false,
      inputFileName: "",
      log: false,
      numbersToExpressions: false,
      optionsPreset: "default",
      renameGlobals: false,
      renameProperties: false,
      renamePropertiesMode: "safe",
      reservedNames: [],
      reservedStrings: [],
      seed: 0,
      selfDefending: false,
      simplify: true,
      sourceMap: false,
      sourceMapBaseUrl: "",
      sourceMapFileName: "",
      sourceMapMode: "separate",
      sourceMapSourcesMode: "sources-content",
      splitStrings: false,
      splitStringsChunkLength: 10,
      stringArray: true,
      stringArrayCallsTransform: true,
      stringArrayCallsTransformThreshold: 0.5,
      stringArrayEncoding: [],
      stringArrayIndexesType: ["hexadecimal-number"],
      stringArrayIndexShift: true,
      stringArrayRotate: true,
      stringArrayShuffle: true,
      stringArrayWrappersCount: 1,
      stringArrayWrappersChainedCalls: true,
      stringArrayWrappersParametersMaxCount: 2,
      stringArrayWrappersType: "variable",
      stringArrayThreshold: 0.75,
      target: "browser",
      transformObjectKeys: false,
      unicodeEscapeSequence: false,
    }).getObfuscatedCode();

    // Write the obfuscated code back to the file
    try{
        // Check if the file has already been or not
        if(!fs.existsSync(obfuscatedDirectory)){
            fs.mkdirSync(obfuscatedDirectory);
        }

        fs.writeFileSync(`${obfuscatedDirectory}/${file}`, obfuscatedCode);
    }catch(err){
        console.log("File Error: " + err);
    }
  }
});
