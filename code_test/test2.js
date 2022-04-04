// 로또의 최고 순위와 최저 순위

// 순위	당첨 내용
// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6(낙첨)	그 외

// 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
// 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다. 당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.

// 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

// ... 생략

function solutionA(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => v == 0).length;

  return [rank[minCount + zeroCount], rank[minCount]];
}

solutionA([4, 6, 7, 0, 0, 11], [4, 8, 42, 5, 7, 11]);
//output = [2, 4]

// 1️⃣ rank 에는 순위 배열이 들어간다. index 는 맞춘 갯수를 나타내고 배열의 요소들은 순위를 나타낸다
// 2️⃣ filter () 를 사용해서 맞춘 번호의 length (minCount) 와 0의 length (zeroCount) 를 구한다.
// 3️⃣ 최고 순위, 최저 순위를 return
// 👉🏻 최고 순위는 rank 의 index 에 minCount + zeroCount 값을, 최저 순위는 rank 의 index 에 minCount 의 값을 넣어준다.
