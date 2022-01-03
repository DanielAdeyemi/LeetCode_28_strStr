class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if (len(needle) == 0):
            return 0
        for i in range(len(haystack) - len(needle) + 1):
            for j in range(len(needle)):
                if(needle[j] != haystack[i+j]):
                    break
                if(j == len(needle) - 1):
                    return i
        return -1
