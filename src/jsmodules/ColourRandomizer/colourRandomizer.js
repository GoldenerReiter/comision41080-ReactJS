function colourRandomizer () {
    let value = Math.floor(Math.random() * 9);
    if (value > 6) {
        return "yellow";
    } else if (value >= 3 && value <= 6) {
        return "cyan";
    } else if (value < 3) {
        return "magenta";
    } else {
        return "cyan";
    }
}

export default colourRandomizer;