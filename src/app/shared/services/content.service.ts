import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: object = {
    home: {
      title: 'hallo',
      subtitle: 'fjdisao;fd',
      content: 'dis iz some content.',
      image: 'https://hadden-personal.s3-us-west-1.amazonaws.com/31600341.jpeg'
    },
    about: {
      title: 'About',
      subtitle: 'About Me',
      content: 'dis be my bio',
      image: 'https://hadden-personal.s3-us-west-1.amazonaws.com/31600341.jpeg'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Contact Me!',
      content: 'holla @ me!!!',
      image: 'https://hadden-personal.s3-us-west-1.amazonaws.com/31600341.jpeg'
    }
  };
}
