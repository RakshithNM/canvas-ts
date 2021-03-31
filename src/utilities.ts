export const getRandom = (min: number, max: number): number => {
    return Math.random() * (max - min + 1) + min;
}