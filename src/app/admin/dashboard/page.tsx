'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TabsNav } from '@/components/TabsNav';
import { ReviewsTable } from '@/components/ReviewsTable';
import { ProjectImages } from '@/components/ProjectImages';
import { AdminTabKey } from '@/types';
import UploadReview from '@/components/UploadReview';


export default function AdminDashboard() {
  
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTabKey>('reviews');
  // TODO: Need to do it works with images component too
  const [flagForReloadReviews, setFlagForReloadReviews] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/verify', {
        credentials: 'include'
      });

      if (response.ok) {
        setAuthenticated(true);
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  if (loading) {
    <div className="flex flex-1 items-center justify-center h-full">
      <p className="text-[#111618] text-base font-medium leading-normal">טוען…</p>
    </div>;
  }

  if (!authenticated) {
    return null; // Will redirect to login
  }

  return (
    <>
      <TabsNav activeTab={activeTab} onChange={setActiveTab} />

      <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-full max-w-[960px]">
          <div className={activeTab === 'reviews' ? 'block' : 'hidden'}>
            <ReviewsTable flagForReloadReviews={flagForReloadReviews} />
          </div>

          <div className={activeTab === 'gallery' ? 'block' : 'hidden'}>
            <ProjectImages />
          </div>

          <div className={activeTab === 'upload-review' ? 'block' : 'hidden'}>
            <UploadReview setFlagForReloadReviews={setFlagForReloadReviews} />
          </div>
        </div>
      </div>
    </>
  );
}