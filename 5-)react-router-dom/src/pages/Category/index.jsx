import { Outlet } from "react-router-dom";
function Category() {
  return (
    <div>
      <h1>Category</h1>
      <Outlet />
    </div>
  );
}

export default Category;
