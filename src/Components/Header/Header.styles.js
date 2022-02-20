import styled from "styled-components";

const StyledButton = styled(Button)`
  ${({ theme }) => `
    background-color: ${theme.palette.secondary.main};
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding-left: 20px;
    padding-right: ${theme.spacing(2)};
    font-size: 13px;
     
  `}
`;

const AppHeader = styled('div')` ${({ theme }) => `
  background-color: theme.primary;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  color: theme.text.main;
`}
`