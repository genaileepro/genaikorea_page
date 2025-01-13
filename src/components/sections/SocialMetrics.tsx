'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/Skeleton';
import Image from 'next/image';
import { getYouTubeStats, type YouTubeStats } from '@/utils/youtube';

interface ThreadsStats {
    followers: number;
    posts: number;
    likes: number;
}

export default function SocialMetrics() {
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [youtubeStats, setYoutubeStats] = useState<YouTubeStats | null>(null);
    const [threadsStats] = useState<ThreadsStats>({
        followers: 4350,
        posts: 0,
        likes: 0,
    }); // TODO: Implement real Threads API

    useEffect(() => {
        setMounted(true);

        const fetchData = async () => {
            try {
                const stats = await getYouTubeStats();
                setYoutubeStats(stats);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (!mounted) return null;

    const StatsSkeleton = () => (
        <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm shadow-lg">
            <Skeleton className="h-24 w-24 rounded-full mx-auto mb-4" />
            <div className="space-y-4">
                <Skeleton className="h-8 w-32 mx-auto" />
                <div className="grid grid-cols-3 gap-4">
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                </div>
            </div>
        </div>
    );

    const StatCard = ({ title, value }: { title: string; value: number }) => (
        <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg">
            <h4 className="text-sm text-gray-400 mb-1">{title}</h4>
            <p className="text-2xl font-bold text-gray-100">
                {value.toLocaleString()}
            </p>
        </div>
    );

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-4 md:py-6 flex flex-col items-center justify-center text-center"
        >
            <h2 className="text-3xl font-bold text-center mb-6 md:mb-8">
                소셜 미디어 통계
            </h2>
            <div className="w-full max-w-6xl px-4">
                {isLoading ? (
                    <div className="grid md:grid-cols-2 gap-6">
                        <StatsSkeleton />
                        <StatsSkeleton />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* YouTube Stats */}
                        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                            <a
                                href="https://www.youtube.com/channel/UCHAyetBLfZb830TLR_OB2Og"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative w-24 h-24 mx-auto mb-4"
                            >
                                <Image
                                    src="/ytprofile.png"
                                    alt="YouTube Channel Profile"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </a>
                            <h3 className="text-xl font-semibold text-gray-100 mb-4">
                                YouTube 채널
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                <StatCard
                                    title="구독자"
                                    value={youtubeStats?.subscriberCount || 0}
                                />
                                <StatCard
                                    title="총 조회수"
                                    value={youtubeStats?.viewCount || 0}
                                />
                                <StatCard
                                    title="동영상 수"
                                    value={youtubeStats?.videoCount || 0}
                                />
                            </div>
                        </div>

                        {/* Threads Stats */}
                        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                            <a
                                href="https://www.threads.net/@gen_leepro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative w-24 h-24 mx-auto mb-4"
                            >
                                <Image
                                    src="/threads-profile.png"
                                    alt="Threads Profile"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </a>
                            <h3 className="text-xl font-semibold text-gray-100 mb-4">
                                Threads 채널
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                <StatCard
                                    title="팔로워"
                                    value={threadsStats.followers}
                                />
                                <StatCard
                                    title="게시물"
                                    value={threadsStats.posts}
                                />
                                <StatCard
                                    title="좋아요"
                                    value={threadsStats.likes}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.section>
    );
}
