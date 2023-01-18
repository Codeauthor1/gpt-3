import PropTypes from "prop-types";

function NavLinkButton({ href, text }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <ul>
        <li>
          <a
            style={{
              color: "rgba(255, 255, 255, 1)",
              font: " 700 1.2em san-serif",
            }}
            className="nav-link"
            href={href}
          >
            {text}
          </a>
        </li>
      </ul>
    </div>
  );
}

NavLinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default NavLinkButton;
