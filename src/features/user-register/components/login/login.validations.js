import * as Yup from 'yup';

const LoginValidations = Yup.object().shape({
  username: Yup.string().required("El nombre de usuario es obligatorio."),
  password: Yup.string().required("La contraseña es obligatoria.")
});

export default LoginValidations;
