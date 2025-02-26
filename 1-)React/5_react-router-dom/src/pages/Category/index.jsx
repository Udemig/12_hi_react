import { NavLink, Outlet } from "react-router-dom";
function Category() {
  return (
    <div className="d-flex align-items-center gap-4 p-5 aside">
      <aside className="d-flex flex-column bg-white p-5 rounded-4">
        <NavLink to="/kategori/hikaye">Hikaye</NavLink>
        <NavLink to="/kategori/roman">Roman</NavLink>
      </aside>
      {/* Alt elemanı [hikaye ve roman] render et */}
      <Outlet />
    </div>
  );
}

export default Category;
