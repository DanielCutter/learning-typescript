// Define Link Interface which contains fields that are mandatory and not (those with ?s)
// The final property is suggesting that the index type being used to search the Link object will be string, and that the value returned can be 
// any type
interface Link {
  description?: string;
  id?: number;
  url: string;
  [index: string]: any;
}

function filterByTerm(
  input: Array<Link>,
  searchTerm: string,
  lookupKey: string = "url"
): Array<Link> {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input
    .filter(function(arrayElement) {
      return arrayElement[lookupKey].match(regex);
    })
}

const obj1: Link = { url: "string1" };
const obj2: Link = { url: "string2" };
const obj3: Link = { url: "string3" };

const arrOfLinks: Array<Link> = [obj1, obj2, obj3];

filterByTerm(arrOfLinks, "string3");