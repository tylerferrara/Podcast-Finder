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

export function setResults(data) {
  return {type: 'SET_RESULTS', results: data}
}

export function addResults(data) {
  return {type: 'ADD_RESULTS', results: data}
}

export function setSelectedCategories(data) {
  return {type: 'SET_SELECTED_CATEGORIES', selected: data}
}
