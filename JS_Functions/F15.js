function loginTracker() {
    let attempts = 0;

    return function() {
        attempts++;
        return `Attempts: ${attempts}`;
    };
}

const track = loginTracker();
console.log(track());
console.log(track());