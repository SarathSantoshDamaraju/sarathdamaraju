import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import dayjs from 'dayjs';

const listFolders = {
  journals: path.join(process.cwd(), 'src/content/journals'),
  bits: path.join(process.cwd(), 'src/content/bits'),
};

//m
/**
 * Get the SORTED list of all files in the repo
 */

// TODO: rewrite this to be accommodated with the below functions
export function getSortedFilesList(listFor = 'journals') {
  const fileNames = fs.readdirSync(listFolders[listFor]);

  const allJournals = fileNames.map((eachFileName) => {
    const fileName = eachFileName.replace(/\.md$/, '');
    const fullPath = path.join(listFolders[listFor], eachFileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      fileName,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allJournals.sort((a, b) => {
    if (dayjs(a.date) < dayjs(b.date)) {
      return 1;
    }
    return -1;
  });
}

export function getFilesList(listFor = 'journals') {
  const fileNames = fs.readdirSync(listFolders[listFor]);

  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getFileData(slug, listFor = 'journals') {
  const fullPath = path.join(listFolders[listFor], `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
