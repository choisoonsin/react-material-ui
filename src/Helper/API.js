import axios from "axios";

export default function API() {
  function test() {
    return "test";
  }

  return { test: test };
}
