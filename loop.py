def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []


# Example
nums = [2, 4, 6, 8]
target = 10

result = two_sum(nums, target)
print(result)
















