function run(code) {
    processedCode = code
        .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g,'')
        .replace(/\>\s*\</g,'><')
        .replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g,'')
        .replace(/\s*\{\s*/g,'{')
        .replace(/\s*\}\s*/g,'}')
        .replace(/\s*\:\s*/g,':')
        .replace(/\s*\;\s*/g,';')
        .replace(/\s*\,\s*/g,',')
        .replace(/\s*\~\s*/g,'~')
        .replace(/\s*\>\s*/g,'>')
        .replace(/\s*\+\s*/g,'+')
        .replace(/\s*\!\s*/g,'!')
        .replaceAll('transparent','#0000')
        .replaceAll(';}','}')
        .replace('</style>', '')
        .replaceAll('% ', '%')

    return processedCode;
}
