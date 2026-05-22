/**
 * Form handler UI
 * Manages enrollment form submissions — hides form, shows success message
 * Note: No API call yet. Data layer integration pending backend setup.
 */

/**
 * Handle a single form submission event
 * @param {Event}  event    - Form submit event
 * @param {string} formType - Form identifier ('teacher' | 'circle')
 * @returns {void}
 */
function handleFormEvent(event, formType) {
  event.preventDefault();
  const form = document.getElementById(`${formType}-form`);
  const successMsg = document.getElementById(`${formType}-success`);
  if (form && successMsg) {
    form.style.display = 'none';
    successMsg.classList.add('on');
  }
}

/**
 * Attach submit handlers to teacher and community enrollment forms
 * @returns {void}
 */
export function handleFormSubmission() {
  const teacherForm = document.getElementById('teacher-form');
  const circleForm = document.getElementById('circle-form');
  if (teacherForm) teacherForm.addEventListener('submit', (e) => handleFormEvent(e, 'teacher'));
  if (circleForm) circleForm.addEventListener('submit', (e) => handleFormEvent(e, 'circle'));
}
