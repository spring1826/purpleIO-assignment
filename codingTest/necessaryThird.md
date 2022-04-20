# 3. 승점구하기

점수를 보고 이기면 3점, 비기면 1점, 지면 0점으로 계산하여 전체 승점을 구하는 함수를 작성해주세요.

**작성한 코드**

```jsx
const foo = (games) => {
  const initialValue = 0;
  const sumWithInitial = games.reduce((previousValue, currentValue) => {
    const [myScore, otherScore] = currentValue.split(":");
    if (myScore > otherScore) {
      return previousValue + 3;
    } else if (myScore === otherScore) {
      return previousValue + 1;
    } else {
      return previousValue;
    }
  }, initialValue);
  return sumWithInitial;
};
```

**예시**

- ex) ["3:1", "2:2", "1:3"] ⇒ 4

**주의할점**

- 10개의 경기 점수를 입력합니다.
- 0점에서 최대 4점까지 입력합니다.

---

- score변수 선언
- games.map
- :를 기준으로 값 비교
- 값에 따라 score에 적용
