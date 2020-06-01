# My Portfolio Website

![Portfolio](https://user-images.githubusercontent.com/10527102/80273176-b7f6d700-86ed-11ea-8dc1-a19c08cb7066.png)

---

## Tech details
  - Built with *NextJs*
  - Designed with *Adobe XD*
  - Node req >=10.16
  

### Layout

This template comes with 5 kind of layouts. Located at `src/pages/`

- `Main | Index` page : With your info and Recent blog (added automatically)
- `Work` page : To showcase your recent work. You can use either a list or image based cards to showcasing it here
- `Journals` page : For you blogs. Information is rendered in plain list form
- `Reads` page : To track your book reads. Or even you can use it to track your recent talks. It's upto you.
- `Contact` page: A very basic yet simple one. Lists all your handlers, resume, email and current location

### Content change

- Change the data in the `/src/content/` for the data to get updated in `journals`, `contact`, `work` and `reading` pages. 

- Adding or removing content to use `reading` page

make sure the key *thumbnail* image name is the **lowercased and underscore joined** of *name*.
`Eg., name: Lord of the Rings, thumbnail: lord_of_the_rings`

```
 - name: Nine Pints
   thumbnail: nine_pints.jpg
   link: https://www.goodreads.com/book/show/38232376-nine-pints
   author: Rose George
```

Add it in the `/src/content::books` section. Similar approach for `products` page.

- **Images** are stored in `/public/images/*` and can be referenced as `images/*/*.[png|jpg|jpeg]`
- **Page Title**, **heading** are loaded from content files.

### Hosting
> This is prefered as the site is migrating towards **netlify-cms**

using **netlify**
- Set *Build command* - `npm run deploy`
- *Publish directory* to `out` since nextjs builds the files into `out` folder.


### Features List
- [x] Remove content hardcoding
- [ ] Implement Blog with Netlify CMS
- [ ] Implement SCSS
- [ ] Implement Themes

