# 2. 사용하지 않는 가장 작은 숫자 찾기

0부터 시작하는 양수(+)인 ID가 있습니다. 여러 ID를 보고 사용하지 않는 가장 작은 숫자를 찾는 함수를 작성해주세요.

**작성한 코드**

```jsx
const foo = (ids) => {
  let target = 0;
  let min = [];
  while (min.length === 0) {
    if (ids.includes(target)) {
      target++;
    } else {
      min.push(target);
    }
  }
  return min[0];
};
```

**예시**

- ex) [0,1,2,4] ⇒ 3
- ex) [0,1,2,3,4,5,6] ⇒ 7

**주의할점**

- 정렬되지 않는 배열을 넣어도 동작해야함
- 중복된 숫자가 있는 경우도 동작해야함

---

- ids.sort
- target변수
- 0부터 1씩 더한다
- target이 ids에 포함되는지 확인
- 포함되지 않은 값 렌더링
