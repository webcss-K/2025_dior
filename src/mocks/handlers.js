import { rest } from 'msw';

export const handlers = [
  // rest.get('https://testUrl.com/listView', async(req, res, ctx) => {
  //   return res(
  //     ctx.json({
  //       "list": 
  //         [
  //           {"title": 'listText 01'},
  //           {"title": 'listText 02'},
  //           {"title": 'listText 03'},
  //           {"title": 'listText 04'},
  //           {"title": 'listText 05'},
  //           {"title": 'listText 06'},
  //           {"title": 'listText 07'},
  //           {"title": 'listText 08'},
  //           {"title": 'listText 09'},
  //           {"title": 'listText 10'},
  //           {"title": 'listText 11'}
  //         ]
  //     })
  //   )
  // }),
  // ex)
  // rest.get('https://testUrl.com', async(req, res, ctx) => {
  //   return res(
  //     ctx.json({
  //       "data": {
  //         "data" :
  //         [
  //           {
  //             "name": "test",
  //             "age": 1
  //           }
  //         ]
  //       }
  //     })
  //   )
  // }),
  // rest.get('https://testUrl.com?id=react', async (req, res, ctx) => {
  //   const id = req.url.searchParams.get('id')
  //   const originalResponse = await ctx.fetch(req)
  //   const originalResponseData = await originalResponse.json()
  //   return res(
  //     ctx.json({
  //       "data": {
  //         "people" :
  //         [
  //           ...originalResponseData.data.people,
  //           {
  //             "name": id,
  //             "age": 135
  //           }
  //         ]
  //       }
  //     }),
  //   )
  // }),
]
