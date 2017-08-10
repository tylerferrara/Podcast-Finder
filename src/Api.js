import * as Actions from './redux/Actions';
import { store } from './redux/Reducer';

const secret = 'b1a57caa66e8681bbe0ab3ddaf306616ff301b12abfa4d76e270d567f05e9cea';
const appId = '06771e6f51e64a127d7ce7402f2fbcc937ab011f8bd205152f6494c4d7dd6c28';

// const tech = 'https://itunes.apple.com/search?country=us&term=tech&media=podcast';
const genre = 'https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres?id=';
const podcastsInGenre = 'https://itunes.apple.com/search?term=podcast&limit=200&genreId='




var Audiosearch = require('audiosearch-client-node');

var audiosearch = new Audiosearch(appId, secret, null);

console.log(audiosearch);

// export function test() {
//   audiosearch.searchEpisodes('cat').then(function (results) {
//     console.log("Audiosear.ch results>>>>>>>>>")
//     console.log(results);
//   });
// }


export function getGenres() {
  console.log("getting genres");
  requestAsync(genre+'26')
    .then(data => {
      let result = [];
      for(let i in data[26].subgenres){
        result.push(data[26].subgenres[i]);
      }
      console.log(result);
      store.dispatch(Actions.setCategories(result));
    })
    .catch(err => {
      throw new Error(err);
    })
}

export function getResults() {
  console.log("getting results");

  const selectedCat = store.getState().selectedCat;
  const categories = store.getState().categories;

  // get selected category id's
  let catIds = selectedCat.map(cat => {
    let catObj = categories.find(genre => {
      return genre.name === cat;
    });
    console.log(catObj);
    return catObj.id;
  });
  console.log(catIds);

  // Check for explicit content

  let age = '&explicit=';
  if(store.getState().age >= 18) {
    console.log("Explicit");
    age = age + "Yes";
  } else {
    console.log("Not explicit");
    age = age + "No";
  }

  // get results that have 'most' of the genres
  // catIds.forEach(id => {
    requestAsync(podcastsInGenre+catIds[0]+age)
      .then(data => {
        let results = [];
        console.log(data.results);
        data.results.forEach(result => {
          if(containsMostIds(result.genreIds, catIds)) {
            results.push(result);
          }
        });
        console.log("now our results");
        console.log(results);
        store.dispatch(Actions.addResults(results))
      })
      .catch(err => {
        throw new Error(err);
      })
  // });
}

function containsMostIds(collection, ids) {
  let target = 2;
  if(ids.length <= 2) {
    target = ids.length;
  }
  let found = 0;

  ids.forEach(id => {
    if(collection.indexOf(id) !== -1) {
      found = found+1;
    }
  });

  return (found >= target);
}

async function requestAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
