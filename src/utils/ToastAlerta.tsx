import { toast } from 'react-toastify';

export function ToastAlerta(mensagem: string, tipo: string) {
  let type: 'success' | 'error' | 'info' = 'info';
  let className = '';

  switch (tipo) {
    case 'sucesso':
      type = 'success';
      className = 'toast-sucesso';
      break;
    case 'erro':
      type = 'error';
      className = 'toast-erro';
      break;
    case 'info':
    default:
      type = 'info';
      className = 'toast-info';
      break;
  }

  toast(mensagem, {
    type,
    className,
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
}