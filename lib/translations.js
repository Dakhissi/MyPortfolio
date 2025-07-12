import { promises as fs } from 'fs';
import path from 'path';
import { translations } from './static-translations';

export async function loadTranslations(lang = 'en') {
  try {
    // Try to load the requested language first
    const translationPath = path.join(process.cwd(), 'public', 'translations', `${lang}.json`);
    const file = await fs.readFile(translationPath, 'utf-8');
    return JSON.parse(file);
  } catch (error) {
    console.warn(`Language file ${lang}.json not found, falling back to English`);
    
    try {
      // Fallback to English
      const fallbackPath = path.join(process.cwd(), 'public', 'translations', 'en.json');
      const file = await fs.readFile(fallbackPath, 'utf-8');
      return JSON.parse(file);
    } catch (fallbackError) {
      console.error('Failed to load translation files from filesystem, using static translations:', fallbackError);
      
      // Use static translations as the final fallback
      const staticTranslation = translations[lang] || translations.en;
      
      // Merge with the full data from the JSON files, but use static translations for the critical parts
      return {
        ...staticTranslation,
        experiences: [],
        education: [],
        projects: [],
        skills: {}
      };
    }
  }
}
