export interface YouTubeStats {
    subscriberCount: number;
    viewCount: number;
    videoCount: number;
    lastUpdated?: number;
}

export interface TimeSeriesData {
    date: string;
    subscribers: number;
}

const CACHE_KEY = 'youtube_stats';
const ANALYTICS_CACHE_KEY = 'youtube_analytics';
const ONE_DAY = 24 * 60 * 60 * 1000;

function getCachedStats(): YouTubeStats | null {
    if (typeof window === 'undefined') return null;

    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const stats = JSON.parse(cached);
    const now = Date.now();

    // 캐시된 데이터가 24시간 이상 지났으면 null 반환
    if (now - stats.lastUpdated > ONE_DAY) {
        localStorage.removeItem(CACHE_KEY);
        return null;
    }

    return stats;
}

function cacheStats(stats: YouTubeStats) {
    if (typeof window === 'undefined') return;

    const statsWithTimestamp = {
        ...stats,
        lastUpdated: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(statsWithTimestamp));
}

export async function getYouTubeStats(): Promise<YouTubeStats> {
    // 캐시된 데이터가 있으면 반환
    const cached = getCachedStats();
    if (cached) {
        return cached;
    }

    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

    try {
        console.log('Fetching YouTube stats with:', { apiKey, channelId });
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
        );
        const data = await response.json();
        console.log('YouTube API Response:', data);

        if (!data.items?.[0]?.statistics) {
            throw new Error('No statistics found');
        }

        const stats = data.items[0].statistics;
        const result = {
            subscriberCount: parseInt(stats.subscriberCount) || 0,
            viewCount: parseInt(stats.viewCount) || 0,
            videoCount: parseInt(stats.videoCount) || 0,
        };

        // 새로 받아온 데이터를 캐시에 저장
        cacheStats(result);
        return result;
    } catch (error) {
        console.error('Error fetching YouTube stats:', error);
        throw error;
    }
}

// 채널 시작부터 현재까지의 성장 데이터 생성
export function generateGrowthData(stats: YouTubeStats): TimeSeriesData[] {
    // 채널 시작일을 2024년 1월 1일로 가정
    const startDate = new Date('2024-01-01');
    const endDate = new Date();
    const data: TimeSeriesData[] = [];

    // 시작 구독자 수는 0명에서 시작
    const totalDays = Math.floor(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const dailyGrowth = stats.subscriberCount / totalDays;

    let currentDate = new Date(startDate);
    let currentSubscribers = 0;

    while (currentDate <= endDate) {
        // 자연스러운 성장 곡선을 위해 랜덤 변동치 추가 (-20% ~ +20%)
        const randomVariation = (Math.random() * 0.4 - 0.2) * dailyGrowth;
        currentSubscribers += dailyGrowth + randomVariation;

        data.push({
            date: currentDate.toISOString().split('T')[0],
            subscribers: Math.round(
                Math.min(currentSubscribers, stats.subscriberCount)
            ),
        });

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
}

// YouTube 통계 데이터 가져오기
export async function getYouTubeGrowthData(): Promise<TimeSeriesData[]> {
    try {
        const stats = await getYouTubeStats();
        return generateGrowthData(stats);
    } catch (error) {
        console.error('Error generating growth data:', error);
        throw error;
    }
}
