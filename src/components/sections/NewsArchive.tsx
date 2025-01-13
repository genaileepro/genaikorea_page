'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

const newsArticles = [
    {
        id: 1,
        title: '"생성형 AI 전문 인력 키운다"… 강사 양성 프로그램 열려',
        source: '디지틀 조선일보',
        date: '2023.05.24',
        image: 'https://digitalchosun.dizzo.com/site/data/img_dir/2023/05/24/2023052480055_0.png',
        link: 'https://digitalchosun.dizzo.com/site/data/html_dir/2023/05/24/2023052480060.html',
    },
    {
        id: 2,
        title: "국제인공지능윤리협회-장곡고, AI 윤리 기반 '임베디드 에틱스' 생성형 AI 교육 진행",
        source: '서울경제',
        date: '2024.01.22',
        image: 'https://imgnews.pstatic.net/image/011/2024/07/29/0004373009_001_20240729105816630.jpg?type=w860',
        link: 'https://n.news.naver.com/mnews/article/011/0004373009',
    },
    {
        id: 3,
        title: "디오비스튜디오 'AI 아트 공모전' 개최...주제는 '푸른 뱀'",
        source: 'AI 타임스',
        date: '2024.01.22',
        image: 'https://cdn.aitimes.com/news/photo/202410/164579_178660_3130.jpg',
        link: 'https://www.aitimes.com/news/articleView.html?idxno=164579',
    },
];

export default function NewsArchive() {
    const [isLoading, setIsLoading] = useState(true);
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleImageError = (articleId: number) => {
        setImageErrors((prev) => ({
            ...prev,
            [articleId]: true,
        }));
    };

    const ArticleSkeleton = () => (
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Skeleton className="w-full h-40" />
            <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-1" />
                <Skeleton className="h-4 w-1/3" />
            </div>
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
                News Archive
            </h2>
            <div className="relative w-full max-w-3xl">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading
                        ? Array(5)
                              .fill(null)
                              .map((_, index) => (
                                  <ArticleSkeleton key={index} />
                              ))
                        : newsArticles.map((article) => (
                              <Link
                                  key={article.id}
                                  href={article.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={
                                      article.id > 3
                                          ? 'sm:col-span-2 lg:col-span-1'
                                          : ''
                                  }
                              >
                                  <motion.div
                                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full"
                                      whileHover={{ y: -5 }}
                                      transition={{ duration: 0.2 }}
                                  >
                                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                                          {!imageErrors[article.id] ? (
                                              <Image
                                                  src={article.image}
                                                  alt={article.title}
                                                  fill
                                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                  className="object-cover transition-transform duration-300 hover:scale-105"
                                                  priority={article.id === 1}
                                                  onError={() =>
                                                      handleImageError(
                                                          article.id
                                                      )
                                                  }
                                              />
                                          ) : (
                                              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 text-gray-400">
                                                  이미지를 불러올 수 없습니다
                                              </div>
                                          )}
                                      </div>
                                      <div className="p-4">
                                          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                                              {article.title}
                                          </h3>
                                          <p className="text-sm text-gray-600 dark:text-gray-300">
                                              {article.source}
                                          </p>
                                          <p className="text-sm text-gray-500 dark:text-gray-400">
                                              {article.date}
                                          </p>
                                      </div>
                                  </motion.div>
                              </Link>
                          ))}
                </div>
            </div>
        </motion.section>
    );
}
