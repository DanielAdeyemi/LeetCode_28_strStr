/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
	if (needle.length === 0) return 0;
	if (needle.length > haystack.length) return -1;

	for (let i = 0; i < haystack.length - needle.length + 1; i++) {
		for (let j = 0; j < needle.length; j++) {
			if (needle[j] !== haystack[i + j]) {
				break;
			}
			if (j === needle.length - 1) return i;
		}
	}
	return -1;
};
