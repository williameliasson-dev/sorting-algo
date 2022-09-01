export default async function bblSort(arr, setArray) {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  let newArray = arr;
  for (let i = 0; i < arr.length; i++) {
    setArray([...newArray]);
    await timer(1);
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      arr[i].state = "active";
      arr[j].state = "active";
      await timer(1);
      if (arr[j].height > arr[j + 1].height) {
        // If the condition is true then swap them

        let temp = arr[j].height;
        arr[j].height = arr[j + 1].height;
        arr[j + 1].height = temp;
        setArray(newArray);
        arr[i].state = "none";
        arr[j].state = "none";
      } else {
        arr[i].state = "none";
        arr[j].state = "none";
      }
    }
  }
  setArray(newArray);
  return arr;
}
