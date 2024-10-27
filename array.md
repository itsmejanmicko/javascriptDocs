
# Array



## 1. Adding/Removing Elements (Pagdagdag/Pagtanggal ng Items)

-  push(item): Pangdagdag sa end ng array. Kung may list ka, push ang gagamitin mo para idagdag sa dulo, like array.push("new item").
-    pop(): Pangtanggal ng last item. Kunwari may grocery list ka, at ayaw mo na yung last item, pop() lang para tanggalin.
-    unshift(item): Pangdagdag naman sa simula ng array.
-    shift(): Pangtanggal ng unang item. Like kunwari gusto mong alisin yung unang naka-line sa pila.
-    splice(start, deleteCount, ...items): Pangdagdag o pagtanggal sa kahit anong part ng array. Pwede mo piliin saan magsisimula (start) at ilan ang tatanggalin (deleteCount). Pwedeng may bagong idagdag din.
-    slice(start, end): Gumagawa ng bagong array mula sa part ng existing array. Hindi niya tinatanggal, pero kinokopya lang.

## 2. Transforming Arrays (Pagbabago sa List)
  -  map(callback): Gumagawa ng bagong array at nire-return ang result ng function na ginawa sa bawat item. Halimbawa, gusto mong gawing doble ang lahat ng numero sa list mo.
  -  filter(callback): Gumagawa din ng bagong array pero yung mga items lang na pasado sa condition mo ang ilalagay. Like, kunin lang lahat ng items na mas mataas sa 5.
   - reduce(callback, initialValue): Gamitin ito para sa isang result lang. Kunwari, gusto mong i-add lahat ng numbers sa array, ito ang gagamitin mo.
   - reduceRight(callback, initialValue): Pareho sa reduce pero nag-start siya from the last item ng array.
-  flat(depth): Tinatanggal ang nested arrays (yung mga array na nasa loob pa ng ibang array) hanggang sa gusto mong level (depth).
  -  flatMap(callback): Combination siya ng map and flat. Ginagamit kapag gusto mong i-transform bawat item at i-flatten yung result.

  ##  3.Finding Elements (Paghahanap ng Item sa List)

 -   find(callback): Hahanapin nito ang unang item na pasado sa condition mo. Example, hanapin mo ang unang mas mataas sa 10.
  -  findIndex(callback): Similar sa find, pero ang return ay yung index ng unang item na pasado sa condition mo.
  -  includes(item): Check kung andoon yung item. Parang nagtatanong ka lang kung nasa loob ng array yung hinahanap mo.
  -  indexOf(item): Hanapin yung unang position ng item sa array. Kung hindi siya makita, babalik siya ng -1.
  -  lastIndexOf(item): Similar sa indexOf, pero hahanapin naman niya yung huling occurrence ng item.
  -  some(callback): Tinitingnan kung at least isang item ang pasado sa condition mo.
   - every(callback): Tinitingnan naman kung lahat ng items ay pasado sa condition mo.

  ##  4. Sorting and Reversing (Pag-aayos ng Order)

  -  sort([compareFunction]): I-aarrange ang items in place, alphabetically o numerically, depende sa compareFunction mo. Hindi siya magandang gamitin for numbers without a custom function kasi alphabetical default niya.
  -  reverse(): Ini-invert ang order ng mga items. Baliktad ng current na order.

  ##  5. Joining and Splitting (Pagsasama at Pag-split ng Items)

   - join(separator): Pagsasamahin ang lahat ng items into a single string. Pwede kang mag-set ng separator, like comma ,.
  -  toString(): Parang join, pero walang separator option. Ginagawa lang string ang buong array.

 ##  6. Other Utility Methods (Iba Pang Useful Methods)

   - concat(...arrays): Pagsasamahin ang iba-ibang arrays into one.
  -  fill(value, start, end): Pinupuno ang array ng specific value mula start hanggang end na index.
   - copyWithin(target, start, end): Kinokopya ang part ng array sa ibang part ng array mismo.

 ##   7. Checking and Converting (Pag-check at Conversion)

   - Array.isArray(value): Tinitingnan kung array talaga ang value.
  -  Array.from(iterable): Gumagawa ng bagong array mula sa iterable o array-like na object.
  -  Array.of(...elements): Gumagawa ng bagong array with specific elements. Parang push pero instant array.


