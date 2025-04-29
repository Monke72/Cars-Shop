import { ICars } from "./Types/types";

async function getCars(
  newUrl = "",
  setState: React.Dispatch<React.SetStateAction<ICars[]>>
) {
  const url = "https://6790b4e0af8442fd73775266.mockapi.io/cars";
  const fetchUrl = url + newUrl;
  try {
    const res = await fetch(fetchUrl);
    const data = await res.json();
    setState(data);
  } catch (e) {
    alert(e);
  }
}
export default getCars;
