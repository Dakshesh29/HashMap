import { LinkedList } from "./linkedlist.js";

function HashMap() {
  let capacity = 16;
  let loadFactor = 0.75;
  let length = 0;
  let hashMap = Array.from({ length: capacity }, () => LinkedList());

  function getCapacity() {
    return capacity;
  }

  function getLength() {
    return length;
  }

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }
}
