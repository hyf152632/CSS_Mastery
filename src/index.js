import "./styles.css";

document.getElementById("app").innerHTML = `hello world `;

const reduce = (arr = [], callback, initialValue) => {
  const isInitialValue = typeof initialValue === "undefined" ? false : true;
  let acc = isInitialValue ? initialValue : arr[0];
  for (let i = isInitialValue ? 0 : 1; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
};

const accumulate = reduce([1, 2, 3, 4, 5], (acc, curr) => acc + curr);
console.log(accumulate);

const reduceByRecursion = (arr = [], callback, initialValue) => {
  if (!arr || arr.length <= 0) return initialValue;
  return reduceByRecursion(
    arr.slice(1),
    callback,
    callback(
      typeof initialValue === "undefined" ? arr[0] : initialValue,
      arr[0],
      arr.length,
      arr
    )
  );
};

console.log(
  reduceByRecursion([1, 2, 3], (acc, curr, index, arr) => {
    console.log(arr);
    return acc + curr;
  })
);

const quickSort = (arr = []) => {
  const povit = Math.round(arr.length / 2);
  let lesserArr = arr.filter((item, index) => index);
};
