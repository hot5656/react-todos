import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0px 32px;
  background: white;
`;

const NavbarList = styled.div`
  display: flex;
  align-utems: center;
`;

const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: black;
  text-decoration: none;

  ${(props) =>
    props.$active &&
    `
      background: rgba(0, 0, 0, 0.1);
    `}
`;

export default function Header({ onClear }) {
  const location = useLocation();
  const history = useHistory();

  const handleClear = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("todos");
    if (location.pathname !== "/") {
      history.push("/");
    } else {
      window.location.reload();
    }
  };

  return (
    <HeaderContainer>
      <NavbarList>
        <Nav to="/" $active={location.pathname === "/"}>
          My Tasks
        </Nav>
        <Nav to="/process" $active={location.pathname === "/process"}>
          Process
        </Nav>
        <Nav to="/complete" $active={location.pathname === "/complete"}>
          Complete
        </Nav>
        <Nav to="#" onClick={handleClear}>
          Clear
        </Nav>
      </NavbarList>
    </HeaderContainer>
  );
}

Header.propTypes = {
  onClear: PropTypes.func,
};
