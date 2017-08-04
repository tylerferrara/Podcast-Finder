export function setAge(data) {
  return {type: 'SET_AGE', age: data}
}

export function setStory(data) {
  return {type: 'SET_STORY', story: data}
}

export function setCategories(data) {
  return {type: 'SET_CATEGORIES', categories: data}
}

export function clearValues() {
  return {type: 'CLEAR_VALUES'}
}
