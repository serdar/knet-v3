import { posts } from '../src/database/schema/post';
import { BlogPost } from 'models'
import { getPostBySlug, getPost } from '../src/database/app';

const testSlug = async (slug: string) => {
   const response = await getPostBySlug(slug);
   console.log(`response:`, response)
   return response
}

const slug: string = '/2023/12/26/post-b';
console.log(testSlug(slug))