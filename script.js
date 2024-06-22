function secondHighest(arr) {
    if (arr.length === 0) return undefined; // Return undefined for an empty array
    if (arr.length === 1) return undefined; // Return undefined for an array with only one element

    let first = -Infinity;
    let second = -Infinity;
    let uniqueElements = new Set(arr);

    if (uniqueElements.size === 1) return undefined; // Return undefined if all elements are the same

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? undefined : second;
}
