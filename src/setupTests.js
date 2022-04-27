// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { user } from './App.test';


// take data and make it a new user 

// const user = {
//   id: 1,
//   created_at: '2021-12-13T00:17:29+00:00',
//   // 🚨 Add a name here
//   name: 'Josh',
//   avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
//   header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
//   likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
//   motto: 'Res Non Verba',
//   color: 'crimson',
// }



// take test from app test and set up global test file 

// function handler(data) {
//   return(

//     [
//       rest.get(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/users`, (req, res, ctx) => res(ctx.json(data)))
//     ]
//   )
// }

const handlers = [
  rest.get(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/users`, (req, res, ctx) => res(ctx.json([user])))
]

// function getRightData(data) {
//   const handlersForSpecificOne = [
//   rest.get(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/users`, (req, res, ctx) => res(ctx.json(data)))
// ]
// return handlersForSpecificOne
// }

// function serverSet(data) {
//   return server.use(data)
// }
// const handlersForSpecificOne = [
//   rest.get(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/users`, (req, res, ctx) => res(ctx.json([user])))
// ]

export const server = setupServer(...handlers)
// export const sasukeServer = server.use()
// const sasukeServer = server.use()


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


