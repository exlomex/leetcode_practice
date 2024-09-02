// array of number count
type GetRange<
    N extends number,
    Acc extends Array<number> = []
> = Acc["length"] extends N ? Acc : GetRange<N, [0, ...Acc]>;

type DigitToNumber<T extends string> = T extends "1"
    ? 1
    : T extends "2"
        ? 2
        : T extends "3"
            ? 3
            : T extends "4"
                ? 4
                : T extends "5"
                    ? 5
                    : T extends "6"
                        ? 6
                        : T extends "7"
                            ? 7
                            : T extends "8"
                                ? 8
                                : T extends "9"
                                    ? 9: T extends "0"
                                        ? 0 : 0;

type StringDigitsToDigitsArray<S extends string> = S extends `${infer Char}${infer RestDigits}`
    ? [DigitToNumber<Char>, ...StringDigitsToDigitsArray<RestDigits>]
    : [];

type Sum<T> = T extends []
    ? [] : T extends [infer Num, ...infer RestNums]
        ? [...GetRange<Num & number>, ...Sum<RestNums>] : never;

type NumToString<Num extends number> = `${Num}`;

type SumLengthOfNumElements<Num extends number> = Sum<StringDigitsToDigitsArray<NumToString<Num>>>["length"];

type DigitsUnion = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type Solution<T extends number> = SumLengthOfNumElements<T> extends DigitsUnion ? SumLengthOfNumElements<T> : Solution<SumLengthOfNumElements<T>>;

type res = Solution<123456>; // 21 3

const a: res = 3

const test1: Solution<4090> = 4

const test2: StringDigitsToDigitsArray<'345'> = [3,4,5]
