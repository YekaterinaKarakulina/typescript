type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
  type A = T extends boolean
    ? "TYPE A"
    : T extends string
    ? "TYPE B"
    : T extends number
    ? "TYPE C"
    : "TYPE D";
  const someOtherFunction = (
    someArg: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {
    const a: "TYPE A" | "TYPE B" = someArg;
  };
  return someOtherFunction;
}
const result = someFunction("str");

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;

// type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<"a" | "b" | "c", "a" | "b">;

type MyType<T> = T extends string | number ? T : never;
type MyResult = MyType<string | number | boolean>;

// type SomeType = T extends infer U ? U : Y
// T extends { a: infer A, b: infer B } ? A & B : any
// T extends ( a: infer Arg1 ) => any ? Arg1 : any

type InferSomething<T> = T extends infer U ? U : any;
type Inferred = InferSomething<"Im a string">;

type InferSomething2<T> = T extends { a: infer A; b: number } ? A : any;
type Inferred2 = InferSomething2<{ a: "Hello", b: 1 }>;

type InferSomething3<T> = T extends { a: infer A; b: infer B } ? A & B : any;
type Inferred3 = InferSomething3<{ a: { someAProp: 1}, b: { someBProp: 'B'} }>;

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type MyFuncReturnValue = ReturnType<() => true>
