'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FiTrash2, FiUpload } from 'react-icons/fi';
import { toast } from 'sonner';

import { VideoPlayer } from './VideoPlayer';
import { fetchUploads, ProjectMediaFile, UploadsResponse } from '@/lib/queries/uploads';

type ProjectImagesProps = {
  flagForAddedOrDeletedReview?: boolean;
};

export function ProjectImages({ flagForAddedOrDeletedReview }: ProjectImagesProps) {
  const queryClient = useQueryClient();
  const { data, isLoading, isFetching, refetch } = useQuery<UploadsResponse>({
    queryKey: ['admin', 'uploads'],
    queryFn: fetchUploads,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  const uploadFilesMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch('/api/admin/uploads', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      const json = await res.json();

      if (!res.ok || !json?.success) {
        throw new Error(json?.error ?? 'Upload failed');
      }

      return json;
    },
  });

  const deleteUploadsMutation = useMutation({
    mutationFn: async (filenames: string[]) => {
      const res = await fetch('/api/admin/uploads', {
        method: 'DELETE',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filenames }),
      });

      const json = await res.json();

      if (!res.ok || !json?.success) {
        throw new Error(json?.error ?? 'Delete failed');
      }

      return json;
    },
  });

  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [deleteMode, setDeleteMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const skeletonPlaceholders = useMemo(() => Array.from({ length: 3 }), []);
  const selectedList = useMemo(
    () => Object.keys(selected).filter((key) => selected[key]),
    [selected],
  );

  const images: ProjectMediaFile[] = data?.images ?? [];
  const videos: ProjectMediaFile[] = data?.videos ?? [];
  const loading =
    isLoading || isFetching || uploadFilesMutation.isPending || deleteUploadsMutation.isPending;

  const toggle = (filename: string) => {
    if (!deleteMode) return;
    setSelected((prev) => ({ ...prev, [filename]: !prev[filename] }));
  };

  const handlePickFiles = () => fileInputRef.current?.click();

  const handleFilesChosen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    formData.append('image', files[0]);

    const toastId = toast.loading('מעלה קבצים…');

    uploadFilesMutation.mutate(formData, {
      onSuccess: () => {
        toast.success('הקבצים הועלו בהצלחה', { id: toastId });
        queryClient.invalidateQueries({ queryKey: ['admin', 'uploads'] });
      },
      onError: (error) => {
        toast.error(
          `שגיאה בהעלאה: ${error instanceof Error ? error.message : 'לא ידועה'}`,
          { id: toastId },
        );
      },
      onSettled: () => {
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      },
    });
  };

  const deleteSelected = () => {
    if (!deleteMode) {
      setDeleteMode(true);
      return;
    }

    if (!selectedList.length) {
      setDeleteMode(false);
      return;
    }

    const filenamesToDelete = [...selectedList];

    toast(`למחוק ${filenamesToDelete.length} פריטים?`, {
      action: {
        label: 'אישור',
        onClick: () => {
          const toastId = toast.loading('מוחק קבצים…');

          deleteUploadsMutation.mutate(filenamesToDelete, {
            onSuccess: () => {
              toast.success('הפריטים נמחקו בהצלחה', { id: toastId });
              setSelected({});
              setDeleteMode(false);
              queryClient.invalidateQueries({ queryKey: ['admin', 'uploads'] });
            },
            onError: (error) => {
              toast.error(
                `שגיאה במחיקה: ${error instanceof Error ? error.message : 'לא ידועה'}`,
                { id: toastId },
              );
            },
          });
        },
      },
      cancel: {
        label: 'ביטול',
        onClick: () => {
          setDeleteMode(false);
          setSelected({});
        },
      },
    });
  };

  useEffect(() => {
    if (flagForAddedOrDeletedReview === undefined) return;
    refetch();
  }, [flagForAddedOrDeletedReview, refetch]);

  useEffect(() => {
    setSelected({});
  }, [images, videos]);

  const renderSkeletons = (keyPrefix: string) =>
    skeletonPlaceholders.map((_, index) => (
      <div key={`${keyPrefix}-${index}`} className="flex flex-col gap-3 max-w-[200px] animate-pulse">
        <div className="w-full aspect-square rounded-lg bg-[#edf3f6]" />
        <div className="h-3 w-3/4 self-center rounded bg-[#edf3f6]" />
      </div>
    ));

  return (
    <section className="w-full">
      <h2 className="text-[#111618] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
        תמונות בפרויקט
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-[repeat(auto-fit,minmax(158px,1fr))] min-h-24 gap-2 sm:gap-3 p-4 sm:px-6">
        {loading
          ? renderSkeletons('image-skeleton')
          : images.length === 0
            ? (
              <div className="col-span-full text-[#617c89] text-sm">אין תמונות להצגה</div>
            )
            : (
              images.map((image) => {
                const isSelected = !!selected[image.filename];
                return (
                  <div key={image.filename} className="flex flex-col gap-3 max-w-[200px]">
                    <button
                      type="button"
                      className="relative w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg outline-0 focus:outline-none"
                      style={{ backgroundImage: `url("${image.url}")` }}
                      onClick={() => toggle(image.filename)}
                      aria-pressed={isSelected}
                    >
                      <span aria-hidden="true" className="absolute inset-0 rounded-lg ring-2" />
                      {isSelected && deleteMode && (
                        <>
                          <span className="absolute inset-0 rounded-lg overflow-hidden">
                            <span
                              className="absolute inset-0 bg-center bg-cover"
                              style={{
                                backgroundImage: `url("${image.url}")`,
                                filter: 'blur(6px)',
                                transform: 'scale(1.05)',
                              }}
                            />
                            <span className="absolute inset-0 bg-white/30" />
                          </span>
                          <span className="absolute inset-0 z-10 flex items-center justify-center">
                            <FiTrash2 className="w-8 h-8 text-[#13a4ec] drop-shadow" />
                          </span>
                        </>
                      )}
                    </button>
                    <p className="text-[#617c89] text-xs truncate text-center">{image.filename}</p>
                  </div>
                );
              })
            )}
      </div>

      <h2 className="text-[#111618] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-2">
        סרטונים בפרויקט
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-[repeat(auto-fit,minmax(158px,1fr))] min-h-24 gap-2 sm:gap-3 p-4 sm:px-6">
        {loading
          ? renderSkeletons('video-skeleton')
          : videos.length === 0
            ? (
              <div className="col-span-full text-[#617c89] text-sm">אין סרטונים להצגה</div>
            )
            : (
              videos.map((video) => {
                const isSelected = !!selected[video.filename];
                return (
                  <div key={video.filename} className="flex flex-col gap-3 max-w-[200px]">
                    {deleteMode ? (
                      <button
                        type="button"
                        className="relative w-full aspect-square rounded-lg outline-0 focus:outline-none overflow-hidden"
                        onClick={() => toggle(video.filename)}
                        aria-pressed={isSelected}
                      >
                        <video
                          className="absolute inset-0 h-full w-full rounded-lg object-cover"
                          src={video.url}
                          preload="metadata"
                          muted
                          playsInline
                          style={{ filter: isSelected ? 'blur(6px)' : 'none' }}
                        />
                        <span
                          aria-hidden="true"
                          className={`absolute inset-0 rounded-lg ring-2 ${isSelected ? 'ring-[#13a4ec]' : 'ring-transparent'}`}
                        />
                        {isSelected && (
                          <>
                            <span className="absolute inset-0 rounded-lg bg-white/30" />
                            <span className="absolute inset-0 z-10 flex items-center justify-center">
                              <FiTrash2 className="w-8 h-8 text-[#13a4ec] drop-shadow" />
                            </span>
                          </>
                        )}
                      </button>
                    ) : (
                      <VideoPlayer
                        src={video.url}
                        classes="w-full aspect-square rounded-lg overflow-hidden"
                      />
                    )}
                    <p className="text-[#617c89] text-xs truncate text-center">{video.filename}</p>
                  </div>
                );
              })
            )}
      </div>

      <section className="px-4 sm:px-6 py-3" about="notes-section">
        <div className="rounded-lg border border-[#dbe2e6] bg-[#f8fbfc] p-3">
          <p className="text-[#111618] text-base font-medium leading-normal pb-1">הערות למנהל</p>
          <ul className="ps-5 text-sm text-[#617c89] list-disc space-y-1">
            <li>ניתן להעלות תמונות (PNG/JPG/WEBP/GIF/SVG/ICO) או וידאו (MP4/MOV/WEBM/MKV).</li>
            <li>מחיקה תסיר את הקבצים לצמיתות מתיקיית public/.</li>
            <li>
              קבצים בשימוש בעמודים:
              <ul className="ps-5 space-y-1 list-disc">
                <li>
                  עמוד הבית:
                  <ul className="ps-5 space-y-1 list-disc">
                    <li>
                      תמונות: <code>home-1.png</code>, <code>home-2.png</code>, <code>home-3.png</code>
                    </li>
                  </ul>
                </li>
                <li>
                  עמוד מנוף תקרה:
                  <ul className="ps-5 space-y-1 list-disc">
                    <li>
                      תמונות: <code>ceiling-1.png</code>, <code>ceiling-2.png</code>, <code>ceiling-3.png</code>
                    </li>
                    <li>
                      וידאו: <code>elit.mov</code>
                    </li>
                    <li>
                      תמונת פוסטר: <code>poster-ceiling.png</code>
                    </li>
                  </ul>
                </li>
                <li>
                  עמוד מעלית פנאומטית:
                  <ul className="ps-5 space-y-1 list-disc">
                    <li>
                      תמונות: <code>pneumatic-1.png</code>, <code>pneumatic-2.png</code>, <code>pneumatic-3.png</code>
                    </li>
                    <li>
                      וידאו: <code>pneumatic.mov</code>
                    </li>
                    <li>
                      תמונת פוסטר: <code>poster-pneumatic.png</code>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <div className="flex px-4 sm:px-6 py-3 gap-3 justify-start">
        <button
          onClick={handlePickFiles}
          className="flex min-w-[120px] max-w-[480px] items-center justify-center gap-2 h-10 rounded-lg bg-[#13a4ec] px-4 text-sm font-bold leading-normal text-white tracking-[0.015em]"
        >
          <FiUpload className="h-4 w-4" />
          <span className="truncate">העלאת קבצים</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={handleFilesChosen}
        />
        <button
          onClick={deleteSelected}
          className="flex min-w-[160px] max-w-[480px] items-center justify-center h-10 rounded-lg bg-[#f0f3f4] px-4 text-sm font-bold leading-normal text-[#111618] tracking-[0.015em]"
        >
          <span className="truncate">
            {deleteMode ? `מחק ${selectedList.length} פריטים נבחרים` : 'בחר פריטים למחיקה'}
          </span>
        </button>
      </div>
    </section>
  );
}