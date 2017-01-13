import { Router, Response, Request } from 'express';

export const studyEntityRouter: Router = Router();

studyEntityRouter.get('/', (request: Request, response: Response) => {
  response.json([  {id: 1, name: 'Qrwerewrwe', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}},
  {id: 2, name: 'Nererew', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}},
  {id: 3, name: 'Boewrewr', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}},
  {id: 4, name: 'Celeritas', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}},
  {id: 5, name: 'Magneta', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}},
  {id: 6, name: 'RubberMan', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}},
  {id: 7, name: 'Dynama', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}},
  {id: 8, name: 'Dewrew', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}},
  {id: 9, name: 'Magma', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}},
  {id: 10, name: 'Tornado', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}}
  ]);
});

studyEntityRouter.get('/:id', (request: Request, response: Response) => {
  response.json(
      {id: 3, name: 'Boewrewr', content: {html: '<h1>asdfsdf</h2><p>asdfasdfasdfasdf</p>'}}
  );
});