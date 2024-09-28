function run(code) {

    let replacement_list = {};
    for (i = 0; i <= 2000; i++) {
        px = i + 'px';
        vw = i / 4 + 'vw';
        vh = i / 3 + 'vh';
        unit = i === 0 ? '0' : i + 'px';
        unit = px.length < unit.length ? px : unit;
        unit = vw.length < unit.length ? vw : unit;
        unit = vh.length < unit.length ? vh : unit;
        replacement_list[px] = unit;

        // negative values
        neg_px = -i + 'px';
        neg_unit = '-' + unit;
        replacement_list[neg_px] = neg_unit;


    }
    // split by newlines, then by spaces
    let lines = code.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let words = lines[i].split(' ');
        for (let j = 0; j < words.length; j++) {
            // find strings with pattern of number followed by px
            // do it as a regex
            // must allow for it to be negative
            // let match = words[j].match(/(\d+)px/g);
            let match = words[j].match(/-?\d+px/g);
            if (match) {
                for (let k = 0; k < match.length; k++) {
                    let px = match[k];
                    let unit = replacement_list[px];
                    words[j] = words[j].replace(px, unit);
                }
            }
        }
        lines[i] = words.join(' ');
    }
    code = lines.join('\n');
    return code;
}
