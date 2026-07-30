// validation.js — Shared form validation for BMS Authentication Prototype

const Validation = {
  email(value) {
    if (!value || value.trim() === '') return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
    return null;
  },

  password(value) {
    if (!value || value.trim() === '') return 'Password is required.';
    if (value.length < 8) return 'Password must be at least 8 characters.';
    if (!/[A-Z]/.test(value)) return 'Password must contain an uppercase letter.';
    if (!/[a-z]/.test(value)) return 'Password must contain a lowercase letter.';
    if (!/[0-9]/.test(value)) return 'Password must contain a number.';
    if (!/[@$!%*?&]/.test(value)) return 'Password must contain a special character (@$!%*?&).';
    return null;
  },

  confirmPassword(password, confirm) {
    if (!confirm || confirm.trim() === '') return 'Please confirm your password.';
    if (password !== confirm) return 'Passwords do not match.';
    return null;
  },

  pin(digits) {
    if (digits.some(d => d === '')) return 'Please enter all 4 PIN digits.';
    if (digits.some(d => !/^\d$/.test(d))) return 'PIN must contain digits only.';
    const pin = digits.join('');
    const obvious = ['0000','1111','2222','3333','4444','5555','6666','7777','8888','9999','1234','4321'];
    if (obvious.includes(pin)) return 'PIN is too simple. Choose a less obvious combination.';
    return null;
  },

  showError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + '-error');
    const inputEl = document.getElementById(fieldId);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    if (inputEl) {
      inputEl.classList.add('border-error');
      inputEl.classList.remove('border-outline-variant', 'border-border-subtle');
    }
  },

  clearError(fieldId) {
    const errorEl = document.getElementById(fieldId + '-error');
    const inputEl = document.getElementById(fieldId);
    if (errorEl) errorEl.classList.add('hidden');
    if (inputEl) {
      inputEl.classList.remove('border-error');
    }
  },

  clearAllErrors() {
    document.querySelectorAll('[id$="-error"]').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('input').forEach(el => el.classList.remove('border-error'));
  }
};
