export function searchElementByTag(
    target?: HTMLElement,
    tagName?: keyof HTMLElementTagNameMap
) {
    if (!target || !tagName) return;

    return target?.closest(tagName);
}
