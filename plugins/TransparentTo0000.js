// REQUIRED: A `run` function thats takes in current code and returns processed code.
function run(code) {
    // `code` is your current code in the editor

    // Do your processing over the code
    let processedCode = code + ' is modified.'

    processedCode  =  processedCode.replace('transparent','#0000')

    // Return the final code
    return processedCode;
}
