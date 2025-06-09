const windows = [];
let listener = null;

const checkKeydown = ({ key }) => {
  if (key === 'Escape') {
    const lastIndex = windows.length - 1;
    if (windows[lastIndex].condition && !windows[lastIndex].condition()) {
      return;
    }
    windows[lastIndex].closeFunction();
    windows.length -= 1;
    if (!windows.length) {
      document.removeEventListener('keydown', checkKeydown);
      listener = null;
    }
  }
};

export const setEscapeControl = (closeFunction, condition = null) => {
  windows.push({
    closeFunction,
    condition
  });
  if (!listener) {
    document.addEventListener('keydown', checkKeydown);
  }
};

export const removeEscapeControl = () => {
  windows.length -= 1;
  if (!windows.length) {
    document.removeEventListener('keydown', checkKeydown);
    listener = null;
  }
};
