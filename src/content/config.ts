import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content', // 指明这是包含正文的内容
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.string(),
    description: z.string(),
    image: z.string().optional(),
    // 统一字段名：建议用 projectType 对应你的代码逻辑
    projectType: z.enum(['text', 'visual']).default('text'),
    // 是否在首页展示
    featured: z.boolean().default(false),
    // 自定义排序优先级（数字越小越靠前）
    priority: z.number().default(999),
    // 定义复杂的画廊结构
    galleries: z.array(
      z.object({
        caption: z.string().optional(),
        images: z.array(z.string())
      })
    ).optional()
  })
});

export const collections = {
  'projects': projectsCollection,
};