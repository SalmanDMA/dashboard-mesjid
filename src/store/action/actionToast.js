import { toast } from 'react-toastify';

export function successToastPengajian(message) {
 return function () {
  toast.success(message);
 };
}

export function failToastPengajian(message) {
 return function () {
  toast.error(message);
 };
}
export function successToastEvent(message) {
 return function () {
  toast.success(message);
 };
}

export function failToastEvent(message) {
 return function () {
  toast.error(message);
 };
}
