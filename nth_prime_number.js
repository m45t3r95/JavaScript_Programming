function MathChallange(n) {
    let count = 0;
    for (let i = 2; i <= 10000; i++) {
        let detector = false
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                detector = true
                break
            }
        }
        if (detector == false) {
            // console.log(i)
            count += 1;
            if (count == n) return i
        }
    }
}

console.log(MathChallange(10))
