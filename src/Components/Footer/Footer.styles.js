import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;    
`;
export const Copywrite = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;   
    align-items: center; 
    background-color: #ff7ebe96;
`;
export const FooterItem = styled.div`
    display: flex;
    flex-direction: column;    
`;


export const FooterListItem = styled.div`
    display: flex;
    padding-top: .8em;
    span {
        max-width: 13em;
        
    }

`;

export const SocialMediaIconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: .5em;
`;

export const StyledLink = styled(Link)`
    ${({ theme }) => `        
    color: ${theme.palette.primary.main};
    text-decoration: none;
    &:hover{
     color: ${theme.palette.secondary.main}; 
    }
  `}; 
  
`;