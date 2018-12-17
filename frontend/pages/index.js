/*
*   Formats web page to include
*   GatorGoods Greeting on top followed by
*   List of posted items below
*/

import Items from "../components/Items";
import Greeting from "../components/Greeting";

export default () => (
  <>
    <Greeting />
    <Items />
  </>
);
