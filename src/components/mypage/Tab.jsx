import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';


function Tab() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Tab;

const StTab = styled.div`
.Nav{ 
    position: absolute;
    width: 102px;
    height: 34px;
    left: 24px;
    top: 109px;
    display: flex;
    text-align: center;
    
    &:hover, &.active {
        color: #70CCA6
    }
}
`