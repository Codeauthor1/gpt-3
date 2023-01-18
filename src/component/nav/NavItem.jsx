function NavItem() {
  let id = 1;
  return [
    {
      text: "HOME",
      href: "home",
      id: id++,
    },
    {
      text: "What is GPT?",
      href: "what-is-gpt",
      id: id++,
    },
    {
      text: "Open AI",
      href: "open-ai",
      id: id++,
    },
    {
      text: "Case Studies",
      href: "case-studies",
      id: id++,
    },
    {
      text: "Library",
      href: "library",
      id: id++,
    },
  ];
}
export default NavItem;
