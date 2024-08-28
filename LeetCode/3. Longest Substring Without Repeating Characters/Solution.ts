function lengthOfLongestSubstring(s: string): number {
    let longestLength = 0;
    let seenChars = new Set<string>();
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        while (seenChars.has(currentChar)) {
            seenChars.delete(s[start]);
            start++;
        }

        seenChars.add(currentChar);

        longestLength = Math.max(longestLength, end - start + 1);
    }

    return longestLength;
};