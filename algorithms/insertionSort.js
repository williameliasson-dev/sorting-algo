export default async function insertionSort(arr, setArray, speed) {
  let newArray = [...arr];
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  for (let i = 1; i < arr.length; i++) {
    // First, choose the element at index 1
    let current = arr[i].height;
    let j;
    newArray[i].state = "none";

    // Loop from right to left, starting from i-1 to index 0
    for (j = i - 1; j >= 0 && arr[j].height > current; j--) {
      // as long as arr[j] is bigger than current
      // move arr[j] to the right at arr[j + 1]
      newArray[j].state = "active";
      newArray[j + 1].state = "active";

      arr[j + 1].height = arr[j].height;
      setArray([...newArray]);
      await timer(speed);
      newArray[j].state = "none";
      newArray[j + 1].state = "none";
      setArray([...newArray]);
    }
    // Place the current element at index 0
    // or next to the smaller element
    arr[j + 1].height = current;
    newArray[i].state = "none";
    setArray([...newArray]);
  }
  for (let x = 0; x < arr.length; x++) {
    arr[x].state = "done";
  }
  return arr;
}
