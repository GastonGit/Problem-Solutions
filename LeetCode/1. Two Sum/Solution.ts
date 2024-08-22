function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>(); // <value, index>
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const foundIndex = numMap.get(complement); 

        if (foundIndex !== undefined) {
            return [foundIndex, i];
        }

        numMap.set(nums[i], i);
    }

    return [];
};