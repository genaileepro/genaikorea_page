'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface TrendArticle {
    title: string;
    description: string;
    date: string;
    category: string;
    image: string;
    readTime: string;
}

const trendArticles: TrendArticle[] = [
    {
        title: 'ChatGPT 4.0의 새로운 기능과 활용법',
        description:
            'ChatGPT의 최신 버전에서 추가된 새로운 기능들을 살펴보고, 이를 실제 업무에 어떻게 활용할 수 있는지 알아봅니다.',
        date: '2024.03.15',
        category: '기술 동향',
        image: '/trends/chatgpt.png',
        readTime: '5분',
    },
    {
        title: 'AI 코딩 도구의 현재와 미래',
        description:
            'GitHub Copilot, Cursor AI 등 AI 코딩 도구들의 현재 상황을 분석하고, 앞으로의 발전 방향을 예측해봅니다.',
        date: '2024.03.10',
        category: '기술 분석',
        image: '/trends/coding.png',
        readTime: '7분',
    },
    {
        title: '프롬프트 엔지니어링의 최신 트렌드',
        description:
            '더 나은 결과를 얻기 위한 프롬프트 작성 방법과 최근 등장한 새로운 프롬프트 패턴들을 소개합니다.',
        date: '2024.03.05',
        category: '실용 가이드',
        image: '/trends/prompt.png',
        readTime: '6분',
    },
];

export default function AITrends() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-4 py-12"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                    AI 트렌드 & 인사이트
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    최신 AI 동향과 실용적인 인사이트를 공유합니다
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {trendArticles.map((article, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Card className="overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                                        {article.category}
                                    </span>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span>{article.date}</span>
                                        <span className="mx-2">·</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {article.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                                >
                                    <span>자세히 보기</span>
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    href="#blog"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                >
                    <span>모든 글 보기</span>
                    <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>
        </motion.section>
    );
}
