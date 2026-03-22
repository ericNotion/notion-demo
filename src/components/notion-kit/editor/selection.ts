export function focusAtEnd(el: HTMLElement | null) {
  if (!el) return;
  el.focus();
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
}

export function focusAtStart(el: HTMLElement | null) {
  if (!el) return;
  el.focus();
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(true);
  const sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
}

export function isCaretAtStart(element: HTMLElement): boolean {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !selection.isCollapsed)
    return false;
  const range = selection.getRangeAt(0);
  if (!element.contains(range.startContainer)) return false;
  const probe = document.createRange();
  probe.selectNodeContents(element);
  probe.setEnd(range.startContainer, range.startOffset);
  return probe.toString().length === 0;
}

export function isCaretAtEnd(element: HTMLElement): boolean {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !selection.isCollapsed)
    return false;
  const range = selection.getRangeAt(0);
  if (!element.contains(range.endContainer)) return false;
  const probe = document.createRange();
  probe.selectNodeContents(element);
  probe.setStart(range.endContainer, range.endOffset);
  return probe.toString().length === 0;
}
