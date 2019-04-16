/**
 * Set storage
 *
 * @param name
 * @param content
 * @param maxAge
 */
export const setStore = (name, content, maxAge = null) => {
  if (!(<any>global).window || !name) {
    return
  }

  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }

  const storage = (<any>global).window.localStorage

  storage.setItem(name, content)
  if (maxAge && !isNaN(parseInt(maxAge))) {
    const timeout = new Date().getTime() / 1000;
    storage.setItem(`${name}_expire`, timeout + maxAge)
  }
}

/**
 * Get storage
 *
 * @param name
 * @returns {*}
 */
export const getStore = name => {
  if (!(<any>global).window || !name) {
    return
  }

  const content = window.localStorage.getItem(name)
  const _expire = parseInt(window.localStorage.getItem(`${name}_expire`))

  if (_expire) {
    const now = new Date().getTime() / 1000;
    if (now > _expire) {
      return
    }
  }

  try {
    return JSON.parse(content)
  } catch (e) {
    return content
  }
}

/**
 * Clear storage
 *
 * @param name
 */
export const clearStore = name => {
  if (!(<any>global).window || !name) {
    return
  }

  window.localStorage.removeItem(name)
  window.localStorage.removeItem(`${name}_expire`)
}

/**
 * Clear all storage
 */
export const clearAll = () => {
  if (!(<any>global).window || !name) {
    return
  }

  window.localStorage.clear()
}
