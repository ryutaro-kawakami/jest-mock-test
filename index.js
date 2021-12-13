import axios from "axios";

export let data;

try {
  data = await axios.get("https://ext.nicovideo.jp/api/getthumbinfo/sm500873");
} catch (error) {
  console.error(error);
  throw new Error(error);
}

console.log(data);
