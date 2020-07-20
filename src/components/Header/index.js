import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/challenge.svg';
import { Container, Content, Profile, Logout } from './styles';
import { signOut } from '~/store/modules/auth/actions';

function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Logo" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            {/* <Link to="/profile">Meu Perfil</Link> */}
          </Profile>
          <Logout type="button" onClick={() => dispatch(signOut())}>
            Sair
          </Logout>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
