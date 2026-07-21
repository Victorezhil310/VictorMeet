/**
 * supabase.js — Client-side Supabase Storage & Database Connection
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://glaeghlnnmhaipmkecas.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsYWVnaGxubm1oYWlwbWtlY2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4NTg4MzEsImV4cCI6MjA5OTQzNDgzMX0.yqKdmSqYdLyWZ4NOnuN9vPt_bu8QM261eJrFWijLKVA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Upload an avatar image file to the Supabase Storage 'avatars' bucket.
 * @param {File} file - File object from input[type="file"]
 * @param {string} userId - User ID to form unique path
 * @returns {Promise<{ url: string | null, error: Error | null }>}
 */
export async function uploadAvatar(file, userId) {
  try {
    const fileExt = file.name.split('.').pop();
    const filePath = `user-${userId}-${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (error) throw error;

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    return { url: urlData.publicUrl, error: null };
  } catch (err) {
    console.error('[Supabase Storage] Upload error:', err);
    return { url: null, error: err };
  }
}

/**
 * Upload a media report attachment to private 'report-media' bucket.
 * @param {File} file
 * @param {string} reportId
 * @returns {Promise<{ path: string | null, error: Error | null }>}
 */
export async function uploadReportAttachment(file, reportId) {
  try {
    const fileExt = file.name.split('.').pop();
    const filePath = `report-${reportId}-${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('report-media')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw error;

    return { path: data.path, error: null };
  } catch (err) {
    console.error('[Supabase Storage] Report attachment error:', err);
    return { path: null, error: err };
  }
}
