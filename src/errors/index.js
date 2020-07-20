import { toast } from 'react-toastify';
import { signOut } from '~/store/modules/auth/actions';

export default (errorDetails, dispatch) => {
  switch (errorDetails.status) {
    case 401:
      dispatch(signOut());
      break;
    case 412:
      toast.error(
        'Falha ao criar evento, não criar evento com o mesmo horário'
      );
      break;
    default:
      break;
  }
};
