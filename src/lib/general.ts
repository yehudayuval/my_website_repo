import { readdirSync } from 'fs';
import { join } from 'path';

const uploadsDir = join(process.cwd(), 'public');

export const findImageInPublicFolder = (filename: string): string | null => {
  if (!filename) return null;

  const lowerTarget = filename.toLowerCase();

  try {
    const entries = readdirSync(uploadsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isFile()) continue;
        
      const name = entry.name;
      const [maybePrefix, ...rest] = name.split('_');

      // We expect files saved as: <timestamp>_<original-name>
      if (!maybePrefix || rest.length === 0) continue;

      const originalName = rest.join('_').toLowerCase();
      if (originalName === lowerTarget) return name;
    }
  } catch {
    // ignore read errors
  }

  return null;
};