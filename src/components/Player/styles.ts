
import styled from "styled-components"

interface WrapperProps extends React.ComponentPropsWithoutRef<'div'> {
    position?: string
}
interface AatarProps extends React.ComponentPropsWithoutRef<'div'> {
    avatar?: string
}

export const Wrapper = styled.div<WrapperProps>`
position: absolute;
top: 30vh;
display: flex;
flex-direction: column;
align-items: center;
${props => props.position ? `${props.position}: 50px` : ''};

.user-score {
    text-align: center;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 600;

    .win {
    font-size: 22px;
    font-weight: 600;
    }
    .win-number {
    font-size: 40px;
    font-weight: 600;
    color: #ec1ed3;
    }
}

.player {
    margin-top: 10px;
    font-weight: 500;
    font-size: 18px;
}

@media screen and (max-width: 840px) {
    display: none;
}
`

export const Avatar = styled.div<AatarProps>`
width: 150px;
height: 150px;
border-radius: 50%;
border: 8px solid #fff;
background-image: ${props => props.avatar ? `url("${props.avatar}")` : 'none'};
background-position: center top;
background-repeat: no-repeat;
background-size: 110%;
`