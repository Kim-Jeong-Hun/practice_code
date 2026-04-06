// 객체와 배열의 entries() 메소드에 대해 알아보자.

const array1 = [
    "a", "Y", "c", "E", "Z"
];

const object1 = {
    a: "somestring",
    b: 42
};

for (const [index, value] of array1.entries()) {
    console.log(`${index} : ${value}`);
}

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key} : ${value}`);
}

/*
 entries() 메소드는 
 배열에서는 인덱스와 값을 쌍으로 묶고,
 객체에서는 키와 값을 쌍으로 묶어
 순회할 수 있는 Iterator 객체를 반환한다.
*/