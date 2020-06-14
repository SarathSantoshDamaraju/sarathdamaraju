import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import dayjs from 'dayjs';

const journalsFolder = path.join(process.cwd(), 'src/content/journals');

/**
 * Get the SORTED list of all files in the repo
 */

// TODO: rewrite this to be accommodated with the below functions
export function getJournalsList() {
  const fileNames = fs.readdirSync(journalsFolder);

  const allJournals = fileNames.map((fileName) => {
    const journalName = fileName.replace(/\.md$/, '');
    const fullPath = path.join(journalsFolder, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      journalName,
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

export function getAllJournalNames() {
  const fileNames = fs.readdirSync(journalsFolder);

  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getJournalData(slug) {
  const fullPath = path.join(journalsFolder, `${slug}.md`);
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
