const dataInputFields = [
 {
  id: 1,
  label: 'Nama Lengkap',
  type: 'text',
  name: 'name',
  validation: {
   required: {
    value: true,
    message: 'Nama Lengkap harus diisi',
   },
   pattern: {
    value: /^[a-zA-Z ]+$/,
    message: 'Nama Lengkap hanya boleh berisi huruf',
   },
  },
 },
 {
  id: 2,
  label: 'Email',
  type: 'email',
  name: 'email',
  validation: {
   required: {
    value: true,
    message: 'Email harus diisi',
   },
   pattern: {
    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    message: 'Email tidak valid',
   },
  },
 },
 {
  id: 3,
  label: 'Password',
  type: 'password',
  name: 'password',
  validation: {
   required: {
    value: true,
    message: 'Password harus diisi',
   },
   minLength: {
    value: 10,
    message: 'Password harus minimal 10 karakter',
   },
  },
 },
];

export default dataInputFields;
