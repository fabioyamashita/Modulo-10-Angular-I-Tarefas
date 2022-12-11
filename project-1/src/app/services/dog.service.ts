import { Injectable } from '@angular/core';
import Dog from '../models/Dog';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor() {}

  dogList: Dog[] = [
    {
      id: 1,
      title: 'Shiba Inu',
      headerImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      srcImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      visited: false,
      liked: false,
    },

    {
      id: 2,
      title: 'Samoyed',
      headerImg:
        'https://images.unsplash.com/photo-1548032424-fff30985a191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      srcImg:
        'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
      description:
        'The Samoyed is a breed of medium-sized herding dogs with thick, white, double-layer coats. They are a spitz-type dog which takes its name from the Samoyedic peoples of Siberia. Descending from the Nenets Herding Laika, they are a domesticated animal that assists in herding, hunting, protection and sled-pulling.',
      visited: false,
      liked: false,
    },

    {
      id: 3,
      title: 'Siberian Husky',
      headerImg:
        'https://images.unsplash.com/photo-1595781590027-7cc3affcff76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80',
      srcImg:
        'https://images.unsplash.com/photo-1590419690008-905895e8fe0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
      description:
        'The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute.',
      visited: false,
      liked: false,
    },

    {
      id: 4,
      title: 'Golden Retriever',
      headerImg:
        'https://images.unsplash.com/photo-1625794084867-8ddd239946b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      srcImg:
        'https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description:
        'The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries. It is a frequent competitor in dog shows and obedience trials; it is also used as a gundog, and may be trained for use as a guide dog.',
      visited: false,
      liked: false,
    },
  ];

  getDogs(): Dog[] {
    return this.dogList;
  }

  postDogs(newDog: Dog): void {
    if (newDog.headerImg == '')
      newDog.headerImg =
        'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80';

    if (newDog.srcImg == '')
      newDog.srcImg =
        'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80';

    this.dogList.push(newDog);
  }

  deleteDog(id: number): void {
    let index: number = this.dogList.findIndex((dog) => dog.id == id);
    this.dogList.splice(index, 1);
  }

  updateDog(id: number, updatedData: Object): void {
    let index: number = this.dogList.findIndex((dog) => dog.id == id);
    this.dogList[index] = Object.assign({}, this.dogList[index], updatedData);
  }
}
