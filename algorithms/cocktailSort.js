export default async function cocktailSort(arr, setArray, speed) {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  let start = 0,
    end = arr.length,
    swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = start; i < end - 1; i++) {
      if (arr[i].height > arr[i + 1].height) {
        arr[i].state = "active";
        arr[i + 1].state = "active";
        await timer(speed);
        setArray([...arr]);
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
      arr[i].state = "none";
      arr[i + 1].state = "none";
      setArray([...arr]);
    }

    if (!swapped) {
      break;
    }

    swapped = false;

    for (let i = end - 1; i > start; i--) {
      if (arr[i - 1].height > arr[i].height) {
        arr[i].state = "active";
        arr[i - 1].state = "active";
        await timer(speed);
        setArray([...arr]);
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swapped = true;
      }
      arr[i].state = "none";
      arr[i - 1].state = "none";
      setArray([...arr]);
    }
  }
  for (let x = 0; x < arr.length; x++) {
    arr[x].state = "done";
  }
  return arr;
}
