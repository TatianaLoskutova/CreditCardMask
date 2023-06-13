function maskify(cc) {
    if (cc.length < 4) {
        return cc
    }
    let part1 = '#'.repeat(cc.length-4)
    let part2 = cc.slice(cc.length-4)

    return part1 + part2
}