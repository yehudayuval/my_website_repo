import path from 'path';
import { writeFile } from 'fs/promises';

const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.ico'];
const videoExtensions = ['.mp4', '.mov', '.webm', '.mkv', '.quicktime'];
export const uploadsDir = path.join(process.cwd(), 'public');


export async function uploadFile(file: File): Promise<string | null> {

    try {

        const filename = file.name;
        const filepath = path.join(uploadsDir, filename);

        // Convert file to buffer and save
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(filepath, buffer);

        return file.name;
    } catch (error) {
        console.error('Error uploading file:', error);
        return null;
    }
}

export function isAllowedFileType(name: string) {
    const ext = path.extname(name).toLowerCase();
    const allowedExtensions = [...imageExtensions, ...videoExtensions];
    return allowedExtensions.includes(ext);
}

export function isImage(name: string) {
    const ext = path.extname(name).toLowerCase();
    return imageExtensions.includes(ext);
}

export function isVideo(name: string) {
    const ext = path.extname(name).toLowerCase();
    return videoExtensions.includes(ext);
}