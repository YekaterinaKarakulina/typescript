type Properties = "propA" | "propB";

type MyMappedType = {
  [P in Properties]: boolean;
};

type MyMappedType2 = {
  [P in Properties]: P;
};

type MyMappedType3<Properties extends string | number | symbol> = {
  [P in Properties]: P;
};
type MyNewType3 = MyMappedType3<"propA" | "propB">;

type MyMappedType4<T> = {
  [P in keyof T]: T[P];
};
type MyNewType4 = MyMappedType4<{ a: "a"; b: "b" }>;

type CustomPick<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};

type MyPick = CustomPick<{ a: "a"; b: "b" }, "a">;

type CustomRecord<K extends keyof any, T> = {
  [P in K]: T;
};

const someRecord: CustomRecord<string, number> = {}
someRecord.apples = 10
someRecord.oranges = 10

interface CustomRecord2 {
    [key: string]: number
}
