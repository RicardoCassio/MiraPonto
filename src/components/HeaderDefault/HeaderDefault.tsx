import { HeaderContainer } from './styles';
import logomarca from '../../assets/logo.png';
import { List, User } from 'phosphor-react';
import { SetStateAction } from 'react';

interface HeaderDefaultProps {
  setShowSidebar: React.Dispatch<SetStateAction<boolean>>;
}

export function HeaderDefault({ setShowSidebar }: HeaderDefaultProps) {
  const ShowOrHide = () => setShowSidebar(prevState => !prevState);

  return (
    <HeaderContainer>
      <button onClick={ShowOrHide}>
        <List size={42} weight="duotone" />
      </button>
      <img src={logomarca} alt="Logomarca" />
      <div>
        <User size={42} color='#007BFF' />
      </div>
    </HeaderContainer>
  );
}
