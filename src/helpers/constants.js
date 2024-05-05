export const fields = {
  name: {
    regex: /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]{3,150}$/,
    msgError: 'Debe tener entre 3 y 150 caracteres',
    required: true,
  },
  username: {
    regex: /^[0-9a-zA-Z\sáéíóúÁÉÍÓÚñÑ]{3,30}$/,
    msgError: 'Debe tener entre 3 y 30 caracteres ',
    required: true,
  },
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    msgError: 'Email inválido',
    required: true,
  },
  nDni: {
    regex: /^[0-9]{7,8}$/,
    msgError: 'Solo números',
    required: true,
  },
  password: {
    regex: /^.{8,}$/,
    msgError: 'Debe tener al menos 8 caracteres',
    required: true,
  },
  confPass: {
    regex: /^.{8,}$/,
    msgError: 'Debe tener al menos 8 caracteres',
    required: true,
  },
  birthdate: {
    regex: /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/,
    msgError: 'Debe ingresar una fecha válida',
    required: false,
  },
  picture: {
    regex: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)/,
    msgError: 'Debe ingresar una URL válida',
    required: false,
  },
  phone: {
    regex: /^[0-9-]{7,15}$/,
    msgError: 'Solo números y guiones',
    required: false,
  },
  date: {
    regex: /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/,
    msgError: 'Debe ingresar una fecha válida',
    required: true,
  },
  hour: {
    regex: /^([0-1][0-9]|2[0-3])$/,
    msgError: 'Debe ingresar una hora válida',
    required: true,
  },
  minute: {
    regex: /^(00|30)$/,
    msgError: 'Debe ingresar minutos válidos',
    required: true,
  },
  message: {
    regex: /^[0-9a-zA-Z\sáéíóúÁÉÍÓÚñÑ.,(){}]{3,255}$/,
    msgError: 'Debe tener entre 3 y 255 caracteres',
    required: true,
  },
};

export const formsApp = {
  registerForm: ['name', 'username', 'email', 'nDni', 'password', 'confPass'],
  loginForm: ['username', 'password'],
  recoveryForm: ['password', 'confPass'],
  profileForm: ['name', 'email', 'nDni', 'phone', 'picture'],
  newAppointmentForm: ['date', 'hour', 'minute'],
  contactForm: ['name', 'email', 'message'],
};

// Formulario que modifican pass
// Validamos que pass sea igual a confPass
export const formChangePass = ['registerForm', 'recoveryForm'];

export const initialValues = {
  registerForm: {
    name: null,
    username: null,
    password: null,
    confPass: null,
    email: null,
    nDni: null,
  },
  loginForm: {
    username: null,
    password: null,
  },
  recoveryForm: {
    password: null,
    confPass: null,
  },
  profileForm: {
    name: null,
    username: null,
    email: null,
    nDni: null,
    phone: null,
    picture: null,
  },
  newAppointmentForm: {
    date: null,
    hour: '--',
    minute: '--',
    time: null,
  },
  contactForm: {
    name: null,
    email: null,
    message: null,
  },
};

export const initialDataUser = {
  token: null,
  user: {
    name: '',
    birthdate: '',
    email: '',
    id: '',
    image: null,
    nDni: '',
    phone: '',
    username: '',
    role: '',
    appointments: '',
  },
  isLogged: false,
};

export const initialState = {
  userData: {
    isLogged: false,
    token: null,
    user: {
      id: null,
      name: null,
      image: null,
      role: null,
    },
  },
  userAppointments: [],
};

export const hourOptions = [9, 10, 11, 12, 13, 14, 15, 16, 17];
