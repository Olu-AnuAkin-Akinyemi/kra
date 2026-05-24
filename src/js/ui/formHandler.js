import { submitFormData } from '../core/api.js';

function buildPayload(formType, form) {
  if (formType === 'teacher') {
    return {
      type: 'teacher',
      name: form.querySelector('#teacher-name').value,
      email: form.querySelector('#teacher-email').value,
      role: form.querySelector('#teacher-background').value,
    };
  }
  return {
    type: 'circle',
    name: form.querySelector('#circle-name').value,
    email: form.querySelector('#circle-email').value,
    role: form.querySelector('#circle-role').value,
    message: form.querySelector('#circle-reason').value,
  };
}

function showError(form, msg) {
  let err = form.querySelector('.f-error');
  if (!err) {
    err = document.createElement('div');
    err.className = 'f-error';
    err.setAttribute('role', 'alert');
    form.appendChild(err);
  }
  err.textContent = msg;
}

function clearError(form) {
  const err = form.querySelector('.f-error');
  if (err) err.textContent = '';
}

async function handleFormEvent(event, formType) {
  event.preventDefault();
  const form = document.getElementById(`${formType}-form`);
  const successMsg = document.getElementById(`${formType}-success`);
  if (!form || !successMsg) return;

  const button = form.querySelector('.f-submit');
  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = 'Sending…';
  clearError(form);

  const result = await submitFormData(buildPayload(formType, form));

  if (result.ok) {
    form.style.display = 'none';
    successMsg.classList.add('on');
    return;
  }

  showError(form, result.error);
  button.disabled = false;
  button.textContent = originalLabel;
}

export function handleFormSubmission() {
  const teacherForm = document.getElementById('teacher-form');
  const circleForm = document.getElementById('circle-form');
  if (teacherForm) teacherForm.addEventListener('submit', (e) => handleFormEvent(e, 'teacher'));
  if (circleForm) circleForm.addEventListener('submit', (e) => handleFormEvent(e, 'circle'));
}
