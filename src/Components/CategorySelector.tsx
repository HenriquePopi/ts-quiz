import React from "react";
import { fetchCategory } from "../API";
//style
import { Selection, SelectionWrappert } from "./CategorySelector.styles";

type CategoryType = { name: string; id: number };
type Props = {
  callBack: (id: number) => any;
};
const CategorySelector: React.FC<Props> = ({ callBack }) => {
  const [categorys, setCategorys] = React.useState([
    { id: 10, name: "Any Category" },
  ]);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const getCategorys = async () => {
      const categorys = await fetchCategory();
      setCategorys((value) => [...value, ...categorys]);
    };
    getCategorys();
  }, []);

  const setCategoryView = (selectedCategory: CategoryType) => {
    setCategorys([
      selectedCategory,
      ...categorys.filter((category) => category.id !== selectedCategory.id),
    ]);
  };
  return (
    <SelectionWrappert>
      <Selection open={isOpen} onClick={() => setIsOpen((v) => !v)}>
        {categorys.length &&
          categorys.map(({ id, name }) => (
            <li
              value={id}
              key={name}
              onClick={() => {
                callBack(id);
                setCategoryView({ id, name });
              }}
            >
              {name}
            </li>
          ))}
      </Selection>
    </SelectionWrappert>
  );
};

export default CategorySelector;
