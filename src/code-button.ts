export class CodeButton {
  clicked(element: Element) {
    element.classList.toggle('active');
    document.querySelector('.fl-splash.outer').classList.toggle('hidden');
    document.querySelector('.fl-splash.inner').classList.toggle('hidden');
  }
}
