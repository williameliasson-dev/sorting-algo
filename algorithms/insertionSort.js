export default async function insertionSort(arr, setArray, speed) {
  let newArray = [...arr];
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i].height;
    let j;
    newArray[i].state = "none";
    for (j = i - 1; j >= 0 && arr[j].height > current; j--) {
      newArray[j].state = "active";
      newArray[j + 1].state = "active";
      arr[j + 1].height = arr[j].height;
      setArray([...newArray]);
      await timer(speed);
      newArray[j].state = "none";
      newArray[j + 1].state = "none";
      setArray([...newArray]);
    }
    arr[j + 1].height = current;
    newArray[i].state = "none";
    setArray([...newArray]);
  }
  for (let x = 0; x < arr.length; x++) {
    arr[x].state = "done";
  }
  return arr;
}
