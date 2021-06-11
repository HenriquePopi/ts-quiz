import React from "react";
import { fetchCategory } from "../API";
//style
import { Selection } from "./CategorySelector.styles";

const CategorySelector: React.FC = () => {
  const [categorys, setCategorys] = React.useState([]);

  React.useEffect(() => {
    const getCategorys = async () => setCategorys(await fetchCategory());
    getCategorys();
  }, []);

  return (
    <Selection>
      <li>Any Category</li>

      {categorys.length &&
        categorys.map(({ id, name }) => (
          <li value={id} key={id}>
            {name}
          </li>
        ))}
    </Selection>
  );
};

export default CategorySelector;
