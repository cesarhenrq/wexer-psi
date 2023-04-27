export const TOKEN_KEY = 'jwt';

export const PACIENT_ID = '644863b80fafd9fcbd3a746b';

const FORMATS = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ script: 'sub' }, { script: 'super' }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],
  ['align', { align: 'center' }, { align: 'right' }, { align: 'justify' }],
  ['link'],
];

export const MODULES = {
  toolbar: {
    container: FORMATS,
  },
};
