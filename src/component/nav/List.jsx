import NavItem from "./NavItem";
import NavLinkButton from "./NavLinkButton";

function List() {
  const items = NavItem();
  return items.map((item) => {
    return <NavLinkButton key={item.id} href={item.href} text={item.text} />;
  });
}

export default List;
