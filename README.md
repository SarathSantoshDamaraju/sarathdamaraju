# My Portfolio Template


---

## Using it


### Layout

This template comes with 5 kind of layouts

- `Main | Index` page : With your info and Recent blog (added automatically)
- `Work` page : To showcase your recent work. You can use either a list or image based cards to showcasing it here
- `Journals` page : For you blogs. Information is rendered in plain list form
- `Reads` page : To track your book reads. Or even you can use it to track your recent talks. It's upto you.
- `Contact` page: A very basic yet simple one. Lists all your handlers, resume, email and current location

### Content change

Change the data in the `/static/content/` for the data to get updated in `journals`, `contact` and `reads` pages. `work` page is still WIP.
You can follow the same structure of data or feel free to change to your needs.

if you are planning to use `reads` page

make sure the key *thumbnail* image name is the **lowercased and underscore joined** of *name*.
`Eg., name: Lord of the Rings, thumbnail: lord_of_the_rings`
```
{
  thumbnail: 'the_zahir.jpg',
  link: 'https://www.goodreads.com/book/show/1427.The_Zahir',
  name: 'The Zahir',
  author: 'Paulo Coelho'
},
```

**Lastly,** make sure to change `defaultProps` in `components/layout`. to change the default site title.

### Hosting

using **netlify**
- Set *Build command* - `npm run deploy`
- *Publish directory* to `out` since nextjs builds the files into `out` folder.

using *githubPages*
- Bulid the file with `npm run build && npm run export` and use https://www.npmjs.com/package/gh-pages to publish. Might be helpful : https://itnext.io/next-js-app-on-github-pages-768020f2b65e
