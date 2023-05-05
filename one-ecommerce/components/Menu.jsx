import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = ({ setShowMenu, showMenu }) => {
  return (
    <ul className={`hidden md:flex items-center gap-8 font-medium text-black`}>
      {data.map((e, i) => (
        <React.Fragment key={i}>
          {e?.subMenu ? (
            <li
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
              className="cursor-pointer flex items-center gap-2 relative"
            >
              {e.name}
              <BsChevronDown size={14} />
              {showMenu && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                  {subMenuData.map((el) => (
                    <Link key={el.id} href={"/"}>
                      <li
                        className={`h-12 flex justify-between items-center px-3 hover:bg-black/[0.3] rounded-md `}
                      >
                        {el.name}
                        <span className="opacity-50 text-sm">7</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className={`cursor-pointer`}>
              <Link href={e?.url}>{e.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Menu;
