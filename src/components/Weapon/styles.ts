import styled, {keyframes} from "styled-components"

interface WeaponProps extends React.ComponentPropsWithoutRef<'div'> {
    isShadowAnimated?: boolean;
    name: string;
    color: any;
    playing: boolean;
}

const shadow = keyframes`
  to {
    box-shadow: 0 0 0 40px rgba(255,255,255,.04), 0 0 0 80px rgba(255,255,255,.04), 0 0 0 120px rgba(255,255,255,.02);
    transform:  scale(1.1);
  }
`
const box = keyframes`
  to {
    transform: rotateY(360deg);
  }
`

export const WeaponStyled = styled.div<WeaponProps>`
  width: 130px;
  height: 125px;
  padding: ${({ name }) => (name === 'default') ? '16px' : '0'};
  border: 16px solid ${({ color }) => color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  box-shadow: 0 5px 0 ${({ color }) => color.border};
  cursor: pointer;
  position: relative;
  z-index: 2;
  ${({ isShadowAnimated }) => isShadowAnimated && 'box-shadow: 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.02);'}
  animation: 1s ${({ isShadowAnimated }) => isShadowAnimated ? shadow : ''} forwards;
  &:active {
    transform: scale(.9);
  }
  .box {
    background: ${({ name }) => (name === 'default') ? '#122343' : 'white'};
    box-shadow: 0 -4px 0 ${({ name }) => (name === 'default') ? 'transparent' : '#BABFD4'};
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40%;
      animation: 1s ${({ isShadowAnimated }) => isShadowAnimated ? box : ''};
    }
  }
  @media screen and (min-width: 1024px) {
    ${({ playing }) => playing ? 'width: 300px; height: 295px; border-width: 32px;' : 'width: 150px; height: 145px;'}
  }

`